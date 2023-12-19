// import NextAuth from 'next-auth';
// import { authConfig } from './auth.config';
// export default NextAuth(authConfig).auth;



import { NextRequest, NextResponse } from "next/server";

async function middleware(request: NextRequest) {
    // const cookie = request.cookies.get(process.env.AUTH_SECRET as string);
    const access_token = request.cookies.get("access_token");
    const refresh_token = request.cookies.get("refresh_token");

    if (!access_token && refresh_token) {

        const res = await fetch("http://127.0.0.1:5000/user/auth", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                grant_type: "refresh_token",
                refresh_token: refresh_token.value
            }),
        });

        const user = await res.json();

        // const access_token = request.cookies.get("access_token");
        console.log("for test===========================\n", user, access_token);

        const response = NextResponse.next();

        response.cookies.set("access_token", user?.access_token, {
            path: "/",
            domain: "localhost",
            maxAge: user?.expires_in,
            httpOnly: true,
            secure: false,
        });

        return response;
    }

    const token = access_token?.value;
    if (request.nextUrl.pathname.startsWith('/dashboard')) {
        if (!token) {
            return NextResponse.redirect(new URL('/login', request.url));
        } else {
            return NextResponse.next();
        }
    }
    return NextResponse.next();
}
export default middleware;


export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};

