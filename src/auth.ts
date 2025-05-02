import NextAuth, { Session } from "next-auth";
import credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

// import Resend from "next-auth/providers/resend";

declare module "next-auth" {
  interface Session {
    user: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
      role?: string; // Add role here
    };
  }

  interface User {
    role?: string;
  }

  interface JWT {
    role?: string;
  }
}

export const { auth, handlers, signIn, signOut } = NextAuth({
  providers: [
    // Resend,
    GitHub,
    Google,
    credentials({
      // You can specify which fields should be submitted, by adding keys to the `credentials` object.
      // e.g. domain, username, password, 2FA token, etc.
      credentials: { email: {}, password: {}, name: {} },
      authorize: async (credentials) => {
        let user:any = null

        if (credentials) {
          const { prisma } = await import("@/lib/utils/prisma");
          user =  await prisma.user.findUnique({
            where: {
              email: credentials.email as string,
              password: credentials.password as string,
            },
          });
        }

        if (!user) {
          throw new Error("Invalid credentials.");
        }
        console.log(user, "use in authorize");
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/login",
    signOut: "/goodbye",
  },
  session: {
    strategy: "jwt",
  },
  secret: process.env.AUTH_SECRET,
  // cookies: {
  //   sessionToken: {
  //     name: `__Secure-next-auth.session-token`,
  //     options: {
  //       httpOnly: true,
  //       sameSite: "lax",
  //       path: "/",
  //       secure: process.env.NODE_ENV === "production",
  //     },
  //   },
  // },
  callbacks: {
    async signIn({ user, account }) {
      const { prisma } = await import("@/lib/utils/prisma");
      if (account?.provider === "google" || account?.provider === "github") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email as string },
        });

        if (!existingUser) {
          // If new user -> create in database
          await prisma.user.create({
            data: {
              email: user.email as string,
              img: user.image as string,
              password: crypto.randomUUID().split("-")[0],
              name: user.name as string,
            },
          });
        }
      }

      return true; // Allow sign in
    },

    async redirect() {
      // Redirect to homepage after login
      return "/";
    },
    // async jwt({ token, user }) {
    //   const { prisma } = await import("@/lib/utils/prisma");
    //   const role = await prisma.user.findUnique({
    //     where: {
    //       email: token.email as string,
    //     },
    //     select: {
    //       role: true,
    //     },
    //   });

    //   if (user) {
    //     token.role = role?.role;
    //   }
    //   return token;
    // },
    // async session({ session, token }: { session: Session; token: any }) {
    //   if (token) {
    //     session.user.role = token.role;
    //   }
    //   return session;
    // },
  },
});
