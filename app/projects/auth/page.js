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
    return <>loading</>;
  }

  return (
    <div className="prose container mx-auto max-w-screen-md">
      <Navigation />
      <p className="text-2xl font-bold mb-4">Protected Page</p>
      <p className="mb-4">
        This is a protected page. If you are seeing this, congrats! Successfully signed in! :D
      </p>
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
