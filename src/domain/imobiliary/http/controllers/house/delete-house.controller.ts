/* eslint-disable no-magic-numbers */
import { DrizzleHouseRepository } from '@/domain/imobiliary/application/repositories/drizzle/drizzle-house-repository';
import { DeleteHouseUseCase } from '@/domain/imobiliary/application/use-cases/house/delete/delete-house-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

async function deleteHouse(request: FastifyRequest, reply: FastifyReply) {
  const drizzleHouseRepository = new DrizzleHouseRepository();
  const deleteHouseUseCase = new DeleteHouseUseCase(drizzleHouseRepository);

  const requestParamsSchema = z.object({
    id: z.string(),
  });

  const { id } = requestParamsSchema.parse(request.params);

  await deleteHouseUseCase.execute(id);

  reply.status(200).send({ message: 'Successffuly house deleted!' });
}

export { deleteHouse };
