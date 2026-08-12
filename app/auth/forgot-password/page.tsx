import ForgotPasswordForm from "@/src/features/auth/components/ForgotPasswordForm";
import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";

export const metadata : Metadata = {
    title: generatePageTitle("Recuperar Contraseña"),
}

export default function ForgotPasswordPage() {
    
    const appName = process.env.APP_NAME;

  return (
    <>
        <Heading>Recupera tu acceso a {appName}</Heading>

        <ForgotPasswordForm />
    </>
  )
}
