"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { loginSchema } from "@/schemas/forms/auth";
import { Eye, EyeOff } from "lucide-react";
import { useRouter } from "next/navigation";
import { useLogin } from "@/hooks/auth/use-login";
import CustomButton from '../buttons/custom-button';
import { User, useUserStore } from "@/store/user-store";

export function FormLogin() {
  const { mutate, isPending } = useLogin();
  const setUser = useUserStore(state => state.setUser)
  const clearUser = useUserStore(state => state.clearUser)
  const router = useRouter();

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const [showPassword, setShowPassword] = useState(false);

  function onSubmit(values: z.infer<typeof loginSchema>) {
    mutate(values, {
      onSuccess: (data) => {
        const userLogged: User = {
          id: Date.now().toString(),
          email: values.email,
          name: "User de Prueba",
          role: "ADMIN",
          token: data.token
        }

        setUser(userLogged)
        router.push("/dashboard/home");
      },
      onError: () => {
        form.setError("root", { message: "Credenciales inválidas" });
      },
    });
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        {/* Email */}
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Email</FormLabel>
              <FormControl>
                <Input placeholder="Tu email" type="email" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        {/* Contraseña */}
        <FormField
          control={form.control}
          name="password"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Contraseña</FormLabel>
              <FormControl>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    placeholder="Tu contraseña"
                    {...field}
                    className="pr-10"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? (
                      <EyeOff size={20} strokeWidth={1.8} />
                    ) : (
                      <Eye size={20} strokeWidth={1.8} />
                    )}
                  </button>
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="w-full  flex justify-center items-center">
          {/* Botón */}

          <CustomButton className="w-1/2 lg:w-full flex justify-center" type="submit" loading={isPending}> Inicias Sesion </CustomButton>
        </div>

        {/* Error general (credenciales inválidas) */}
        {form.formState.errors.root && (
          <p className="text-sm text-red-500 text-center">
            {form.formState.errors.root.message}
          </p>
        )}
      </form>
    </Form>
  );
}
