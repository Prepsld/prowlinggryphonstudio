// pages/auth/signin.js
"use client";

import { useState } from "react";
import { getProviders, signIn } from "next-auth/react";
import Navigation from "../../components/Navigation";
import Blurb from "../../components/Blurb";
import { redirect } from "next/dist/server/api-utils";

export default function SignIn(providers) {
  const [credentials, setCredentials] = useState({
    username: "",
    password: "",
  });
  const [message, setMessage] = useState("You have successfully signed in!");
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    try {
      await signIn("login", {redirect: false,
        username: credentials.username,
        password: credentials.password,
        //callbackUrl: null,
      });
      // Show the modal upon successful sign-in
      setMessage("You have successfully signed in!");
      setShowModal(true);
    } catch (error) {
      setMessage("Sign in failed. Please try again.");
      console.error("Sign in failed:", error);
      // Handle sign-in error, show a message to the user, etc.
    }
  };
  const handleGoogleSignIn = async () => {
    try {
      await signIn("google", {
        redirect: false,
      });
      setMessage("You have successfully signed in!");
      setShowModal(true);
    } catch (error) {
      setMessage("Sign in failed. Please try again.");
      console.error("Google sign in failed:", error);
      // Handle Google sign-in error
    }
  };

  const handleGitHubSignIn = async () => {
    try {
      await signIn("github", {
        redirect: false,
      });
      setMessage("You have successfully signed in!");
      setShowModal(true);
    } catch (error) {
      setMessage("Sign in failed. Please try again.");
      console.error("GitHub sign in failed:", error);
      // Handle GitHub sign-in error
    }
  };

  const handleModalClose = () => {
    setShowModal(false);
    // Redirect the user after dismissing the modal
    window.location.href =
      "https://prowlinggryphonstudio.vercel.app/projects/auth";
  };

  return (
    <div className="prose container mx-auto max-w-screen-md">
      <h1 className="text-4xl font-bold mb-4">Custom Sign In Page</h1>
      <Navigation />
      <p>
        Welcome to the signin page. Here you will be able to sign in using one
        of three options: 1. Your username and password (stored in my Mongo
        Database) 2. Your Google account 3. Your GitHub account.
      </p>
      <p>If successful, you shall be redirected to my authorization page!</p>
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
        <button className="btn btn-accent mt-4" type="submit">
          Sign In
        </button>
      </form>
      {providers &&
        Object.values(providers).map((provider) => (
          <div key={provider.name} style={{ marginBottom: 0 }}>
            <button
              className="btn btn-primary mr-2 justify-center display-flex"
              onClick={() => signIn(provider.id, { redirect: false })}
            >
              Sign in with {provider.name}
            </button>
          </div>
        ))}
      <div className="flex flex-row items-center justify-center mt-4">
        <button
          className="btn btn-primary mr-2 justify-center display-flex"
          onClick={handleGoogleSignIn}
          //onClick={() =>
          //signIn("google", {
          //redirect: false,

          //callbackUrl:
          // "https://prowlinggryphonstudio.vercel.app/projects/auth",
          // })
          //}
        >
          Sign in with Google
        </button>
        <button
          className="btn btn-secondary justify-center display-flex"
          onClick={handleGitHubSignIn}
          //onClick={() =>
          //signIn("github", {
          //redirect: false,
          // callbackUrl:
          // "https://prowlinggryphonstudio.vercel.app/projects/auth",
          //</div></div>})
          //}
        >
          Sign in with GitHub
        </button>
      </div>

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

      <Blurb />
    </div>
  );
}
export async function getServerSideProps(context) {
  const providers = await getProviders();
  const csrfToken = await getCsrfToken(context);
  return {
    props: {
      providers,
      csrfToken,
    },
  };
}