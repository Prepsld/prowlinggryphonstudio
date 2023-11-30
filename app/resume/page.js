// Define the HomePage component

import Navigation from '../components/Navigation';
import Blurb from '../components/Blurb';


export default function Resume() {
  return (
    <div className="prose container mx-auto">
      <h1 className="text-4xl font-bold mb-4"> PROWLING GRYPHON STUDIOS</h1>
      <Navigation />
      <Blurb />
      <div className="container mx-auto mt-8 w-full h-full">
        <h1 className="text-3xl font-bold mb-4">Resume</h1>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <p>
            Southern Alberta Institute of Technology - Software Development,
            Expected graduation May 2024
          </p>
        </section>

        {/* Work Experience Section */}
        <section className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
          <p>Job Title - Company, Start Date to End Date</p>
          <p>Job Responsibilities...</p>
        </section>

        {/* Skills Section */}
        <section className="mt-4 ">
          <h2 className="text-2xl font-bold mb-2">Skills</h2>

            <ul className="text-xs">
              <li>JavaScript</li>
            </ul>
            {/* Add more skills as needed */}
       
        </section>

        {/* Add more sections as needed */}
      </div>
    </div>
  );
};