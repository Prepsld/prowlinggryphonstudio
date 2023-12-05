// pages/auth/signin.js
"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import Navigation from "../../components/Navigation";
import Blurb from "../../components/Blurb";

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
        callbackUrl: "https://prowlinggryphonstudio.vercel.app/projects/auth",
      });
    } catch (error) {
      console.error("Sign in failed:", error);
      // Handle sign-in error, show a message to the user, etc.
    }
  };

  return (
    <div className="prose container mx-auto max-w-screen-md">
      <h1 className="text-4xl font-bold mb-4">Custom Sign In Page</h1>
      <Navigation />
      <p> Welcome to the signin page. Here you will be able to sign in using one of three options: 
        1. Your username and password (stored in my Mongo Database)
        2. Your Google account
        3. Your GitHub account
        If successful, you shall be redirected to my authorization page!
      </p>
      <form className="mt-8 flex flex-col items-center" onSubmit={handleSignIn}>
        <div className="mb-4">
          <label className="block text-m font-medium text-gray-700">
            Username
          </label>
          <input
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            type="text"
            name="username"
            value={credentials.username}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label className="block text-m font-medium text-gray-700">
            Password
          </label>
          <input
            className="mt-1 p-2 border border-gray-300 rounded w-full"
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
          />
        </div>
        <button
          className="btn btn-accent mt-4"
          type="submit"
        >
          Sign In
        </button>
      </form>
      <button
        className="btn btn-primary mt-4"
        onClick={() =>
          signIn("google", {
            callbackUrl:
              "https://prowlinggryphonstudio.vercel.app/projects/auth",
          })
        }
      >
        Sign in with Google
      </button>
      <button
        className="btn btn-secondary mt-2"
        onClick={() =>
          signIn("github", {
            callbackUrl:
              "https://prowlinggryphonstudio.vercel.app/projects/auth",
          })
        }
      >
        Sign in with GitHub
      </button>
      <Blurb text="Or sign in with your social media account." />
    </div>
  );
}
