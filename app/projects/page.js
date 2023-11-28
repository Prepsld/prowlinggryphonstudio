// Define the HomePage component

import Navigation from '../components/Navigation';
import Blurb from '../components/Blurb';


export default function Projects() {
  return (
    <div class="prose">
        <Blurb />
      <Navigation />
      <div className="container mx-auto mt-8" >
        <h1 className="text-3xl font-bold mb-4">Projects</h1>
        <p>Here are some of the projects I have worked on during my time at SAIT, as well as some of my own personal projects.</p>
        
        
        {/* Add more sections as needed */}
      </div>
    </div>
  );
};