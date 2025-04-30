import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

// import Resend from "next-auth/providers/resend";

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
        let user = null;

        if (credentials) {
          const { prisma } = await import("@/lib/prisma");
          user = await prisma.user.findUnique({
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
    strategy: "jwt", // ✅ this is faster than "database"
  },
  callbacks: {
    async signIn({ user, account }) {
      const { prisma } = await import("@/lib/prisma");
      if (account?.provider === "google" || account?.provider === "github") {
        const existingUser = await prisma.user.findUnique({
          where: { email: user.email! },
        });

        if (!existingUser) {
          // If new user -> create in database
          await prisma.user.create({
            data: {
              email: user.email!,
              img: user.image!,
              password: crypto.randomUUID().split("-")[0],
              name: user.name!,
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
  },
});
