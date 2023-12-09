// CommentPage.js
"use client";
import { useRef, useState, useEffect } from "react";
import Navigation from "../../components/Navigation";
import Blurb from "../../components/Blurb";
import "react-quill/dist/quill.snow.css"; // import styles
import dynamic from "next/dynamic";
import DOMPurify from "dompurify";


const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export default function CommentPage() {
  const usernameRef = useRef("");
  const commentRef = useRef("");
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const res = await fetch("/api/sendComment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: usernameRef.current,
          comment: commentRef.current,
        }),
      });

      if (!res.ok) {
        throw new Error("HTTP status " + res.status);
      }
      setShowModal(true);
      commentRef.current= "";
      e.target.reset();
      
      console.log("Comment submitted successfully");
      console.log(res.status);

      // Clear the input fields using refs
    } catch (error) {
      console.error("Error submitting comment:", error);
    }
  };

  const handleUsernameChange = (e) => {
    usernameRef.current = e.target.value;
  };

  const handleCommentChange = (value) => {
    commentRef.current = value;
  };

  const handleModalClose = () => {
    setShowModal(false);
    fetchComments();
  };
  const [comments, setComments] = useState([]);

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

  useEffect(() => {
    fetchComments();
  }, []);

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
            ref={usernameRef}
            onChange={handleUsernameChange}
            className="mt-2 p-2 border border-gray-300 rounded"
          />
        </label>
        <label className="text-lg">
          Comment:
          <ReactQuill
            required
            value={commentRef.current}
            onChange={handleCommentChange}
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
