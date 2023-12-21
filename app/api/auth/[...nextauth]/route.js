import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";
import {hash, compare} from "bcrypt";

 const authOptions = {
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
       id: "login",
       name: "MongoDB Login",
       credentials: {
         email: { label: "Email", type: "email", placeholder: "john@example.com" },
         password: { label: "Password", type: "password" },
       },
       async authorize(credentials) {
         try {
           const client = await clientPromise;
           const db = client.db(process.env.MONGODB_DB);

           const collection = await db.collection("users");
           const existingUser = await collection.findOne({
             email: credentials.email,
           });

           if (existingUser) {
             // Compare the provided password with the stored hashed password
             const passwordMatch = await compare(
               credentials.password,
               existingUser.password
             );

             if (passwordMatch) {
               return existingUser;
             } else {
               throw new Error("Incorrect password");
             }
           } else {
             throw new Error("User not found. Please sign up first.");
           }
         } catch (error) {
           console.error("Error in login authorize:", error);
           throw new Error("Authentication failed");
         }
       },
     }),
     CredentialsProvider({
       id: "signup",
       name: "MongoDB Signup",
       credentials: {
         email: { label: "Email", type: "email", placeholder: "john@example.com" },
         password: { label: "Password", type: "password" },
       },
       async authorize(credentials) {
         try {
           const client = await clientPromise;
           const db = client.db(process.env.MONGODB_DB);

           const collection = await db.collection("users");
           const existingUser = await collection.findOne({
             email: credentials.email,
           });

           if (existingUser) {
             throw new Error(
               "User already exists. Choose a different E-Mail address."
             );
           }

           // Hash the password before storing it in the database
           const hashedPassword = await hash(credentials.password, 10);

           const newUser = await collection.insertOne({
             email: credentials.email,
             password: hashedPassword,
           });

           return newUser;
         } catch (error) {
           console.error("Error in signup authorize:", error);
           throw new Error("Registration failed");
         }
       },
     }),
     // ...add more providers here
   ],
   adapter: MongoDBAdapter(clientPromise),
   jwt: {
     secret: process.env.NEXTAUTH_SECRET,
     maxAge: 60 * 60 * 24 * 30, // 30 days
   },
   session: {
     strategy: "jwt",
   },
   pages: {
     signIn: "/projects/sigintest", // specify the path to your custom sign-in page
   },
 };
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};
