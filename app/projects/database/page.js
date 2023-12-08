"use client";
// Import the necessary modules
import { useState } from "react";

export default function CommentPage() {
  // State to hold the input values
  const [data, setData] = useState({ username: "", comment: "" });
 
  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the API route with the username and comment
      const res = await fetch("/api/sendComment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username: data.username, comment: data.comment }),
      });
      
      // Optionally, you can redirect or show a success message here
      if (!res.ok) {
        throw new Error("HTTP status " + res.status);
      }
      
      // Handle successful submission
      console.log("Comment submitted successfully");
      console.log(res.status);
      // Fetch existing comments again after submitting a new comment
    } catch (error) {
      // Handle submission error
      console.error("Error submitting comment:", error);
      // Optionally, you can show an error message here
    }
  };

  return (
    <div>
      <h1>Comment Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input required
            type="text"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
          />
        </label>
        <br />
        <label>
          Comment:
          <textarea required
            value={data.comment}
            onChange={(e) => setData({ ...data, comment: e.target.value })}
          />
        </label>
        <br />
        <button type="submit">Submit Comment</button>
      </form>
    </div>
  );
}