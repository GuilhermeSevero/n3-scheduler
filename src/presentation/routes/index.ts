import { FastifyInstance } from 'fastify';

export const router = async (fastify: FastifyInstance): Promise<void> => {
  const { router: v1 } = await import('./v1');

  fastify.register(v1, { prefix: '/v1' });
};
