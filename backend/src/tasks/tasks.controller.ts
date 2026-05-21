import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
  Req,
  UseGuards,
} from '@nestjs/common';
import type { Request } from 'express';

import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';

@Controller('tasks')
@UseGuards(JwtAuthGuard)
export class TasksController {
  constructor(private readonly tasksService: TasksService) {}

  @Post()
create(@Body() createTaskDto: CreateTaskDto, @Req() req: Request) {
  return this.tasksService.create(createTaskDto, (req.user as any).userId);
}

  @Get()
  async findAll(
    @Req() req: Request,
    @Query('status') status?: string,
    @Query('page') page = '1',
    @Query('limit') limit = '10',
  ) {
    const [tasks, total] = await this.tasksService.findAll(
      (req.user as any).userId,
      status,
      Number(page),
      Number(limit),
    );

    return {
      data: tasks,
      total,
      page: Number(page),
      limit: Number(limit),
    };
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateTaskDto: UpdateTaskDto,
    @Req() req: Request,
  ) {
    return this.tasksService.update(id, updateTaskDto, (req.user as any).userId);
  }

  @Delete(':id')
  remove(@Param('id') id: string, @Req() req: Request) {
    return this.tasksService.remove(id, (req.user as any).userId);
  }
}