import { idArg, list, queryField } from 'nexus';
import { StrandUpdate } from '../definitions';

export const strands = queryField('strands', {
  type: list(StrandUpdate),
  args: {
    listenerId: idArg(),
  },
  resolve: async (_parent, { listenerId }, ctx) => {
    try {
      const result = await ctx.prisma.document.pullStrands(
        ctx.driveId ?? '1',
        listenerId!,
      );
      return result.map((e) => ({
        driveId: e.driveId,
        documentId: e.documentId,
        scope: e.scope,
        branch: e.branch,
        operations: e.operations.map((o) => ({
          index: o.index,
          skip: o.skip,
          type: o.type,
          input: JSON.stringify(o.input),
          hash: o.hash,
          timestamp: o.timestamp,
        })),
      }));
    } catch (e) {
      return [];
    }
  },
});

export const strandsSince = queryField('strandsSince', {
  type: list(StrandUpdate),
  args: {
    listenerId: idArg(),
    since: 'Date',
  },
  resolve: async (_parent, { listenerId, since }, ctx) => {
    try {
      // @todo: fetch strands from connect drive server
      const result = await ctx.prisma.document.pullStrands(
        ctx.driveId ?? '1',
        listenerId!,
        since,
      );
      return result.map((e) => ({
        driveId: e.driveId,
        documentId: e.documentId,
        scope: e.scope,
        branch: e.branch,
        operations: e.operations.map((o) => ({
          revision: o.index,
          skip: o.skip,
          name: o.type,
          inputJson: JSON.stringify(o.input),
          stateHash: o.hash,
        })),
      }));
    } catch (e) {
      return [];
    }
  },
});