import { Injectable } from '@nestjs/common';
import { Request } from 'express';

import { RoleResolver } from '../../types/role.type';

@Injectable()
export class EveryoneRole implements RoleResolver {
  public canActivate(user: any, request: Request) {
    return true;
  }
}
