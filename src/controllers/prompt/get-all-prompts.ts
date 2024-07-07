import { FastifyReply, FastifyRequest } from 'fastify'

import { makeFetchAllPromptsUseCase } from '@/use-cases/factories/make-fetch-all-prompts'

export async function getALLPrompts(
  request: FastifyRequest,
  reply: FastifyReply,
) {
  const fetchAllPromptsUseCase = makeFetchAllPromptsUseCase()
  const { prompts } = await fetchAllPromptsUseCase.execute()
  return reply.status(200).send({ prompts })
}
