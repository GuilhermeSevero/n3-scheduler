import { FastifyInstance, FastifyReply, FastifyRequest } from 'fastify';
import { teamsController } from '../../controllers';

export const router = async (fastify: FastifyInstance): Promise<void> => {
  fastify.get('/', async (reqquest: FastifyRequest, reply: FastifyReply) => {
    const teams = await teamsController.getAllTeams();

    reply.send(teams);
  });
};
