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
    <div className="drawer ">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar h-2 bg-base-300">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <div className="flex-none hidden lg:block max-w-screen-md">
            <ul className="menu menu-horizontal ">
              {/* Navbar menu content here */}
              <li>
                <Link href="/">Home Page</Link>
              </li>
              <li>
                <Link href="/documentation">Documentation</Link>
              </li>
              <li>
                <Link href="/projects">Projects</Link>
              </li>
              <li>
                <Link href="/resume">Resume</Link>
              </li>
              <li>
                <Link href="/contact">Contact Me</Link>
                {/* Add more links as needed */}
              </li>

              <select
                className="select select-secondary p-1 ml-2"
                data-choose-theme
              >
                <option disabled value="">
                  Pick a theme
                </option>
                <option value="cupcake">Light</option>
                <option value="business">Dark</option>
                <option value="retro">Retro</option>
              </select>
              <SignOutButton />
            </ul>
          </div>
        </div>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200">
          {/* Sidebar content here */}
          <li>
            <Link href="/">Home Page</Link>
          </li>
          <li>
            <Link href="/documentation">Documentation</Link>
          </li>
          <li>
            <Link href="/projects">Projects</Link>
          </li>
          <li>
            <Link href="/resume">Resume</Link>
          </li>
          <li>
            <Link href="/contact">Contact Me</Link>
            {/* Add more links as needed */}
          </li>

          <SignOutButton />
          <select className="select select-secondary mt-1" data-choose-theme>
            <option disabled value="">
              Pick a theme
            </option>
            <option value="cupcake">Light</option>
            <option value="business">Dark</option>
            <option value="retro">Retro</option>
          </select>
        </ul>
      </div>
    </div>
  );
};

export default Navigation;




