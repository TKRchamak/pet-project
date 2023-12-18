import NextAuth from 'next-auth';
import { authConfig } from './auth.config';

export default NextAuth(authConfig).auth;


// (...args)=>{
//     if (!args.length) {
//         // React Server Components
//         return getSession((0,next_headers__WEBPACK_IMPORTED_MODULE_1__.headers)(), config).then((r)=>r.json());
//     }
//     if (args[0] instanceof Request) {
//         // middleare.ts
//         // export { auth as default } from "auth"
//         const req = args[0];
//         const ev = args[1];
//         return handleAuth([
//             req,
//             ev
//         ], config);
//     }
//     if (isReqWrapper(args[0])) {
//         // middleware.ts/router.ts
//         // import { auth } from "auth"
//         // export default auth((req) => { console.log(req.auth) }})
//         const userMiddlewareOrRoute = args[0];
//         return async (...args)=>{
//             return handleAuth(args, config, userMiddlewareOrRoute);
//         };
//     }
//     // API Routes, getServerSideProps
//     const request = "req" in args[0] ? args[0].req : args[0];
//     const response = "res" in args[0] ? args[0].res : args[1];
//     return getSession(// @ts-expect-error
//     new Headers(request.headers), config).then(async (authResponse)=>{
//         const auth = await authResponse.json();
//         for (const cookie of authResponse.headers.getSetCookie())response.headers.append("set-cookie", cookie);
//         return auth;
//     });
// }

export const config = {
    // https://nextjs.org/docs/app/building-your-application/routing/middleware#matcher
    matcher: ['/((?!api|_next/static|_next/image|.*\\.png$).*)'],
};