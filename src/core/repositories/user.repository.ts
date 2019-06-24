import { Repository, EntityRepository } from 'typeorm';

import { User } from '../../shared/entities';

@EntityRepository(User)
export class UserRepository extends Repository<User> {}
