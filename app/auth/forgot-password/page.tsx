import ForgotPasswordForm from "@/src/features/auth/components/ForgotPasswordForm";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";
import Link from "next/link";

export const metadata : Metadata = {
    title: generatePageTitle("Recuperar Contraseña"),
}

export default function ForgotPasswordPage() {
    
    const appName = process.env.APP_NAME;

  return (
    <>
        <Heading>Recupera tu acceso a {appName}</Heading>

        <ForgotPasswordForm />

        <nav className="flex items-center justify-between mt-20">
          <Link href={"/auth/login"} className="font-bold">Iniciar sesión</Link>
          <Link href={"/auth/create-account"} className="font-bold">Crear cuenta</Link>
        </nav>
    </>
  )
}
