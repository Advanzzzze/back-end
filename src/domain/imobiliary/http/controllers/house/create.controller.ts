/* eslint-disable no-magic-numbers */
import { DrizzleHouseRepository } from '@/domain/imobiliary/application/repositories/drizzle/drizzle-house-repository';
import { CreateHouseUseCase } from '@/domain/imobiliary/application/use-cases/house/create/create-house-use-case';
import { FastifyReply, FastifyRequest } from 'fastify';
import { z } from 'zod';

async function create(request: FastifyRequest, reply: FastifyReply) {
  const drizzleHouseRepository = new DrizzleHouseRepository();
  const createHouseUseCase = new CreateHouseUseCase(drizzleHouseRepository);

  const requestBodySchema = z.object({
    name: z.string(),
    stage: z.coerce.number().min(0).max(1),
    type: z.coerce.number().min(0).max(2),
  });

  const { name, stage, type } = requestBodySchema.parse(request.body);

  await createHouseUseCase.execute({ name, stage, type });

  reply.status(201).send({ message: 'Successfully created house!' });
}

export { create };
