import clientPromise from "../../lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
 console.log("Incoming request body:", request.body);

 // Ensure that the request method is POST
 
   try {
     // Get the username and comment from the request body
     const data = request.json();
     // Validate that both username and comment are provided
     if (!data.username || !data.comment) {
       return new NextResponse(400, { error: "Username and comment are required" });
     }
     console.log(request.body);
     const client = await clientPromise;

     // Connect to the MongoDB database
     const db = client.db("comments");

     // Insert the comment into the "comments" collection
     const result = await db.collection("UserComments").insertOne({
       username: data.username,
       comment: data.comment,
     });
     
     // Respond with the inserted comment
     return new NextResponse(201, { comment: result.ops[0] });
   } catch (error) {
     console.error("Error handling comment submission:", error);
     return new NextResponse(500, { error: "Internal Server Error" });
   }
 } 



