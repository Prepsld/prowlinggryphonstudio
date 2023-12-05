// Define the HomePage component
"use client";
import Navigation from '../components/Navigation';
import Blurb from '../components/Blurb';


export default function Resume() {
  
  return (
    <div className="prose container mx-auto max-w-screen-md">
      <h1 className="text-4xl font-bold mb-4"> PROWLING GRYPHON STUDIOS</h1>
      <Navigation />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Resume</h1>
        <h2>David Prepsl</h2>
        <section>
          <h2 className="text-2xl font-bold mb-2">Contact Information</h2>
          <p>Phone: 403-393-1372</p>
          <p>Email: DavidPrepsl@gmail.com</p>
          <p>
            <a
              className="link link-accent"
              target="_blank"
              href="https://www.linkedin.com/in/david-prepsl-2b384a24b/"
            >
              Linkedin
            </a>
          </p>
          <p>
            <a
              className="link link-accent"
              target="_blank"
              href="https://github.com/Prepsld/"
            >
              Github Repository
            </a>
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Professional Summary</h2>
          <p>
            Aspiring game developer and software developer with a strong
            foundation in programming and a passion for creating engaging
            digital experiences. Proven use of MongoDB, Next.js, React, Node.js,
            C#, Java, SQL and NoSQL. Excited about exploring the dynamic world
            of full-stack web development to build scalable and interactive
            applications across the entire technology stack.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <p>
            SAIT - Southern Alberta Institute of Technology
            <br />
            Software Development Program
            <br />
            Expected Graduation: May 2024
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <ul className="list-disc ml-6">
            <li>
              <span className="font-bold">Programming Languages:</span> C
              (Beginner), Python (Beginner), C# (Intermediate), Java
              (Intermediate), JavaScript (Intermediate)
            </li>
            <li>
              <span className="font-bold">Web Development:</span> HTML
              (Intermediate), CSS (Intermediate), JavaScript (Intermediate),
              Node.js (Intermediate), React (Intermediate), React Native
              (Beginner), Next.js (Intermediate), NextAuth (Beginner)
            </li>
            <li>
              <span className="font-bold">Database Management:</span> Oracle
              (Intermediate), MySQL (Intermediate), NoSQL (Beginner), MongoDB
              (Beginner), Firebase (Beginner)
            </li>
            {/* Add more specific skills as needed */}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Experience</h2>
          <div>
            <h3 className="text-xl font-bold mb-1">Prowling Gryphon Studios</h3>
            <p className="italic text-gray-600">
              Supreme Sultan of the Studio (of one) | 2020 - Present
            </p>
            <ul className="list-disc ml-6">
              <li>
                Dictatorially led and micro-managed imaginary creative projects
                from concept to completion.
              </li>
              <li>
                Single-handedly collaborated with an imaginary cross-functional
                team to deliver questionably high-quality content.
              </li>
              <li>
                Ruthlessly oversaw the development of non-existent visual
                assets, ensuring the consistency of the make-believe brand.
              </li>
              <li>
                Imagined and implemented a non-existent marketing strategy to
                promote the non-existent brand.
              </li>
              <li>
                Created a completely real website to showcase the non-existent studio.
              </li>
            </ul>
          </div>

          {/* Add more fictional experience sections as needed */}
        </section>
      </div>
      <Blurb />
    </div>
  );
}