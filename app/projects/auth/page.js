// projects/auth/page.js
"use client";

import {useSession} from "next-auth/react";
import { signOut } from "next-auth/react";


export default function AuthPage () {
  const { data, status } = useSession({
    required: true,
  });

  const user = data?.user;

  if (status === "loading") {
    return <>loading</>;
  }

  return (
    <div className="flex h-screen items-center justify-center">
      <p>This is a protected page.</p>
      <p>
        <button onClick={() => signOut({})}>Sign out</button>
      </p>
      <p>
        {user?.name} ({user?.email} {user?.id})
      </p>
    </div>
  );
}