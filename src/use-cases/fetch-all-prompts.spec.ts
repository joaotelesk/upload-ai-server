import { InMemoryPromptsRepository } from '@/repositories/in-memory/in-memory-prompts.repository'

import { FetchAllPromptsUseCase } from './fetch-all-prompts'

let promptsRepository: InMemoryPromptsRepository
let sut: FetchAllPromptsUseCase

describe('Fetch All Prompts', () => {
  beforeEach(async () => {
    promptsRepository = new InMemoryPromptsRepository()
    sut = new FetchAllPromptsUseCase(promptsRepository)
  })
  it('should be able to fetch prompts', async () => {
    await promptsRepository.create({
      title: 'example title',
      template: 'example template',
    })

    const { prompts } = await sut.execute()
    expect(prompts).toHaveLength(1)
    expect(prompts).toEqual([
      expect.objectContaining({ title: 'example title' }),
    ])
  })
})
