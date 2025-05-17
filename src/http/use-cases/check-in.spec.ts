import { Decimal } from "@prisma/client/runtime/library";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { InMemoryCheckInsRepository } from "../repositories/in-memory/in-memory-check-ins-repository";
import { InMemoryGymsRepository } from "../repositories/in-memory/in-memory-gyms-repository";
import { CheckInUseCase } from "./check-in";
import { MaxDistanceError } from "./errors/max-distance-error";
import { MaxNumberOfCheckInsError } from "./errors/max-number-of-check-ins-error";

let checkInsRepository: InMemoryCheckInsRepository
let gymsRepository: InMemoryGymsRepository
let sut: CheckInUseCase

describe('Check-in Use Case', () => {
  beforeEach(async () => {
    checkInsRepository = new InMemoryCheckInsRepository()
    gymsRepository = new InMemoryGymsRepository()
    sut = new CheckInUseCase(checkInsRepository, gymsRepository)

    await gymsRepository.create({
      id: 'gym-01',
      title: 'Javascript Gym',
      description: null,
      phone: null,
      latitude: -3.1124314,
      longitude: -60.0375103,
    })

    vi.useFakeTimers()
  })

  afterEach(() => {
    vi.useRealTimers()
  })

  it('should be able to check in', async () => {
    const { checkIn } = await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      userLatitude: -3.1124314,
      userLongitude: -60.0375103,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('should not be able to check in twice in the same day', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))

    await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      userLatitude: -3.1124314,
      userLongitude: -60.0375103,
    })

    await expect(() => sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      userLatitude: -3.1124314,
      userLongitude: -60.0375103,
    })).rejects.toBeInstanceOf(MaxNumberOfCheckInsError)
  })

  it('should be able to check in twice but in different day', async () => {
    vi.setSystemTime(new Date(2022, 0, 20, 8, 0, 0))

    await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      userLatitude: -3.1124314,
      userLongitude: -60.0375103,
    })

    vi.setSystemTime(new Date(2022, 0, 21, 8, 0, 0))

    const { checkIn } = await sut.execute({
      gymId: 'gym-01',
      userId: 'user-01',
      userLatitude: -3.1124314,
      userLongitude: -60.0375103,
    })

    expect(checkIn.id).toEqual(expect.any(String))
  })

  it('should not be able to check in on distant gym', async () => {
    gymsRepository.items.push({
      id: 'gym-02',
      title: 'Javascript Gym',
      description: '',
      phone: '',
      latitude: new Decimal(-3.0925353534196707),
      longitude: new Decimal(-60.02091496328062),
    })


    await expect(() => sut.execute({
      gymId: 'gym-02',
      userId: 'user-01',
      userLatitude: -3.1124314,
      userLongitude: -60.0375103,
    })).rejects.toBeInstanceOf(MaxDistanceError)

  })

})

