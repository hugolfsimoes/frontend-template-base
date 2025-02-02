import { useState } from "react";
import api from "../services/api";

export function useAuth() {
  const [ user, setUser ] = useState(null);

  const login = async (email: string, password: string) => {
    try {
      const { data } = await api.post("/auth/login", { email, password });
      setUser(data.user);
      return data;
    } catch (error) {
      console.error("Login failed", error);
      throw error;
    }
  };

  return { user, login };
}
