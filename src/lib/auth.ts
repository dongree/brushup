import { addUser, getUserById } from "@/service/user";
import { NextAuthOptions } from "next-auth";
import GoogleProvider from "next-auth/providers/google";

export const authOptions: NextAuthOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_OAUTH_ID || "",
      clientSecret: process.env.GOOGLE_OAUTH_SECRET || "",
    }),
  ],
  callbacks: {
    async signIn({ user }) {
      const userData = {
        userid: user.id,
        username: user.name,
        email: user.email,
        profileImageUrl: user.image,
      };

      const u = await getUserById(user.id);

      if (u.length === 0) {
        addUser(userData);
      }

      return true;
    },
  },
  pages: {
    signIn: "/auth/login",
  },
};
