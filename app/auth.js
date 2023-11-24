import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authConfig";
import { connectToDB } from "./lib/database.js";
import { User } from "./lib/models.js";
import bcrypt from "bcrypt";
const login = async (credentials) => {
  try {
    connectToDB();
    const user = await User.findOne({ username: credentials.username });
    if (!user) throw new Error("Wrong Credentials");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) throw new Error("Wrong Password");

    return user;
  } catch (error) {
    console.log(error);
    throw new Error("Failed to Logged IN");
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.username = user.username;
        token.img = user.img;
        token.isAdmin = user.isAdmin;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.username = token.username;
        session.user.img = token.img;
        session.user.isAdmin = token.isAdmin;
      }
      return session;
    },
  },
});
