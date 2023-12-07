"use client";

import { useState, useEffect } from "react";

export default function CommentPage() {
  // State to hold the input values
  const [username, setUsername] = useState("");
  const [comment, setComment] = useState("");

  // Function to handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send a POST request to the API route with the username and comment
    const response = await fetch("/api/sendComment/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ username, comment }),
    });

    if (response.ok) {
      // Handle successful submission
      console.log("Comment submitted successfully");
      // Optionally, you can redirect or show a success message here

      // Fetch existing comments again after submitting a new comment
    } else {
      // Handle submission error
      console.error("Error submitting comment:", await response.text());
      // Optionally, you can show an error message here
    }
  };


  return (
    <div>
      <h1>Comment Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </label>
        <br />
        <label>
          Comment:
          <textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
          />
        </label>
        <br />
        <button type="submit">Submit Comment</button>

      </form>
    </div>
  );
}
