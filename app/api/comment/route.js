import clientPromise from "../../lib/mongodb";
import { NextResponse } from "next/server";

export async function POST(request) {
 console.log("Incoming request body:", request.body);

 // Ensure that the request method is POST
 
   try {
     // Get the username and comment from the request body
     const data = await request.json();

     console.log(request.body);
     const client = await clientPromise;

     // Connect to the MongoDB database
     const db = client.db("comments");

     // Insert the comment into the "comments" collection
     await db.collection("UserComments").insertOne({
       username: data.username,
       comment: data.comment,
     });
     
     // Respond with the inserted comment
     return new Response(JSON.stringify(data), { status: 201 });
   } catch (error) {
     console.error("Error handling comment submission:", error);
     return new NextResponse(500, { error: "Internal Server Error" });
   }
 } 

export async function GET(request) {
  try {
    // Connect to the MongoDB database
    const client = await clientPromise;
    const db = client.db("comments");

    // Retrieve all comments from the "UserComments" collection
    const comments = await db.collection("UserComments").find({}).toArray();

    // Respond with the retrieved comments
    return new Response(JSON.stringify(comments), { status: 200 });
  } catch (error) {
    console.error("Error fetching comments:", error);
    return new Response(JSON.stringify({ error: "Internal Server Error" }), {
      status: 500,
    });
  }
}