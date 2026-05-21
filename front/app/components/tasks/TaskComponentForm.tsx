"use client";

import { useState } from "react";

interface TaskFormProps {
  onTaskCreated: () => void;
}

const TaskForm = ({ onTaskCreated }: TaskFormProps) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!title.trim()) return;

    const token = localStorage.getItem("token");

    try {
      setLoading(true);

      const res = await fetch(`${API_URL}/tasks`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          title,
          description,
        }),
      });

      if (!res.ok) throw new Error("Error creating task");

      setTitle("");
      setDescription("");
      onTaskCreated();
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-4 rounded-lg shadow-md space-y-4"
    >
      <input
        type="text"
        placeholder="Task title"
        className="w-full border p-2 rounded"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        placeholder="Task description"
        className="w-full border p-2 rounded"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button
        type="submit"
        disabled={loading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
      >
        {loading ? "Creating..." : "Create task"}
      </button>
    </form>
  );
};

export default TaskForm;
