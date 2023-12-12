'use server';

import axios from "axios";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
    // formData: any
) {
    try {
        const requestData = {
            username: formData.get("email"),
            password: formData.get("password"),
            grant_type: "password_username"
        }

        const loginData = await axios.post("http://127.0.0.1:5000/user/auth", requestData);
        console.log(loginData.data);
        return loginData.data;
        // return "loginData.data";

    } catch (error: any) {
        console.log(error.response?.data)
        if (error.response) {
            return error.response?.body;
        };
        // if ((error as Error).message.includes('CredentialsSignin')) {
        //     return 'CredentialsSignin';
        // }
        // throw error;

        return 'CredentialsSignin';
    }
}