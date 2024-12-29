import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { UsersService } from '../service/users.service';
import { User } from '../users.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Get()
  async getAll(): Promise<User[]> {
    return await this.usersService.getAll();
  }

  @Get(':id')
  async get(@Param() id: number): Promise<User> {
    return await this.usersService.getOne(id);
  }

  @Post()
  async create(@Body() todo: User): Promise<User> {
    return await this.usersService.create(todo);
  }

  @Put(':id')
  async update(@Param() id: number, @Body() user: User): Promise<UpdateResult> {
    return await this.usersService.update(id, user);
  }

  @Delete(':id')
  async delete(@Param() id: number): Promise<DeleteResult> {
    return await this.usersService.delete(id);
  }
}
