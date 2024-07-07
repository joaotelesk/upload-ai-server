import { Prompt } from '@prisma/client'

import { PromptsRepository } from '@/repositories/prompts-repository'

interface FetchAllPromptsUseCaseResponse {
  prompts: Prompt[]
}

export class FetchAllPromptsUseCase {
  constructor(private prompsRepository: PromptsRepository) {}

  async execute(): Promise<FetchAllPromptsUseCaseResponse> {
    const prompts = await this.prompsRepository.findMany()

    return { prompts }
  }
}
