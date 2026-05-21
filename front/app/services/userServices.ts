import { api } from "../utils/api";
import { LoginData, RegisterData } from "../types/authTypes";

export const registerUser = async (data: RegisterData) => {
  return api("/auth/register", {
    method: "POST",
    body: JSON.stringify(data),
  });
};

export const loginUser = async (data: LoginData) => {
  return api("/auth/login", {
    method: "POST",
    body: JSON.stringify(data),
  });
};
