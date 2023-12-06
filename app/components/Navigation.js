// components/Navigation.js
import { React } from 'react';
import Link from 'next/link';
import SignOutButton from './signoutbtn';
import { themeChange } from "theme-change";
import { useEffect } from "react";



const Navigation = () => {
  /*Initialize under useEffect */

  useEffect(() => {
    themeChange(false);
  }, []);



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
          {/* Add more links as needed */}
        </div>
        <SignOutButton />
      </div>
      <select className="gradientselect" data-choose-theme>
        <option disabled value="">
          Pick a theme
        </option>
        <option value="business">Dark</option>
        <option value="cupcake">Light</option>
      </select>
    </nav>
  );
};

export default Navigation;