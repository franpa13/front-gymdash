"use client"
import { loginUser } from "@/services/auth/loggin-user";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const mutation = useMutation({
    mutationFn: loginUser, // recibe { email, password }
    onSuccess: (data) => {
      console.log("Login exitoso:", data);
      // Aquí podrías guardar el token o redirigir
    },
    onError: (error) => {
      console.error("Error en login:", error);
    },
  });

  return mutation;
};
