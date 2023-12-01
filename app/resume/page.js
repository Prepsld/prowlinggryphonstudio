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
          {/* You can add placeholders for LinkedIn and GitHub */}
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
            digital experiences.
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
            <li>Programming Languages: [List of programming languages]</li>
            <li>Web Development: [List of web development skills]</li>
            <li>Database Management: [List of database skills]</li>
            {/* Add more specific skills as needed */}
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Experience</h2>
          <div>
            <h3 className="text-xl font-bold mb-1">Prowling Gryphon Studios</h3>
            <p className="italic text-gray-600">
              Complete Sultan of the Studio (of one) | 2020 - Present
            </p>
            <ul className="list-disc ml-6">
              <li>
                Lead and manage creative projects from concept to completion.
              </li>
              <li>
                Collaborate with cross-functional teams to deliver high-quality
                content.
              </li>
              <li>
                Oversee the development of visual assets, ensuring brand
                consistency.
              </li>
            </ul>
          </div>

          {/* Add more experience sections as needed */}
        </section>
      </div>
      <Blurb />
    </div>
  );
}