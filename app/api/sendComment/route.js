// Import the necessary modules
import clientPromise from "../../lib/mongodb";

async function handler(req, res) {
  console.log("Incoming request body:", req.body);

  // Ensure that the request method is POST
  if (req.method === "POST") {
    try {
      // Get the username and comment from the request body
      const { username, comment } = await req.json();

      // Validate that both username and comment are provided
      if (!username || !comment) {
        return res
          .status(400)
          .json({ error: "Username and comment are required" });
      }

      const client = await clientPromise;

      // Connect to the MongoDB database
      const db = client.db("comments");

      // Insert the comment into the "comments" collection
      const result = await db.collection("UserComments").insertOne({
        username: username,
        comment: comment,
      });
      client.close();
      // Respond with the inserted comment
      return res.status(201).json({ comment: result.ops[0] });
    } catch (error) {
      console.error("Error handling comment submission:", error);
      return res.status(500).json({ error: "Internal Server Error" });
    }
  } else {
    // Respond with an error for unsupported HTTP methods
    return res.status(405).json({ error: "Method Not Allowed" });
  }
}

export { handler as POST, handler as GET, handler as PUT, handler as DELETE };
