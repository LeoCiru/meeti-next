import z from "zod";

export const BaseAuthSchema = z.object({
    name: z.string().trim().min(1, {error: "El nombre es obligatorio"}),
    email: z.email({error: "El email no es válido"}),
    password: z.string().trim().min(8, {error: "La contraseña debe ser mínima de 8 caracteres"}),
    passwordConfirmation: z.string().trim().min(1, {error: "La contraseña no puede estar vacía"})
});


export const SignUpSchema = BaseAuthSchema.pick({
    name: true,
    email: true,
    password: true,
    passwordConfirmation: true,
}).refine((data) => data.password === data.passwordConfirmation, {
    error: "Las contraseñas no coinciden",
    path: ["passwordConfirmation"]
});

export const SignInSchema = BaseAuthSchema.pick({
    email: true,
}).extend({
    password: z.string().trim().min(1, {error: "El password no puede ir vacío"}),
})

export type SignUpInput = z.infer<typeof SignUpSchema>
export type SignInInput = z.infer<typeof SignInSchema>