import { Test, TestingModule } from '@nestjs/testing';
import { TasksService } from './tasks.service';
import { getRepositoryToken } from '@nestjs/typeorm';
import { Task } from './entities/task.entity';

describe('TasksService', () => {
  let service: TasksService;

  const mockTaskRepository = {
    create: jest.fn().mockImplementation((dto) => dto),
    save: jest.fn().mockImplementation((task) =>
      Promise.resolve({
        id: '1',
        ...task,
      }),
    ),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TasksService,
        {
          provide: getRepositoryToken(Task),
          useValue: mockTaskRepository,
        },
      ],
    }).compile();

    service = module.get<TasksService>(TasksService);
  });

  it('should create a task', async () => {
    const dto = {
      title: 'Test task',
      description: 'Test description',
      status: 'pending' as any,
      dueDate: '2026-05-21',
    };

    const user = {
      id: 'user-1',
      email: 'test@test.com',
    } as any;

    const result = await service.create(dto, user);

    expect(result).toBeDefined();
    expect(result.title).toBe(dto.title);
    expect(mockTaskRepository.create).toHaveBeenCalled();
    expect(mockTaskRepository.save).toHaveBeenCalled();
  });
});