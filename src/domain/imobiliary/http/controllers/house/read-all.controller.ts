/* eslint-disable no-magic-numbers */
import { DrizzleHouseRepository } from '@/domain/imobiliary/application/repositories/drizzle/drizzle-house-repository';
import { ReadAllHouseUseCase } from '@/domain/imobiliary/application/use-cases/house/read-all/read-all-house-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';

async function readAll(request: FastifyRequest, reply: FastifyReply) {
  const drizzleHouseRepository = new DrizzleHouseRepository();
  const readAllHouseUseCase = new ReadAllHouseUseCase(drizzleHouseRepository);

  const houses = await readAllHouseUseCase.execute();

  reply.status(200).send(houses);
}

export { readAll };
