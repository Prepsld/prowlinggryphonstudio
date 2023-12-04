// projects/auth/page.js
"use client";

import {useSession} from "next-auth/react";
import { signOut } from "next-auth/react";


export default function AuthPage () {
  const {status } = useSession({
    required: true,
  });


  if (status === "loading") {
    return <>loading</>;
  }

  return (
    
    <div className="flex h-screen items-center justify-center">
      <p>This is a protected page. If you are seeing this, congrats! Youre trusted :D</p>
      <p>
        <button onClick={() => signOut({})}>Sign out</button>
      </p>
      <p>
        
      </p>
    </div>
  );
}