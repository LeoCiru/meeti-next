"use client"

import Form from "@/src/shared/components/forms/Form"
import FormLabel from "@/src/shared/components/forms/FormLabel"


export default function LoginForm() {
  return (
    <Form>
        <FormLabel htmlFor="email">Email</FormLabel>
        <input type="email" id="email" placeholder="Ingresa tu email" className="border border-slate-200 w-full p-2"/>

        <FormLabel htmlFor="password">Contraseña</FormLabel>
        <input type="password" id="password" placeholder="Ingresa tu contraseña" className="border border-slate-200 w-full p-2"/>
    </Form>
  )
}
