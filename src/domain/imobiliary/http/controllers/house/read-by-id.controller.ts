/* eslint-disable no-magic-numbers */
import { DrizzleHouseRepository } from '@/domain/imobiliary/application/repositories/drizzle/drizzle-house-repository';
import { ReadByIdHouseUseCase } from '@/domain/imobiliary/application/use-cases/house/read-by-id/read-by-id-house-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

async function readById(request: FastifyRequest, reply: FastifyReply) {
  const drizzleHouseRepository = new DrizzleHouseRepository();
  const createHouseUseCase = new ReadByIdHouseUseCase(drizzleHouseRepository);

  const requestParamsSchema = z.object({
    id: z.string(),
  });

  const { id } = requestParamsSchema.parse(request.params);

  const { house } = await createHouseUseCase.execute(id);

  reply.status(200).send(house);
}

export { readById };
