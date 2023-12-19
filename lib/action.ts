'use server';

import { cookies } from "next/headers";

// import { signIn } from "@/auth";

export async function authenticate(data: any) {
    try {
        const res = await fetch("http://127.0.0.1:5000/user/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });

        const user = await res.json();

        cookies().set("access_token", user?.access_token, {
            path: "/",
            domain: "localhost",
            maxAge: user?.expires_in,
            httpOnly: true,
            secure: false,
        });
        cookies().set("refresh_token", user?.refresh_token, {
            path: "/",
            domain: "localhost",
            maxAge: 60 * 60 * 7,
            httpOnly: true,
            secure: false,
        });

        if (res.ok && user) {
            return user;
        } else {
            console.log("login api not working");
            return null;
        }

    } catch (error: any) {
        console.log("From the authenticate function", error);
        if (error.response) {
            console.log(error.response?.data);
            return error.response?.body?.error;
        };

        if ((error as Error).message.includes('CredentialsSignin')) {
            return 'CredentialsSignIn';
        }
        return 'authentication error';
    }
}