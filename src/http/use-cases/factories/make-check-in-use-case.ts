import { PrismaCheckInsRepository } from "@/http/repositories/prisma/prisma-check-ins-repository"
import { PrismaGymsRepository } from "@/http/repositories/prisma/prisma-gyms-repository"
import { CheckInUseCase } from "../check-in"

export function makeCheckInUseCase() {
  const prismaCheckInsRepository = new PrismaCheckInsRepository()
  const gymsRepository = new PrismaGymsRepository()
  const useCase = new CheckInUseCase(prismaCheckInsRepository, gymsRepository)

  return useCase
}