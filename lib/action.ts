'use server';

import { signIn } from "@/auth";

export async function authenticate(
    prevState: string | undefined,
    formData: FormData,
    // formData: any
) {
    try {
        await signIn('credentials', formData);
    } catch (error: any) {
        console.log(error);


        if ((error as Error).message.includes('CredentialsSignin')) {
            return 'CredentialsSignin';
        }
        return 'CredentialsSignin';

        // throw error;
    }
}