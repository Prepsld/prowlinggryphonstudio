// Define the HomePage component

import Navigation from '../components/Navigation';
import Blurb from '../components/Blurb';


export default function Resume() {
  return (
    <div class="prose">
        <Blurb />
      <Navigation />
      <div className="container mx-auto mt-8" >
        <h1 className="text-3xl font-bold mb-4">Resume</h1>

        {/* Education Section */}
        <section>
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <p>Southern Alberta Institute of Technology - Software Development, Expected graduation May 2024</p>
        </section>

        {/* Work Experience Section */}
        <section className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Work Experience</h2>
          <p>Job Title - Company, Start Date to End Date</p>
          <p>Job Responsibilities...</p>
        </section>

        {/* Skills Section */}
        <section className="mt-4">
          <h2 className="text-2xl font-bold mb-2">Skills</h2>
          <ul>
            <li>JavaScript</li>
            <li>React.js</li>
            <li>Node.js</li>
            <li>PL/SQL</li>
            <li>Java</li>
            <li>C#</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Unity</li>
            {/* Add more skills as needed */}
          </ul>
        </section>
        
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};