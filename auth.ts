import NextAuth from 'next-auth';
import { authConfig } from './auth.config';
import Credentials from 'next-auth/providers/credentials';
import { z } from 'zod';
import axios from 'axios';

// async function getUser(email: string): Promise<User | undefined> {
//     try {
//         const user = await sql<User>`SELECT * FROM users WHERE email=${email}`;
//         return user.rows[0];
//     } catch (error) {
//         console.error('Failed to fetch user:', error);
//         throw new Error('Failed to fetch user.');
//     }
// }


export const { auth, signIn, signOut } = NextAuth({
    ...authConfig,
    providers: [Credentials({
        async authorize(credentials) {
            const parsedCredentials = z
                .object({
                    email: z.string().email(),
                    password: z.string().min(6)
                })
                .safeParse(credentials);

            if (parsedCredentials.success) {
                const { email, password } = parsedCredentials.data;

                const requestData = {
                    username: email,
                    password: password,
                    grant_type: "password_username"
                }
                // console.log(`its working ${email} == ${password}`);
                // console.log(requestData);

                try {
                    const loginData = await axios.post("http://127.0.0.1:5000/user/auth", requestData);
                    // console.log("loginData", loginData.data);
                    return {
                        name: {
                            ...loginData.data,
                            // ...requestData
                        }
                    };
                } catch (error: any) {
                    // console.log('wrong email or password', error);
                    throw error;

                    if (error.response) {
                        console.log(error.response?.data);
                        return error.response?.body?.error;
                    };
                    // if ((error as Error).message.includes('CredentialsSignin')) {
                    //     return 'CredentialsSignin';
                    // }
                    // throw error;

                    // return 'CredentialsSignin';
                }
            }

            console.log('Invalid credentials');
            return null;
        },
    })],
});