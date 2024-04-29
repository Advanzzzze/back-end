/* eslint-disable no-magic-numbers */
import { DrizzleHouseRepository } from '@/domain/imobiliary/application/repositories/drizzle/drizzle-house-repository';
import { UpdateHouseUseCase } from '@/domain/imobiliary/application/use-cases/house/update/update-house-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

async function update(request: FastifyRequest, reply: FastifyReply) {
  const drizzleHouseRepository = new DrizzleHouseRepository();
  const updateHouseUseCase = new UpdateHouseUseCase(drizzleHouseRepository);

  const requestParamsSchema = z.object({
    id: z.string(),
  });
  const requestBodySchema = z.object({
    name: z.string().optional(),
    stage: z.coerce.number().min(0).max(1).optional(),
    type: z.coerce.number().min(0).max(2).optional(),
  });

  const { id } = requestParamsSchema.parse(request.params);
  const { name, stage, type } = requestBodySchema.parse(request.body);

  await updateHouseUseCase.execute({ name, stage, type }, id);

  reply.status(200).send({ message: 'Successffuly house updated!' });
}

export { update };
