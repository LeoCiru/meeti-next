import { Form,FormInput,FormLabel, FormSubmit } from "@/src/shared/components/forms";
import { useForm } from "react-hook-form";

export default function RegisterForm() {

  const { register,  } = useForm()
  return (
    <Form>
        <FormLabel htmlFor="name">Nombre</FormLabel>
        <FormInput type="text" id="name" placeholder="Ingresa tu nombre" {...register("name")} />

        <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
        <FormInput type="email" id="email" placeholder="Ingresa tu correo electrónico" { ...register("email") }/>

        <FormLabel htmlFor="password">Contraseña</FormLabel>
        <FormInput type="password" id="password" placeholder="Contraseña - Min. 8 caracteres" { ...register("password") }/>

        <FormLabel htmlFor="password_confirmation">Repetir contraseña</FormLabel>
        <FormInput type="password" id="password_confirmation" placeholder="Repite tu contraseña" { ...register("passwordConfirmation") } />

        <FormSubmit value="Registrarme"/>
    </Form>
  )
}
