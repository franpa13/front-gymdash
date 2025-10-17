import api from "@/api/default.api"
interface LoginData {
    email: string;
    password: string;
}
export const loginUser = async ({ email, password }: LoginData) => {


    const response = await api.post('/auth/login', {
        email,
        password
    })
    return response.data;

}