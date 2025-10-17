import z from "zod";

// ✅ Schema para login
export const loginSchema = z.object({
  email: z.string().min(2, { message: "El email es obligatorio" }),
  password: z.string().min(8, { message: "La contraseña es obligatoria" }),
})