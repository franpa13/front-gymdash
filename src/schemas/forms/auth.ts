import z from "zod";

// ✅ Schema para login
export const loginSchema = z.object({
  username: z.string().min(2, { message: "El usuario es obligatorio" }),
  password: z.string().min(8, { message: "La contraseña es obligatoria" }),
})