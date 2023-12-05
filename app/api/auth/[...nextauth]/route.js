import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import GitHubProvider from "next-auth/providers/github";
import { MongoDBAdapter } from "@auth/mongodb-adapter";
import clientPromise from "../../../lib/mongodb";
import CredentialsProvider from "next-auth/providers/credentials";



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
         username: { label: "Username", type: "text ", placeholder: "jsmith" },
         password: { label: "Password", type: "password" },
       },
       async authorize(credentials) {
         try {
           const client = await clientPromise;
           const db = client.db(process.env.MONGODB_DB);

           const collection = await db.collection("users");
           const existingUser = await collection.findOne({
             username: credentials.username,
           });

           if (existingUser) {
             if (existingUser.password === credentials.password) {
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
         username: { label: "Username", type: "text ", placeholder: "jsmith" },
         password: { label: "Password", type: "password" },
       },
       async authorize(credentials) {
         try {
           const client = await clientPromise;
           const db = client.db(process.env.MONGODB_DB);

           const collection = await db.collection("users");
           const existingUser = await collection.findOne({
             username: credentials.username,
           });

           if (existingUser) {
             const errorMessage =
               "Username already exists. Choose a different username.";
             console.error(errorMessage);
             throw new Error(errorMessage);
           }
           

           const newUser = await collection.insertOne({
             username: credentials.username,
             password: credentials.password,
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
     signIn: "/projects/signin", // specify the path to your custom sign-in page
   },
   
     callbacks: {
       async onError(error, request, response) {
         // Custom logic for handling errors
         if (error.message === "User not found. Please sign up first.") {
           // Handle case where user is not found
           response
             .status(400)
             .json({ error: "User not found. Please sign up first." });
         } else if (error.message === "Incorrect password") {
           // Handle case where password is incorrect
           response.status(400).json({ error: "Incorrect password" });
         } else if (
           error.message === "Username already exists. Choose a different username."
         ) {
           // Handle case where username already exists
           response
             .status(400)
             .json({ error: "Username already exists. Choose a different username." });
         } else {
           // Handle other errors
           response.status(400).json({ error: "An error occurred" });
         }
       },
     },
 };
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST};
