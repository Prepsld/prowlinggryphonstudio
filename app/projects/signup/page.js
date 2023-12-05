// pages/signup.js
"use client";
import { signIn } from "next-auth/react";
import Navigation from "../../components/Navigation";
import Blurb from "../../components/Blurb";

export default function Signup() {
  const [errorMessage, setErrorMessage] = useState(""); // State variable for error message

  const handleSubmit = async (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;

    try {
      const result = await signIn(
        "signup",
        {
          username,
          password,
          callbackUrl: "/projects",
        },
        true
      );
      console.log("Authentication result:", result);
    } catch (error) {
      console.error("Authentication error:", error);
      setErrorMessage(
        "Username already exists. Please choose a different username."
      ); // Set the error message
    }
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
      {/* Render error message if it exists */}
      {errorMessage && <div className="text-red-500 mb-4">{errorMessage}</div>}
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
