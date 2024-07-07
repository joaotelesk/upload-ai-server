import { Prisma, Prompt } from '@prisma/client'
import { randomUUID } from 'crypto'

import { PromptsRepository } from '../prompts-repository'

export class InMemoryPromptsRepository implements PromptsRepository {
  public items: Prompt[] = []

  async findMany() {
    return this.items
  }

  async create(data: Prisma.PromptCreateInput) {
    const prompt: Prompt = {
      id: data.id ?? randomUUID(),
      template: data.template,
      title: data.title,
    }
    await this.items.push(prompt)
    return prompt
  }
}
