"use client";

// Import the necessary modules
import { useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import Blurb from "../../components/Blurb";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css"; // import styles
import DOMPurify from "dompurify";

// Modal component (you can replace it with your own modal implementation)

//NOTE TO SELF, TURN COMMENT BOX INTO RICHTEXT EDITOR

//ALSO MAYBE HASHTAG 
export default function CommentPage() {
  // State to hold the input values
  const [data, setData] = useState({ username: "", comment: "" });
  // State to track the modal status
  const [showModal, setShowModal] = useState(false);
  const [comments, setComments] = useState([]);
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
        body: JSON.stringify({
          username: data.username,
          comment: data.comment,
        }),
      });

      // Optionally, you can redirect or show a success message here
      if (!res.ok) {
        throw new Error("HTTP status " + res.status);
      }

      // Open the modal
      setShowModal(true);
      // Handle successful submission
      console.log("Comment submitted successfully");
      console.log(res.status);
      // Clear the input fields
      setData({ username: "", comment: "" });
      // Fetch existing comments again after submitting a new comment
    } catch (error) {
      // Handle submission error
      console.error("Error submitting comment:", error);
      // Optionally, you can show an error message here
    }
  };

  let ReactQuill;

  if (typeof window !== "undefined") {
    // Only import ReactQuill on the client side
    ReactQuill = require("react-quill");
  }
  
  // Function to close the modal
  const handleModalClose = () => {
    setShowModal(false);
  };

  useEffect(() => {
    const fetchComments = async () => {
      try {
        const res = await fetch("/api/sendComment");
        if (!res.ok) {
          throw new Error("HTTP status " + res.status);
        }
        const commentsData = await res.json();
        setComments(commentsData);
      } catch (error) {
        console.error("Error fetching comments:", error);
      }
    };

    fetchComments();
  }, [showModal]);

  return (
    <div className="container mx-auto max-w-screen-md mt-8">
      <h1 className="text-4xl font-bold mb-6">Comment Page</h1>
      <Navigation />
      <p className="prose">
        Welcome to the database test. Here you can enter a name and comment for
        me to read in my mongo Database!
      </p>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col space-y-4 items-center"
      >
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
          <ReactQuill
            value={data.comment}
            onChange={(value) => setData({ ...data, comment: value })}
            className="mt-2 border border-gray-300 rounded"
          />
        </label>
        <button
          type="submit"
          className="btn btn-primary mr-2 justify-center display-flex"
        >
          Submit Comment
        </button>
      </form>
      <div>
        <h2>Comments:</h2>
        <ul>
          {comments.map((comment, index) => (
            <li key={index}>
              <strong>{comment.username}:</strong>
              <div
                dangerouslySetInnerHTML={{
                  __html: DOMPurify.sanitize(comment.comment),
                }}
              />
            </li>
          ))}
        </ul>
      </div>
      <Blurb />
      {/* DaisyUI Modal */}
      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">Comment successfully submitted!</p>
            <div className="modal-action">
              <form method="dialog">
                <button className="btn" onClick={handleModalClose}>
                  Okay
                </button>
              </form>
            </div>
          </div>
        </dialog>
      )}
    </div>
  );
}
