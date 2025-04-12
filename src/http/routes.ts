import { app } from "@/app";
import { register } from "./controllers/register";
import { FastifyInstance } from "fastify";

export async function approutes(app: FastifyInstance) {
  app.post('/users', register)
}