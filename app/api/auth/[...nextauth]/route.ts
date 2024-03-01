import { NextAuthOptions, User } from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import NextAuth, { getServerSession } from "next-auth/next";

const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async jwt({ token, account }) {
      if (account) {
        token.accessToken = account.accessToken;
      }
      return token;
    },
    async session({ session, token }) {
      session.user = token;

      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export async function getCurrentUser() {
  const session = await getServerSession(authOptions);

  return session;
}

export { handler as GET, handler as POST };
