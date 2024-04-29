import fastify from 'fastify';
import { housesRoute } from './domain/imobiliary/http/controllers/house/route';

const app = fastify();

app.register(housesRoute);

export { app };
