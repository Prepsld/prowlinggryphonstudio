// Define the Projects component
"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Blurb from "../components/Blurb";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="prose container mx-auto max-w-screen-md ">
      <h1 className="text-4xl font-bold mb-4">PROWLING GRYPHON STUDIOS</h1>
      <Navigation />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p>
          Here are some of the projects I have worked on during my time at SAIT,
          as well as some of my own personal projects.
        </p>

        <section>
          <h2 className="text-2xl font-bold mb-2">School Projects</h2>

          <ul>
            <li>
              <div className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Authorization and Authentication Test
                </div>
                <div className="collapse-content">
                  <p>
                    This is my simple implementation of using nextAuth to create
                    a sign in form.
                  </p>
                  <Link
                    href="./projects/auth"
                    className="btn btn-ghost text-xl"
                  >
                    Click here to test my sign in page!
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Signup page (MongoDB test)
                </div>
                <div className="collapse-content">
                  <p>
                    Utilizing MongoDB, this is my simple implementation of a
                    sign up form. Create a username and password to test it out!
                  </p>
                  <Link
                    href="./projects/signup"
                    className="btn btn-ghost text-xl"
                  >
                    Dont use your real password!
                  </Link>
                </div>
              </div>
            </li>

            {/* Add more school projects as needed */}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Private Projects</h2>
          <ul>
            <li>
              <Link href="/" className="btn btn-ghost text-xl">
                Private Project 1
              </Link>
            </li>
            <li>
              <Link href="/" className="btn btn-ghost text-xl">
                Private Project 2
              </Link>
            </li>
            {/* Add more private projects as needed */}
          </ul>
        </section>
      </div>
      <Blurb />
    </div>
  );
}
