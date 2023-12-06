// components/Navigation.js
import React from 'react';
import Link from 'next/link';
import SignOutButton from './signoutbtn';
const Navigation = () => {
  return (
    <nav className="navbar bg-base-300">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="/" className="btn btn-ghost text-xl">
            Home Page
          </Link>
        </div>
        <div className="space-x-1">
          <Link href="/projects" className="btn btn-ghost text-xl">
            Projects
          </Link>
          <Link href="/resume" className="btn btn-ghost text-xl">
            Resume
          </Link>
          <SignOutButton />
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;