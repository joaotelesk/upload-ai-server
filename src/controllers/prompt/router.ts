import { FastifyInstance } from 'fastify'

import { getALLPrompts } from './get-all-prompts'

export async function promptsRouter(app: FastifyInstance) {
  app.get('/prompts', getALLPrompts)
}
