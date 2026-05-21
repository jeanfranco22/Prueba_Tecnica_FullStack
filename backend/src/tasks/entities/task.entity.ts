import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';

import { User } from '../../users/entities/user.entity';

import { TaskStatus } from '../enums/task-status.enum';

@Entity()
export class Task {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column({
    nullable: true,
  })
  description: string;

  @Column({
  type: 'enum',
  enum: TaskStatus,
  default: TaskStatus.PENDING,
  })
  status: TaskStatus;

  @Column({
    nullable: true,
  })
  dueDate: Date;

  @ManyToOne(() => User, (user) => user.tasks, {
    onDelete: 'CASCADE',
  })
  user: User;

  @CreateDateColumn()
  createdAt: Date;
}