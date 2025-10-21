"use client"
import { loginUser } from "@/services/auth/loggin-user";
import { useMutation } from "@tanstack/react-query";

export const useLogin = () => {
  const mutation = useMutation({
    mutationFn: loginUser, // recibe { email, password }
    
  });

  return mutation;
};
