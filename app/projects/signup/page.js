// pages/signup.js
"use client";
import { signIn } from "next-auth/react";
export default function Signup() {
  

  const handleSubmit = (event) => {
    event.preventDefault();
    const username = event.target.elements.username.value;
    const password = event.target.elements.password.value;
    onSubmit({ username, password });
  };
  const onSubmit = async (user) => {
    try {
      const result = await signIn("credentials", {
        ...user,
        isSignup: true,
        callbackUrl: `/projects`,
      });
      console.log("Authentication result:", result);
    } catch (error) {
      console.error("Authentication error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="username" type="text" placeholder="Username" required />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}