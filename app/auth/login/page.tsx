import { Metadata } from "next";
import Heading from "@/src/shared/components/typography/Heading";

export const metadata: Metadata = {
  title: "Iniciar Sesión"
}

export default function LoginPage() {
  return (
    <>
      <Heading>Iniciar Sesión</Heading>
    </>
  )
}