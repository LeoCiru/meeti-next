import { SignUpInput } from "../schemas/authSchema";

class AuthService {

    async register(credentials : SignUpInput) {
        const { email, name, password } = credentials;
        
        // Revisar si el usuario existe


        // Validación de negocio


        // Manejar el registro
    }
}

export const authService = new AuthService();