// components/ContactForm.js
import React, { useState } from "react";
import dynamic from "next/dynamic";
import "react-quill/dist/quill.snow.css";

const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });
const ContactForm = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    topic: "",
    comment: "",
  });
  const [showModal, setShowModal] = useState(false);
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
      } else {
        // Handle failure, e.g., show an error message to the user
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className="prose container mx-auto max-w-screen-md">
      <form onSubmit={handleSubmit} className="mt-8 flex flex-col items-center">
        <label className="mb-4 flex flex-col">
          <span>Username:</span>
          <input
            className="input-field border border-slate-500"
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
            className="input-field border border-slate-500"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </label>
        <label className="mb-4 flex flex-col">
          <span>Topic:</span>
          <select
            className="input-field border border-slate-500"
            name="topic"
            value={formData.topic}
            onChange={handleChange}
            required
          >
            <option value="">Select a topic</option>
            <option value="general">General Inquiry</option>
            <option value="support">Support</option>
            <option value="Compliment">Compliment (Thank you!)</option>
            <option value="Complaint">Complaint</option>
            <option value="Suggestion">Suggestions</option>
            {/* Add more options as needed */}
          </select>
        </label>
        <label className="mb-4 flex flex-col">
          <span>Comment:</span>
          <ReactQuill
            className="quill-editor"
            value={formData.comment}
            onChange={(value) => setFormData({ ...formData, comment: value })}
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
            <h3 className="font-bold text-lg">Message Sent!</h3>
            <p className="py-4">Thank you for your submission.</p>
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
