import request from 'supertest'

import { app } from '@/app'
import { prisma } from '@/lib/prisma'

describe('Get All Prompts (e2e)', () => {
  beforeAll(async () => {
    await app.ready()
  })
  afterAll(async () => {
    await app.close()
  })
  it('should be able to get all prompts', async () => {
    await prisma.prompt.createMany({
      data: [
        {
          title: 'example-title-1',
          template: 'example-template-1',
        },
        {
          title: 'example-title-2',
          template: 'example-template-2',
        },
      ],
    })
    const response = await request(app.server).get('/prompts').send()
    expect(response.statusCode).toEqual(200)
    expect(response.body.prompts).toHaveLength(2)
  })
})
