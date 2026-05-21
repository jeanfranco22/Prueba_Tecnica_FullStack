"use client";

import TaskCard, { Task } from "./TaskComponentCard";

interface TaskListProps {
  tasks: Task[];
  onTaskUpdated: () => void;
}

const TaskList = ({ tasks, onTaskUpdated }: TaskListProps) => {
  if (tasks.length === 0) {
    return <p className="text-gray-500">No tasks found.</p>;
  }

  return (
    <div className="grid gap-4">
      {tasks.map((task) => (
        <TaskCard key={task.id} task={task} onTaskUpdated={onTaskUpdated} />
      ))}
    </div>
  );
};

export default TaskList;
