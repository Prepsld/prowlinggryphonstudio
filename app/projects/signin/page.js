// pages/auth/signin.js
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";

export default function SignIn() {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signIn("credentials", {
        username: credentials.username,
        password: credentials.password,
        callbackUrl: "http://localhost:3000/projects/auth" 
      });

      // If the signIn is successful, you can redirect the user
      // For example, Router.push('/dashboard');
    } catch (error) {
      console.error("Sign in failed:", error);
      // Handle sign-in error, show a message to the user, etc.
    }
  };

  return (
    <div>
      <h1>Custom Sign In Page</h1>
      <form onSubmit={handleSignIn}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </label>
        <br />
        <label>
          Password:
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </label>
        <br />
        <button type="submit">Sign In</button>
      </form>
      <button
        onClick={() =>
          signIn("google", {
            callbackUrl: "http://localhost:3000/projects/auth",
          })
        }
      >
        Sign in with Google
      </button>
      <button
        onClick={() =>
          signIn("github", {
            callbackUrl: "http://localhost:3000/projects/auth",
          })
        }
      >
        Sign in with GitHub
      </button>
      {/* Add your custom sign-in form or additional providers here */}
      {/* Add your other sign-in buttons (e.g., Google, GitHub) here */}
    </div>
  );
}
