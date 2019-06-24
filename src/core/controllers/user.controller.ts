import {
  Controller,
  Post,
  Get,
  Patch,
  Delete,
  Param,
  ParseIntPipe,
  Body,
} from '@nestjs/common';

import { UserCreateDto } from '../../shared/dtos';
import { UserService } from '../services/user.service';
import { ParseEntityPipe } from '../pipes/parse-entity.pipe';
import { Roles } from '../../core/decorators/roles.decorator';
import { EveryoneRole } from '../roles/everyone.role';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  public create(@Body(new ParseEntityPipe()) user: UserCreateDto) {}

  @Get()
  public get() {
    return this.userService.get();
  }

  @Roles(EveryoneRole)
  @Get(':id([0-9]+|me)')
  public getOne(@Param('id', ParseIntPipe) id: number) {}

  @Patch(':id([0-9]+|me)')
  public update(@Param('id', ParseIntPipe) id: number) {}

  @Delete(':id([0-9]+|me)')
  public remove(@Param('id', ParseIntPipe) id: number) {}
}
