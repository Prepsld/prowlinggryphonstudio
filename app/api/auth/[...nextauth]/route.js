import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    GitHubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    CredentialsProvider({
      id: "credentials",
      name: "Credentials",
      credentials: {},
      async authorize(credentials) {
        const client = await clientPromise; // Get the MongoDB client
        const db = client.db("process.env.MONGODB_DB"); // Replace with your MongoDB database name

        const existingUser = await db
          .collection("users")
          .findOne({ username: credentials.username });

        if (existingUser) {
          if (existingUser.password !== credentials.password) {
            throw new Error("Incorrect password");
          }
          return existingUser;
        }

        const newUser = await db.collection("users").insertOne({
          username: credentials.username,
          password: credentials.password,
        });

        return newUser;
      },
    }),
    // ...add more providers here
  ],
  adapter: MongoDBAdapter(clientPromise),
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
