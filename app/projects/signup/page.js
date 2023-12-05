// pages/signup.js
"use client";
import { signIn } from "next-auth/react";
import Navigation from "../../components/Navigation";
import Blurb from "../../components/Blurb";

export default function Signup() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    onSubmit({ username, password });
  };

  const onSubmit = async (user) => {
    try {
      const result = await signIn("signup", {
        ...user,
        callbackUrl: `/projects`,
      });
      console.log("Authentication result:", result);
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <div className="prose container mx-auto max-w-screen-md">
      <h1 className="text-4xl font-bold mb-4">User Signup</h1>
      <Navigation />
      <p>
        This is a simple signup page that will allow you to create a
        user/password combo in my Mongo Database. If the creation was successful, you will be redirected to the homepage!
      </p>
      <form className="mt-8 flex flex-col items-center" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-md font-medium text-gray-700">
            Username
          </label>
          <input
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            name="username"
            type="text"
            placeholder="Enter your username"
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
    </div>
  );
}
