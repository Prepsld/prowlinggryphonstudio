// pages/signin.js
import { getSession } from "next-auth/react";
//import Signin from "../../components/Signin";
import Signin from "../../components/credentials"

export default function SignIn() {
  const { data: session } = getSession();

  // If the user is already authenticated, redirect them
  if (session) {
    // Redirect logic here
    // For example, you can use router.push('/dashboard') from 'next/router'
  }

  return (
    <div>
      <Signin />
    </div>
  );
}
