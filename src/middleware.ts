import { NextRequest, NextResponse } from 'next/server';
import { getToken } from 'next-auth/jwt';


// This should match the path you want to protect
const protectedPaths = ['/', '/profile','/dashboard']; // Specify your protected routes here

export async function middleware(req: NextRequest) {
  const session = await getToken({ req, secret: process.env.AUTH_SECRET});
  const pathname = req.nextUrl.pathname;
  const url = req.url;
  const role = session?.role;

  if (!session){
    console.log("no session token detected!")
  }

  // If the user is authenticated and accesses the sign-in page, redirect them
  if (session && pathname === '/login') {
    if (role == "ADMIN"){
      return NextResponse.redirect(new URL('/dashboard', url))
    }
    return NextResponse.redirect(new URL('/', url)); // or any page you want authenticated users to access
  }

  // If the user is not authenticated and tries to access a protected route
  if (!session && protectedPaths.includes(pathname)) {
    return NextResponse.redirect(new URL('/login', url)); // Redirect to sign-in page
  }

  // Continue processing the request as usual
  return NextResponse.next();
}

// Optionally, you can define the paths where your middleware should run
export const config = {
  matcher: ['/profile/:path*', '/dashboard/:path*', '/login'], // Specify routes to apply middleware
};
