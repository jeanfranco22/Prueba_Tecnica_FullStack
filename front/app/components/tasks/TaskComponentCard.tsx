"use client";

import { useState } from "react";

export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "pending" | "done";
}

interface TaskCardProps {
  task: Task;
  onTaskUpdated: () => void;
}

const TaskCard = ({ task, onTaskUpdated }: TaskCardProps) => {
  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState(task.title);
  const [description, setDescription] = useState(task.description || "");

  const token =
    typeof window !== "undefined" ? localStorage.getItem("token") : null;

  const handleToggleStatus = async () => {
    try {
      const res = await fetch(`${API_URL}/tasks/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          status: task.status === "pending" ? "done" : "pending",
        }),
      });

      if (!res.ok) throw new Error("Error updating task");

      onTaskUpdated();
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = async () => {
    try {
      const res = await fetch(`${API_URL}/tasks/${task.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (!res.ok) throw new Error("Error editing task");

      setIsEditing(false);
      onTaskUpdated();
    } catch (error) {
      console.error(error);
    }
  };

  const handleCancelEdit = () => {
    setTitle(task.title);
    setDescription(task.description || "");
    setIsEditing(false);
  };

  const handleDelete = async () => {
    try {
      const res = await fetch(`${API_URL}/tasks/${task.id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (!res.ok) throw new Error("Error deleting task");

      onTaskUpdated();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-3">
      {isEditing ? (
        <>
          <div className="flex flex-col gap-2">
            <input
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="border px-3 py-2 rounded"
              placeholder="Task title"
            />

            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="border px-3 py-2 rounded resize-none"
              placeholder="Task description"
              rows={3}
            />
          </div>

          <div className="flex gap-2">
            <button
              onClick={handleEdit}
              className="bg-black text-white px-3 py-2 rounded"
            >
              Save
            </button>

            <button
              onClick={handleCancelEdit}
              className="bg-gray-200 text-gray-800 px-3 py-2 rounded"
            >
              Cancel
            </button>
          </div>
        </>
      ) : (
        <>
          <div>
            <h3 className="font-semibold text-lg">{task.title}</h3>
            <p className="text-gray-600">{task.description}</p>
          </div>

          <span
            className={`w-fit px-3 py-1 rounded-full text-sm ${
              task.status === "done"
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
            }`}
          >
            {task.status}
          </span>

          <div className="flex gap-2 flex-wrap">
            <button
              onClick={() => setIsEditing(true)}
              className="bg-blue-600 text-white px-3 py-2 rounded"
            >
              Edit
            </button>

            <button
              onClick={handleToggleStatus}
              className="bg-gray-800 text-white px-3 py-2 rounded"
            >
              {task.status === "pending" ? "Mark as done" : "Mark as pending"}
            </button>

            <button
              onClick={handleDelete}
              className="bg-red-600 text-white px-3 py-2 rounded"
            >
              Delete
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default TaskCard;
