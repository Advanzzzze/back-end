/* eslint-disable require-await */
import { FastifyInstance } from 'fastify';
import { readAll } from './read-all.controller';
import { create } from './create.controller';
import { readById } from './read-by-id.controller';
import { deleteHouse } from './delete-house.controller';
import { update } from './update.controller';

async function housesRoute(app: FastifyInstance) {
  app.get('/house', readAll);
  app.get('/house/:id', readById);
  app.post('/house', create);
  app.put('/house/:id', update);
  app.delete('/house/:id', deleteHouse);
}

export { housesRoute };
