// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
// import Credentials from 'next-auth/providers/credentials';
// import { z } from 'zod';
// import axios from 'axios';

// export const { auth, signIn, signOut, } = NextAuth({
//     ...authConfig,
//     providers: [Credentials({
//         async authorize(credentials) {
//             const parsedCredentials = z.object({
//                 email: z.string().email(),
//                 password: z.string().min(6)
//             }).safeParse(credentials);

//             if (!parsedCredentials.success) {
//                 return null;
//             }

//             const { email, password } = parsedCredentials.data;

//             const requestData = {
//                 username: email,
//                 password: password,
//                 grant_type: "password_username"
//             };

//             const res = await fetch("http://127.0.0.1:5000/user/auth", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify(requestData),
//             });

//             const user = await res.json();

//             if (res.ok && user) {
//                 console.log("login api worked \n", user);

//                 return user;

//                 // return {
//                 //     ...user,
//                 //     name: "nothing",
//                 //     email: "nothing@gmail.com"
//                 // };
//             } else {
//                 console.log("login api not working");
//                 return null;
//             }

//             // try {
//             //     const loginData = await axios.post("http://127.0.0.1:5000/user/auth", requestData);
//             //     // console.log("loginData", loginData.data);
//             //     return {
//             //         name: {
//             //             ...loginData.data,
//             //             // ...requestData
//             //         }
//             //     };
//             // } catch (error: any) {
//             //     // console.log('wrong email or password', error);
//             //     return null

//             //     if (error.response) {
//             //         console.log(error.response?.data);
//             //         return error.response?.body?.error;
//             //     };
//             // }

//         },
//     })],
//     callbacks: {
//         async jwt({ token, user }) {
//             return { ...token, ...user }
//         },

//         async session({ session, token, user }) {
//             return session;
//         }
//     }
// });