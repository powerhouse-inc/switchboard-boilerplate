import type { Express } from "express";
import express from "express";
import expressPlayground from "graphql-playground-middleware-express";
import { getChildLogger } from "./logger";
import basePrisma from "./database";
import { API_GQL_ENDPOINT } from "./env";

const logger = getChildLogger({ msgPrefix: "APP" });
const startupTime = new Date();

export const createApp = (): Express => {
  logger.debug("Creating app");
  const app = express();

  app.get("/healthz", async (_req, res) => {
    try {
      // TODO: after migration to postgres, do SELECT 1
      await basePrisma.user.findFirst();
    } catch (error: any) {
      return res.status(500).json({
        status: `Failed database initialization check with error: ${error?.message}`,
        time: new Date(),
        startupTime,
      });
    }
    return res.json({
      status: "healthy",
      time: new Date(),
      startupTime,
    });
  });

  app.get(
    "/",
    expressPlayground({
      endpoint: API_GQL_ENDPOINT,
      settings: {
        "editor.theme": "light",
        "request.credentials": "include",
      },
    })
  );

  app.get(
    "/:driveId",
    expressPlayground({
      endpoint: API_GQL_ENDPOINT,
      settings: {
        "editor.theme": "light",
        "request.credentials": "include",
      },
    })
  );
  return app;
};
