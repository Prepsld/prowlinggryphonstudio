// CommentList.js

import { useState, useEffect } from "react";
import DOMPurify from "dompurify";

const CommentList = () => {
  const [comments, setComments] = useState([]);

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
  }, []);

  return (
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
  );
};

export default CommentList;
