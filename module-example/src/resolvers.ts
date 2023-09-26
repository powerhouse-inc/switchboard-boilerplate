import { queryField, nonNull } from 'nexus/dist';

export const countUsers = queryField('countUsers', {
  type: 'Counter',
  args: {
    message: nonNull('String'),
  },
  resolve: async (_root, args, ctx) => {
    const aggr = await ctx.prisma.user.aggregate({_count: {address: true}})
    const message = args.message;
    return {
      count: aggr['_count'].address,
      message
    }
  },
});

export const countUsersPrisma = queryField('countUsersPrisma', {
  type: 'Counter',
  resolve: async (_root, _args, ctx) => await ctx.prisma.user.doCount(),
});
