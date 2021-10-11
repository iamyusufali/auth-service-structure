import fastify from 'fastify';

import AuthRoutesProvider from './routes/auth.routes';

const app = fastify({ logger: true });

app.register(AuthRoutesProvider);

const start = () => {
  try {
    app.listen(process.env.PORT || 3000);
  } catch (err) {
    app.log.error(err);
    process.exit(1);
  }
};

start();
