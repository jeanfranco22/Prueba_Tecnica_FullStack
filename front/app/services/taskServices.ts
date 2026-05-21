import { api } from "../utils/api";
import {
  CreateTaskPayload,
  UpdateTaskPayload,
} from "../interface/TaskInterface";

export const getTasks = async (status = "", page = 1, limit = 5) => {
  const query = new URLSearchParams();

  if (status && status !== "all") {
    query.append("status", status);
  }

  query.append("page", String(page));
  query.append("limit", String(limit));

  return api(`/tasks?${query.toString()}`, {
    method: "GET",
  });
};

export const createTask = async (data: CreateTaskPayload) => {
  return api("/tasks", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const updateTask = async (id: string, data: UpdateTaskPayload) => {
  return api(`/tasks/${id}`, {
    method: "PATCH",
    body: JSON.stringify(data),
  });
};

export const deleteTask = async (id: string) => {
  return api(`/tasks/${id}`, {
    method: "DELETE",
  });
};
