import { SetMetadata } from '@nestjs/common';

import { RolesArg } from '../../types/role.type';

export const Roles = (...roles: RolesArg) => SetMetadata('roles', roles);
