import z, { email } from "zod";

export const BaseAuthSchema = z.object({
    name: z.string().min(1, {error: "El nombre es obligatorio"}),
    email: z.email({error: "El email no es válido"}),
    password: z.string().min(8, {error: "La contraseña debe ser mínima de 8 caracteres"}),
    passwordConfirmation: z.string().min(1, {error: "La contraseña no puede estar vacía"})
});


export const SignUpSchema = BaseAuthSchema.pick({
    name: true,
    email: true,
    password: true,
    passwordConfirmation: true,
});