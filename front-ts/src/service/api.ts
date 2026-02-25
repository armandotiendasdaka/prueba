import axios from "axios";

const apiUrl = 'http://localhost:3000'

export const loginApi = async (client: string, password: string) => {

    try {
        const response = await axios.post(`${apiUrl}/login`, {
            client: client,
            password: password
        })

        if (response.status === 201) {
            return response.data

        } else {
            console.log("Credenciales invalidas");
        }

    } catch (error) {
        console.log(error)
    }
}