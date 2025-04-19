import { hash } from 'bcryptjs'
import { beforeEach, describe, expect, it } from 'vitest'
import { InMemoryUsersRepository } from '../repositories/in-memory/in-memory-users-repository'
import { AutheticateUseCase } from './authenticate'
import { InvalidCredentialsError } from './errors/invalid-credentials-error'

let usersRepository: InMemoryUsersRepository
let sut: AutheticateUseCase

describe('Authenticate Use Case', () => {
  beforeEach(() => {
    usersRepository = new InMemoryUsersRepository()
    sut = new AutheticateUseCase(usersRepository)
  })

  it('should be able to authenticate', async () => {
    await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password_hash: await hash('123456', 6)
    })

    const { user } = await sut.execute({
      email: 'johndoe@mail.com',
      password: '123456'
    })

    expect(user.id).toEqual(expect.any(String))
  })

  it('should be able to authenticate with wrong email', async () => {
    await expect(() => sut.execute({
      email: 'johndoe@mail.com',
      password: '123456'
    })).rejects.toBeInstanceOf(InvalidCredentialsError)
  })

  it('should be able to authenticate with wrong password', async () => {
    await usersRepository.create({
      name: 'John Doe',
      email: 'johndoe@mail.com',
      password_hash: await hash('123456', 6)
    })

    await expect(() => sut.execute({
      email: 'johndoe@mail.com',
      password: '1234567'
    })).rejects.toBeInstanceOf(InvalidCredentialsError)
  })
})