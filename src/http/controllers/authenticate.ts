import { FastifyReply, FastifyRequest } from 'fastify'
import { z } from 'zod'
import { PrismaUsersRepository } from '../repositories/prisma/prisma-users-repository'
import { AutheticateUseCase } from '../use-cases/authenticate'
import { InvalidCredentialsError } from '../use-cases/errors/invalid-credentials-error'

export async function authenticate(request: FastifyRequest, reply: FastifyReply) {
  const authenticateBodySchema = z.object({
    email: z.string().email(),
    password: z.string().min(6)
  })

  const { email, password } = authenticateBodySchema.parse(request.body)

  try {
    const usersRepository = new PrismaUsersRepository()
    const registerUseCase = new AutheticateUseCase(usersRepository)

    await registerUseCase.execute({
      email,
      password,
    })
  } catch (error) {
    if (error instanceof InvalidCredentialsError) {
      return reply.status(400).send({ message: error.message })
    }

    throw error
  }


  return reply.status(200).send()

}