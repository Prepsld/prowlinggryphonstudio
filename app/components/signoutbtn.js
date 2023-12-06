// components/SignOutButton.js
import { useSession, signOut } from "next-auth/react";

export default function SignOutButton() {
  const { data: session } = useSession();

  if (!session) {
    // If the user is not signed in, do not render the sign-out button
    return null;
  }

  const handleSignOut = () => {
    signOut({});
  };

  return (
    <button className="btn btn-warning btn-xs" onClick={handleSignOut}>
      Sign out!
    </button>
  );
}
