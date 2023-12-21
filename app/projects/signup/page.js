// pages/signup.js
"use client";
import { signIn } from "next-auth/react";
import { useState } from "react";
import Navigation from "../../components/Navigation";
import Blurb from "../../components/Blurb";

export default function Signup() {
  const [showModal, setShowModal] = useState(false);
  const [message, setMessage] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    const email = event.target.elements.email.value.toLowerCase();
    const password = event.target.elements.password.value;
    onSubmit({ email, password });
    
  };

  const onSubmit = async (user) => {
    try {
      const result = await signIn("signup", {
        ...user,
        // callbackUrl: `/projects`,
        redirect: false,
      });
      if (result?.ok) {
        setMessage("You have successfully signed up!");
        setShowModal(true);
      } else {
        setMessage("Sign up failed. Please try again.");
        console.error(
          "Authentication error:",
          result?.error || "Unknown error"
        );
        setShowModal(true);
      }
    } catch (error) {
      setMessage("Sign up failed. Please try again.");
      console.error("Authentication error:", error);
      setShowModal(true);
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
     // Redirect to the projects page
  };

  return (
    <div className="prose container mx-auto max-w-screen-md">
      <h1 className="text-4xl font-bold mb-4">User Signup</h1>
      <Navigation />
      <p>
        This is a simple signup page that will allow you to create a
        user/password combo in my Mongo Database. If the creation was
        successful, you will be redirected to the homepage!
      </p>
      <form className="mt-8 flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-md font-medium text-gray-700">
            Email {/* Change 'Username' to 'Email' */}
          </label>
          <input
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            name="email" /* Change 'username' to 'email' */
            type="email" /* Change 'text' to 'email' */
            placeholder="Enter your email" /* Change 'username' to 'email' */
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-md font-medium text-gray-700">
            Password
          </label>
          <input
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            name="password"
            type="password"
            placeholder="Enter your password"
            required
          />
        </div>
        <button className="btn btn-primary mt-4" type="submit">
          Sign Up
        </button>
      </form>
      <Blurb />

      {/* DaisyUI Modal */}
      {showModal && (
        <dialog id="my_modal_1" className="modal" open>
          <div className="modal-box">
            <h3 className="font-bold text-lg">Hello!</h3>
            <p className="py-4">{message}</p>
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