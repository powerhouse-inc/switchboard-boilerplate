import { defineConfig } from "vite";

import packageJson from "./package.json";

const dependencies = Object.keys({
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
});

// const external = process.env.NODE_ENV === "production" ? [] : dependencies;

const nodeModules = ["http", "os", "worker_threads", "url", "child_process"];
const external = ["@sentry/profiling-node"];
export default defineConfig({
    build: {
        target: "node20",
        lib: {
            name: "switchboard",
            entry: '/src/index.ts',
        },
        ssr: true,
        rollupOptions: {
            input: '/src/index.ts',
            // external,
        },
    },
    ssr: {
        external: external,
        noExternal: ["express"]
    }


})