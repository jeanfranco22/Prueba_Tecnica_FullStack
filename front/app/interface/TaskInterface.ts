export interface Task {
  id: string;
  title: string;
  description?: string;
  status: "pendiente" | "hecho";
  createdAt?: string;
}

export interface CreateTaskPayload {
  title: string;
  description?: string;
}

export interface UpdateTaskPayload {
  title?: string;
  description?: string;
  status?: "pendiente" | "hecho";
}
