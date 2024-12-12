import {
  Controller,
  Get,
  Post,
  Put,
  Param,
  Delete,
  Body,
} from '@nestjs/common';
import { TodoService } from '../service/todo.service';
import { Todo } from '../todo.entity';
import { UpdateResult, DeleteResult } from 'typeorm';

@Controller('todo')
export class TodoController {
  constructor(private todoService: TodoService) {}

  @Get()
  async getAll(): Promise<Todo[]> {
    return await this.todoService.getAll();
  }

  @Get(':id')
  async get(@Param() id: number): Promise<Todo> {
    return await this.todoService.getOne(id);
  }

  @Post()
  async create(@Body() todo: Todo): Promise<Todo> {
    return await this.todoService.create(todo);
  }

  @Put()
  async update(@Param() id: number, @Body() todo: Todo): Promise<UpdateResult> {
    return await this.todoService.update(id, todo);
  }

  @Delete()
  async delete(@Param() id: number): Promise<DeleteResult> {
    return await this.todoService.delete(id);
  }
}
