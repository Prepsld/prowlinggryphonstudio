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
    <div className="flex items-center">
      <p className="mr-2">Signed in as: {session.user.email}</p>
      <button className="btn btn-warning" onClick={handleSignOut}>
        Sign out!
      </button>
    </div>
  );
}
