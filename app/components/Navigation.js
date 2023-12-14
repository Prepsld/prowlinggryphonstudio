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
    <nav className=" navbar bg-base-300">
      <div className="container mx-auto flex items-center justify-between space-x-1">
        <div>
          <Link
            href="/"
            className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg text-md"
          >
            Home Page
          </Link>
          <Link
            href="/documentation"
            className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg text-md"
          >
            Documentation
          </Link>
          <Link
            href="/projects"
            className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg text-md"
          >
            Projects
          </Link>
          <Link
            href="/resume"
            className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg text-md"
          >
            Resume
          </Link>
          <Link
            href="/contact"
            className="btn btn-ghost btn-xs sm:btn-sm md:btn-md lg:btn-lg text-md"
          >
            Contact Me
          </Link>
          {/* Add more links as needed */}
        </div>
        <SignOutButton />
      </div>
      <select className="select select-secondary" data-choose-theme>
        <option disabled value="">
          Pick a theme
        </option>
        <option value="cupcake">Light</option>
        <option value="business">Dark</option>
        <option value="retro">Retro</option>
      </select>
    </nav>
  );
};

export default Navigation;