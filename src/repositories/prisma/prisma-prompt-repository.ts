import { Prisma } from '@prisma/client'

import { prisma } from '@/lib/prisma'

import { PromptsRepository } from '../prompts-repository'

export class PrismaPromptRepository implements PromptsRepository {
  async findMany() {
    const prompts = await prisma.prompt.findMany()

    return prompts
  }

  async create(data: Prisma.PromptCreateInput) {
    const prompt = await prisma.prompt.create({
      data,
    })
    return prompt
  }
}
