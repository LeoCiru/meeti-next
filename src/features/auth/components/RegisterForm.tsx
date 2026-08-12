import { Form,FormInput,FormLabel, FormSubmit } from "@/src/shared/components/forms";

export default function RegisterForm() {
  return (
    <Form>
        <FormLabel htmlFor="name">Nombre</FormLabel>
        <FormInput type="text" id="name" placeholder="Ingresa tu nombre"/>

        <FormLabel htmlFor="email">Correo Electrónico</FormLabel>
        <FormInput type="email" id="email" placeholder="Ingresa tu correo electrónico"/>

        <FormLabel htmlFor="password">Contraseña</FormLabel>
        <FormInput type="password" id="password" placeholder="Contraseña - Min. 8 caracteres"/>

        <FormLabel htmlFor="password_confirmation">Repetir contraseña</FormLabel>
        <FormInput type="password" id="password_confirmation" placeholder="Repite tu contraseña"/>

        <FormSubmit value="Registrarme"/>
    </Form>
  )
}
