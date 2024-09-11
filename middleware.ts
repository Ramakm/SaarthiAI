// import { authMiddleware } from "@clerk/nextjs";

// // This example protects all routes including api/trpc routes
// // Please edit this to allow other routes to be public as needed.
// // See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your middleware
// export default authMiddleware({
//   publicRoutes: ["/", "/api/webhook"],
// });

// export const config = {
//   matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
// };

import { clerkMiddleware } from "@clerk/nextjs/server";

const middleware = clerkMiddleware();

export default middleware;

export const config = {
  matcher: [
    "/((?!.+\\.[\\w]+$|_next|api|trpc).*)", // Protect all routes except static files, API routes, and Next.js internals
    "/api/(.*)", // Protect API routes as needed
  ],
};