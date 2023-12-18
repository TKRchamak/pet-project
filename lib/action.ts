'use server';

import { signIn } from "@/auth";

export async function authenticate(prevState: string | undefined, formData: FormData) {
    try {
        await signIn('credentials', formData);
    } catch (error: any) {
        console.log("From the authenticate function", error);
        if (error.response) {
            console.log(error.response?.data);
            return error.response?.body?.error;
        };

        if ((error as Error).message.includes('CredentialsSignin')) {
            return 'CredentialsSignin';
        }
        return 'CredentialsSignin';
    }
}