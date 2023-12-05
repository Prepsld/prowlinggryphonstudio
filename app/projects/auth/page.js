// projects/auth/page.js
"use client";

import { useSession } from "next-auth/react";
import { signOut } from "next-auth/react";
import Blurb from "../../components/Blurb";
import Navigation from "../../components/Navigation";

export default function AuthPage() {
  const { status } = useSession({
    required: true,
  });

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
  }

  return (
    <div className="prose container mx-auto max-w-screen-md">
      <Navigation />
      <p className="text-2xl font-bold mb-4">Protected Page</p>
      <p className="mb-4">
        This is a protected page. If you are seeing this, congrats! Successfully signed in! :D
      </p>
      <p>From here you can either go to another page, OR you can sign out and try again with another provider!</p>
      <button
        className="btn btn-warning mt-4"
        onClick={() => signOut({})}
      >
        Sign out!
      </button>
      <Blurb />
    </div>
  );
}
