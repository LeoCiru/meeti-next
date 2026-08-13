"use server"

import { SignUpInput, SignUpSchema } from "../schemas/authSchema";

export async function signUpAction(input : SignUpInput) {
    const data = SignUpSchema.safeParse(input);

    console.log(data.success);
    
    if (!data.success) {
        return {
            error: "Hubo un error",
            sucess: "",
        }
    }

    console.log(data.data);
    
}