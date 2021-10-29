import fastify, { FastifyInstance } from 'fastify';

const initRoutes = async (server: FastifyInstance) => {
  const { router } = await import('./routes');

  server.register(router, { prefix: '/rest' });
};

const normalizePort = (val: any): any => {
  const port = parseInt(val, 10);
  if (Number.isNaN(port)) {
    return val; // named pipe
  }
  if (port >= 0) {
    return port; // port number
  }
  return false;
};

export const initApp = async (): Promise<void> => {
  const port = normalizePort(process.env.PORT || '3000');

  const server = await fastify();

  await initRoutes(server);

  server.listen(port, (err: Error, address: string) => {
    if (err) {
      console.error(err);
      process.exit(1);
    }
    console.log(`Server listening at ${address}`);
  });
};
