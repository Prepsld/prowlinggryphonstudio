"use client";

import { useState, useEffect } from "react";
import { useSession, signIn, signOut } from "next-auth/react";
import Navigation from "../../components/Navigation";
import Blurb from "../../components/Blurb";

export default function SignIn() {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const [message, setMessage] = useState("You have successfully signed in!");
  const [showModal, setShowModal] = useState(false);
  const [isauth, setIsAuth] = useState(false);

  const {data: session} = useSession();
  const { status } = useSession();

  const handleChange = (e) => {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  };

  const handleSignIn = async (e) => {
    e.preventDefault();

    const response = await signIn("login", {
      redirect: false,
      email: credentials.email.toLowerCase(),
      password: credentials.password,
    });

    if (response.error) {
      setMessage("Sign in failed. Please try again.");
      console.error("Sign in failed:", response.error);
      setShowModal(true);
    }
  };


const handleGoogleSignIn = async () => {
  try {
    await signIn("google", {
      redirect: false,
    });
    setMessage("You have successfully signed in with Google!");
  } catch (error) {
    setMessage("Sign in with Google failed. Please try again.");
  }
};

const handleGitHubSignIn = async () => {
  try {
    await signIn("github", {
      redirect: false,
    });
    setMessage("You have successfully signed in with Github!");
  } catch (error) {
    setMessage("Sign in with GitHub failed. Please try again.");
  }
};



  const handleModalClose = () => {
    setShowModal(false);
    if (session) {
      setIsAuth(true);
    }
  };

  useEffect(() => {
    if (session) {
      setMessage("You have successfully signed in!");
      setShowModal(true);
    }
  }, [session]);

  if (status === "loading") {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
          fontSize: "2rem",
        }}
      >
        <span className="loading loading-spinner loading-lg"></span>
        Loading...
      </div>
    );
  } else if (isauth === true) {
    return (
      <div className="prose container mx-auto max-w-screen-md">
        <Navigation />
        <p className="text-2xl font-bold mb-4">Protected Page</p>
        <p className="mb-4">
          This is a protected page. If you are seeing this, congrats!
          Successfully signed in! :D
        </p>
        <p>
          From here you can either go to another page, OR you can sign out and
          try again with another provider!
        </p>
        <button className="btn btn-warning mt-4" onClick={() => signOut({})}>
          Sign out!
        </button>
        <Blurb />
      </div>
    );
  } else {
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
        <form
          className="mt-8 flex flex-col items-center"
          onSubmit={handleSignIn}
        >
          <div className="mb-4">
            <label className="block text-m font-medium text-gray-700">
              Email {/* Change 'Username' to 'Email' */}
            </label>
            <input
              className="mt-1 p-2 border border-gray-300 rounded w-full"
              type="email"
              name="email" /* Change 'username' to 'email' */
              value={credentials.email} /* Change 'username' to 'email' */
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
        <div className="flex flex-row items-center justify-center mt-4">
          <button
            className="btn btn-primary mr-2 justify-center display-flex"
            onClick={handleGoogleSignIn}
          >
            Sign in with Google
          </button>
          <button
            className="btn btn-secondary justify-center display-flex"
            onClick={handleGitHubSignIn}
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
}
