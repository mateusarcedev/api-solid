import { PrismaUsersRepository } from "@/http/repositories/prisma/prisma-users-repository"
import { GetUserProfileUseCase } from "../get-user-profile"

export function makeGetUserProfileUseCase() {
  const prismaUsersRepository = new PrismaUsersRepository()
  const useCase = new GetUserProfileUseCase(prismaUsersRepository)

  return useCase
}