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
      name: "MongoDB Credentials",
      credentials: {
        username: { label: "Username", type: "text", placeholder: "dada" },
        password: { label: "Password", type: "password" },
      },
      
      async authorize(credentials, isSignUp = false) {
        const client = await clientPromise; // Get the MongoDB client
        const db = client.db(process.env.MONGODB_DB);
        console.log("Received credentials:", credentials);
        // Check if the user already exists
        const users = await db.collection("users");
        const existingUser = await users.findOne({username: credentials.username});
        /*const existingUser = await db
          .collection("users")
          .findOne({ username: credentials.username });
*/
        if (existingUser) {
          if (existingUser.password === credentials.password) {
            console.log("Existing user found:", existingUser);
            // If the passwords match, return the existing user
            return existingUser;
          } else {
            // If the passwords don't match, throw an error
            throw new Error("Incorrect password");
          }
        }

        // If it's a sign-up operation, create a new user
        if (isSignUp) {
          const newUser = await db.collection("users").insertOne({
            username: credentials.username,
            password: credentials.password,
          });

          // Return the new user
          return newUser.ops[0];
        }

        // If it's not a sign-up and the user doesn't exist, return null
        return null;
      },
    }),
    // ...add more providers here
  ],
  secret: process.env.NEXTAUTH_SECRET,
  adapter: MongoDBAdapter(clientPromise),
};
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST, authOptions};
