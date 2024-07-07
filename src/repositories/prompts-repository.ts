import { Prisma, Prompt } from '@prisma/client'
export interface PromptsRepository {
  findMany(): Promise<Prompt[]>
  create(data: Prisma.PromptCreateInput): Promise<Prompt>
}
