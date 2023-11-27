// components/Navigation.js
import React from 'react';
import Link from 'next/link';

const Navigation = () => {
  return (
    <nav className="navbar bg-base-300" class="prose">
      <div className="container mx-auto flex items-center justify-between">
        <div>
          <Link href="/" className="btn btn-ghost text-xl">
            Home Page
          </Link>
        </div>
        <div className="space-x-4">
          <Link href="/projects" className="btn btn-ghost text-xl">
            Projects
          </Link>
          <Link href="/resume" className="btn btn-ghost text-xl">
            Resume
          </Link>
          {/* Add more links as needed */}
        </div>
      </div>
    </nav>
  );
};

export default Navigation;