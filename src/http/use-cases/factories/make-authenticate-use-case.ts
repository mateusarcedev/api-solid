import { PrismaUsersRepository } from "@/http/repositories/prisma/prisma-users-repository"
import { AutheticateUseCase } from "../authenticate"

export function makeAuthenticateUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const autheticateUseCase = new AutheticateUseCase(prismaUsersRepository)

  return autheticateUseCase
}