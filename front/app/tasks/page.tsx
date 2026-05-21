"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

import TaskForm from "../components/tasks/TaskComponentForm";
import TaskList from "../components/tasks/TaskComponentList";
import { Task } from "../components/tasks/TaskComponentCard";
import TaskComponentFilter from "../components/tasks/TaskComponentFilters";
import PaginationComponent from "../components/tasks/PaginationComponent";

import { getTasks } from "../services/taskServices";

const TasksPage = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [status, setStatus] = useState("");
  const [page, setPage] = useState(1);
  const [hasNextPage, setHasNextPage] = useState(false);
  const [loading, setLoading] = useState(true);

  const limit = 5;

  const fetchTasks = async () => {
    try {
      setLoading(true);

      const data = await getTasks(status, page, limit);

      console.log("TASKS RESPONSE:", data);

      const tasksArray = data.data || [];

      setTasks(tasksArray);
      setHasNextPage(tasksArray.length === limit);
    } catch (error) {
      console.error(error);
      setTasks([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const token = localStorage.getItem("token");

    if (!token) {
      window.location.href = "/login";
      return;
    }

    fetchTasks();
  }, [status, page]);

  const handleStatusChange = (newStatus: string) => {
    setStatus(newStatus);
    setPage(1);
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200">
      <section className="border-b bg-white shadow-sm">
        <div className="max-w-5xl mx-auto px-6 py-5 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-bold text-gray-800">Mis tareas</h1>
          </div>

          <div className="flex gap-3">
            <Link
              href="/"
              className="border border-gray-300 hover:bg-gray-100 px-4 py-2 rounded-xl transition font-medium"
            >
              Home
            </Link>

            <button
              onClick={() => {
                localStorage.removeItem("token");
                window.location.href = "/login";
              }}
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-xl transition font-medium"
            >
              Logout
            </button>
          </div>
        </div>
      </section>

      <section className="max-w-5xl mx-auto p-6 space-y-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <TaskForm onTaskCreated={fetchTasks} />
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          <TaskComponentFilter status={status} setStatus={handleStatusChange} />
        </div>

        <div className="bg-white rounded-2xl shadow-md p-6">
          {loading ? (
            <div className="flex justify-center py-10">
              <p className="text-gray-500 text-lg">Cargando</p>
            </div>
          ) : tasks.length > 0 ? (
            <>
              <TaskList tasks={tasks} onTaskUpdated={fetchTasks} />

              <div className="mt-8">
                <PaginationComponent
                  page={page}
                  setPage={setPage}
                  hasNextPage={hasNextPage}
                />
              </div>
            </>
          ) : (
            <div className="text-center py-10 space-y-3">
              <h2 className="text-2xl font-semibold text-gray-700">
                No hay tareas para mostrar
              </h2>

              <p className="text-gray-500">Crea una tarea.</p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default TasksPage;
