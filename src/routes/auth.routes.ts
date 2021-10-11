import { RouteOptions, FastifyInstance } from 'fastify';

const authRoutes: RouteOptions[] = [];

const AuthRoutesProvider = (
  fastify: FastifyInstance,
  options: RouteOptions,
  next: Function
) => {
  authRoutes.forEach((r) => fastify.route(r));

  next();
};

export default AuthRoutesProvider;
