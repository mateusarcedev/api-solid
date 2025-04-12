import fastify from 'fastify'
import { approutes } from './http/routes'
export const app = fastify()

app.register(approutes)