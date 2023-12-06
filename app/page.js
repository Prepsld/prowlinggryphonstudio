// Define the HomePage component
"use client";
import Navigation from "./components/Navigation";
import Blurb from "./components/Blurb";
import SignOutButton from "./components/signoutbtn";


export default function HomePage() {
  return (
    <div className="prose container mx-auto max-w-screen-md">
      <h1 className="text-4xl font-bold mb-4"> PROWLING GRYPHON STUDIOS</h1>
      <Navigation />
      <h1>Beauty requires exploration.</h1>
      <h2>
        Nothing is impossible. The world is aglow with electromagnetic forces.
      </h2>
      <p>
        Hello there, welcome to my webpage! Over my two year program at the
        Southern Alberta Institute of Technology I have learned several useful
        skills, such as: HTML, CSS, Javascript, React, Node.js, and SQL. I have
        also learned Object Oriented Programming using both Java and C#. My
        passion one day is to create retro styled video games, and I am
        currently working on a project using Unity and C#.
      </p>
      <h3>Although you may not realize it, you are authentic.</h3>
      <Blurb />
    </div>
  );
}
