"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { Form, FormInput, FormLabel, FormSubmit } from "@/src/shared/components/forms"
import { SignInInput, SignInSchema } from "../schemas/authSchema"
import FormError from "@/src/shared/components/forms/FormError"
import { signInAction } from "../actions/auth-actions"


export default function LoginForm() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(SignInSchema),
    mode: "all",
  });

  const onSubmit = async (data: SignInInput) => {
    await signInAction(data);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="email">Email</FormLabel>
        <FormInput type="email" id="email" placeholder="Ingresa tu email" { ...register("email") } />
        { errors.email && <FormError>{errors.email.message}</FormError> }

        <FormLabel htmlFor="password">Contraseña</FormLabel>
        <FormInput type="password" id="password" placeholder="Ingresa tu email" { ...register("password") } />
        { errors.password && <FormError>{errors.password.message}</FormError> }

        <FormSubmit value="Iniciar Sesión" />
    </Form>
  )
}
