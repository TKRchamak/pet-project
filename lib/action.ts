'use server';

import axios from "axios";

export async function authenticate(
    // prevState: string | undefined,
    // formData: FormData,
    formData: any
) {
    try {
        const loginData = await axios.post("http://127.0.0.1:5000/user/auth", formData);
        console.log(loginData.data);

    } catch (error) {
        if ((error as Error).message.includes('CredentialsSignin')) {
            return 'CredentialsSignin';
        }
        throw error;
    }
}