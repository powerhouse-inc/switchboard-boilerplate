import { compare, hash } from 'bcrypt';
import { PrismaClient, User as PrismaUser } from '@prisma/client';
import { GraphQLError } from 'graphql';

export function getUserCrud(prisma: PrismaClient) {
  return {
    getUserByUsernamePassword: async (userNamePass: { username: string; password: string }) => {
      const { username, password } = userNamePass;
      const user = await prisma.user.findUnique({
        where: {
          username,
        },
      });
      if (!user) {
        throw new GraphQLError('User not found', { extensions: { code: 'USER_NOT_FOUND' } });
      }
      const passwordValid = await compare(password, user.password);
      if (!passwordValid) {
        throw new GraphQLError('Invalid password', { extensions: { code: 'INVALID_PASSWORD' } });
      }
      return user;
    },
    createUser: async (user: { username: string; password: string }) => {
      const { username, password } = user;
      const hashedPassword = await hash(password, 10);
      let createdUser: PrismaUser;
      try {
        createdUser = await prisma.user.create({
          data: {
            username,
            password: hashedPassword,
          },
        });
      } catch (e: any) {
        if ('code' in e && e.code === 'P2002') {
          throw new GraphQLError('Username already taken', { extensions: { code: 'USERNAME_TAKEN' } });
        }
        /* istanbul ignore next @preserve */
        throw e;
      }
      return createdUser;
    },
  };
}