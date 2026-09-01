import { auth } from "@/src/lib/auth";
import { SignInInput, SignUpInput } from "../schemas/authSchema";
import { authRepository, IAuthRepository } from './AuthRepository';

class AuthService {

    constructor(private authRepository : IAuthRepository) {}

    async register(credentials : SignUpInput) {
        const { email, name, password } = credentials;
        
        // Revisar si el usuario existe
        const user = await this.authRepository.userExists(email);

        if (user) {
            return {
                error: "Este email ya está registrado.",
                success: "",
            }
        }

        // Validación de negocio


        // Manejar el registro
        await auth.api.signUpEmail({
            body: {
                email,
                name,
                password
            }
        })

        return {
            error: "",
            success: "¡Cuenta creada correctamente! Revisa tu email.",
        }
    }

    async login(credentials: SignInInput) {
        const { email, password } = credentials;
        
        // Revisar si el usuario existe
        const user = await this.authRepository.userExists(email);

        if (!user) {
            return {
                error: "Este usuario no existe.",
                success: "",
            }
        }
        
        return {
            error: "",
            success: "",
        }
        // Verificar password y si se confirmó cuenta
    }
}

export const authService = new AuthService(authRepository);