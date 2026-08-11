import Heading from "@/src/shared/components/typography/Heading";
import { generatePageTitle } from "@/src/shared/utils/metadata";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: generatePageTitle("Crear Cuenta"),
}

export default function RegisterPage() {
  return (
    <>
      <Heading level={3}>Crear Cuenta</Heading>
    </>
  )
}