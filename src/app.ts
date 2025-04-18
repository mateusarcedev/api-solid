import fastify from 'fastify'
import { approutes } from './http/routes'
import { ZodError } from 'zod'
import { env } from './env'
export const app = fastify()

app.register(approutes)

app.setErrorHandler((error, _, reply) => {
  if (error instanceof ZodError) {
    return reply
      .status(400)
      .send({ message: 'Validation error.', issues: error.format() })
  }

  if (env.NODE_ENV !== 'production') {
    console.error(error)
  } else {
    // add external log tool
  }

  return reply.status(500).send({
    message: 'Internal server error.'
  })
})