import { Metadata } from "next";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import LoginForm from "@/src/features/auth/components/LoginForm";
import Link from "next/link";

export const metadata: Metadata = {
  title: generatePageTitle("Iniciar Sesión"),
}

export default function LoginPage() {
  return (
    <>
      <Heading>Iniciar Sesión</Heading>

      <LoginForm />

      <nav className="flex justify-between items-center mt-20">
        <Link href={"/auth/create-account"} className="font-bold">Crear cuenta</Link>
        <Link href={"/auth/forgot-password"} className="font-bold">Recuperar contraseña</Link>
      </nav>
    </>
  )
}