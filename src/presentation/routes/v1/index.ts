import { FastifyInstance } from 'fastify';

export const router = async (fastify: FastifyInstance): Promise<void> => {
  const { router: teams } = await import('./teams');

  fastify.register(teams, { prefix: '/teams' });
};
