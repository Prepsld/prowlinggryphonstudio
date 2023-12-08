"use client";
// Import the necessary modules
import { useState } from "react";
import Navigation from "../../components/Navigation";
import Blurb from "../../components/Blurb";
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
    <div className="container mx-auto max-w-screen-md mt-8">
      <h1 className="text-4xl font-bold mb-6">Comment Page</h1>
      <Navigation />
      <p className="prose">Welcome to the database test. Here you can enter a name and comment for me to read in my mongo Database! </p>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4 items-center">
        <label className="text-lg">
          Username:
          <input
            required
            type="text"
            value={data.username}
            onChange={(e) => setData({ ...data, username: e.target.value })}
            className="mt-2 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="text-lg">
          Comment:
          <textarea
            required
            value={data.comment}
            onChange={(e) => setData({ ...data, comment: e.target.value })}
            className="mt-2 p-2 border border-gray-300 rounded"
          />
        </label>
        <button
          type="submit"
          className="btn btn-primary mr-2 justify-center display-flex"
        >
          Submit Comment
        </button>
      </form>
      <Blurb />
    </div>
  );
}
