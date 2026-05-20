import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly usersRepository: Repository<User>,
  ) {}

  findByEmail(email: string) {
    return this.usersRepository.findOne({
      where: { email },
    });
  }

  create(userData: Partial<User>) {
    const user = this.usersRepository.create(userData);

    return this.usersRepository.save(user);
  }
}