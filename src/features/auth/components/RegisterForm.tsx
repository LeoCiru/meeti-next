"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form,FormInput,FormLabel, FormSubmit } from "@/src/shared/components/forms";
import { SignUpSchema } from "../schemas/authSchema";
import FormError from "@/src/shared/components/forms/FormError";

export default function RegisterForm() {

  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: zodResolver(SignUpSchema),
    mode: "onSubmit" // TODO: Change it to 'all'
  });
  console.log(errors);

  const onSubmit = () => {
    console.log("Submit...");
    
  }
  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
        <FormLabel htmlFor="name">Nombre</FormLabel>
        <FormInput type="text" id="name" placeholder="Ingresa tu nombre" {...register("name")} />
        { errors.name && <FormError>{errors.name.message}</FormError> }

        <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
        <FormInput type="email" id="email" placeholder="Ingresa tu correo electrónico" { ...register("email") }/>
        { errors.email && <FormError>{errors.email.message}</FormError> }

        <FormLabel htmlFor="password">Contraseña</FormLabel>
        <FormInput type="password" id="password" placeholder="Contraseña - Min. 8 caracteres" { ...register("password") }/>
        { errors.password && <FormError>{errors.password.message}</FormError> }

        <FormLabel htmlFor="password_confirmation">Repetir contraseña</FormLabel>
        <FormInput type="password" id="password_confirmation" placeholder="Repite tu contraseña" { ...register("passwordConfirmation") } />
        { errors.passwordConfirmation && <FormError>{errors.passwordConfirmation.message}</FormError> }

        <FormSubmit value="Registrarme"/>
    </Form>
  )
}
