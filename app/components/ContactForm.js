// components/ContactForm.js
import React, { useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    topic: "",
    comment: "",
  });
  const [showModal, setShowModal] = useState(false);
  const [isError, setIsError] = useState(false); // New state for tracking errors
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        // Handle success, e.g., show a success message to the user
        console.log("Email sent successfully");
        setShowModal(true);
        setIsError(false); // Reset error state on success
      } else {
        // Handle failure, e.g., show an error message to the user
        console.error("Failed to send email");
        setIsError(true);
        setShowModal(true);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsError(true);
      setShowModal(true);
    }
  };

  const closeModal = () => {
    setShowModal(false);
    setIsError(false); // Reset error state when closing the modal
  };

  return (
    <div className="container mx-auto max-w-screen-md">
      <form onSubmit={handleSubmit} className="flex flex-col items-center">
        <label className="mb-4 flex flex-col">
          <span>Username:</span>
          <input
            className="input input-bordered input-secondary"
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </label>
        <label className="mb-4 flex flex-col">
          <span>Email:</span>
          <input
            className="input input-bordered input-secondary"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className="mb-4 flex flex-col">
          <span>Topic:</span>
          <select
            className="input-field select select-secondary"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="">Select a topic</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="compliment">Compliment (Thank you!)</option>
            <option value="complaint">Complaint</option>
            <option value="suggestion">Suggestions</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <label className="mb-4 flex flex-col">
          <span>Comment:</span>
          <textarea
            className="textarea textarea-secondary"
            name="comment"
            value={formData.comment}
            onChange={handleChange}
            required
          />
        </label>
        <button className="btn btn-accent mt-4" type="submit">
          Submit
        </button>
      </form>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center">
          <div className="modal-box">
            {isError ? (
              <>
                <h3 className="font-bold text-lg text-red-500">Error!</h3>
                <p className="py-4">
                  Failed to send the email. Please try again.
                </p>
              </>
            ) : (
              <>
                <h3 className="font-bold text-lg">Message Sent!</h3>
                <p className="py-4">Thank you for your submission.</p>
              </>
            )}
            <button className="btn" onClick={closeModal}>
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactForm;
