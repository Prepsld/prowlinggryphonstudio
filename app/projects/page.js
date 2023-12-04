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
              <Link href="./projects/auth" className="btn btn-ghost text-xl">
                Authorization and Authentication Test
              </Link>
            </li>
            <li>
              <Link href="./projects/signup" className="btn btn-ghost text-xl">
                Signup page (MongoDB test)
              </Link>
            </li>
            <li>
              <Link href="./projects/signin" className="btn btn-ghost text-xl">
                Signin page (MongoDB test)
                </Link>
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
