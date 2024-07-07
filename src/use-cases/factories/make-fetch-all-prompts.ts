import { PrismaPromptRepository } from '@/repositories/prisma/prisma-prompt-repository'

import { FetchAllPromptsUseCase } from '../fetch-all-prompts'

export function makeFetchAllPromptsUseCase() {
  const prompsRepository = new PrismaPromptRepository()
  const useCase = new FetchAllPromptsUseCase(prompsRepository)
  return useCase
}
