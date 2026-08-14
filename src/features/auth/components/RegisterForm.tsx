"use client"

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { Form,FormInput,FormLabel, FormSubmit } from "@/src/shared/components/forms";
import { SignUpInput, SignUpSchema } from "../schemas/authSchema";
import FormError from "@/src/shared/components/forms/FormError";
import { signUpAction } from "../actions/auth-actions";

export default function RegisterForm() {

  const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: zodResolver(SignUpSchema),
    mode: "all",
  });

  const onSubmit = async (data : SignUpInput) => {
    const { error, success } = await signUpAction(data);

    if (error) {
      toast.error(error);
    }

    if (success) {
      toast.success(success);
      reset();
    }
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
