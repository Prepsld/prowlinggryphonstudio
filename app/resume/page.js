// Define the HomePage component

import Navigation from '../components/Navigation';
import Blurb from '../components/Blurb';


export default function Resume() {
  
  return (
    <div className="prose container mx-auto max-w-screen-md">
      <h1 className="text-4xl font-bold mb-4"> PROWLING GRYPHON STUDIOS</h1>
      <Navigation />
      <div className="container mx-auto mt-8">
        <h1 className="text-3xl font-bold mb-4">Resume</h1>

        <section>
          <h2 className="text-2xl font-bold mb-2">Summary</h2>
          <p>
            I am a passionate and dedicated professional with a strong
            background in the creative arts. Over the years, I have honed my
            skills in various aspects of multimedia production, from graphic
            design to video editing. Currently, I am a key member of the
            Prowling Gryphon Studios team.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold mb-2">Experience</h2>
          <div>
            <h3 className="text-xl font-bold mb-1">Prowling Gryphon Studios</h3>
            <p className="italic text-gray-600">
              Creative Director | 2020 - Present
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

        <section>
          <h2 className="text-2xl font-bold mb-2">Education</h2>
          <div>
            <h3 className="text-xl font-bold mb-1">University Name</h3>
            <p className="italic text-gray-600">
              Bachelor of Arts in Multimedia Arts | Graduated 2018
            </p>
          </div>

          {/* Add more education sections as needed */}
        </section>

        {/* Add more sections for skills, projects, certifications, etc. */}
      </div>
      <Blurb />
    </div>
  );
}