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
            <li>
              <div className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Signin page ( custom test)
                </div>
                <div className="collapse-content">
                  <p>
                    This is my attempt at combining both a login and protected
                    page together. As well, I wanted to fix my issues with the
                    sign in page not redirecting properly.In this test, I have a
                    custom sign in page that allows you to sign in with a
                    username and password, or with your google account. If you
                    are successful, you will be redirected to the same page, and
                    clicking the modal with give you the authorized page!
                  </p>
                  <Link
                    href="./projects/sigintest"
                    className="btn btn-ghost text-xl"
                  >
                    Try me out, I worked hard on this!
                  </Link>
                </div>
              </div>
            </li>
            <li>
              <div className="collapse bg-base-200">
                <input type="checkbox" />
                <div className="collapse-title text-xl font-medium">
                  Database storage test
                </div>
                <div className="collapse-content">
                  <p>
                    This is a simple page that allows you to enter a username and comment and submit it to a database.
                    I had a lot of trouble with this one, but I finally got it working!
                  </p>
                  <Link
                    href="./projects/database"
                    className="btn btn-ghost text-xl"
                  >
                    This took me longer than it should have
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
