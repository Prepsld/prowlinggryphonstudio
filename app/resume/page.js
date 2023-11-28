// Define the HomePage component

import Navigation from '../components/Navigation';
import Blurb from '../components/Blurb';


export default function Resume() {
  return (
    <div class="prose">
      <Navigation />
      <Blurb />
      <h1>Beauty requires exploration.</h1>
    <h2>Nothing is impossible. The world is aglow with electromagnetic forces.</h2>
    <p>Hello there, welcome to my webpage. Over my two year program at the Southern Alberta Institute of Technology I have learned
      several useful skills, such as: HTML, CSS, Javascript, React, Node.js, and SQL. I have also learned Object Oriented Programming using both Java and C#.
      My passion one day is to create retro styled video games, and I am currently working on a project using Unity and C#.
    </p>
    <h3>Although you may not realize it, you are authentic.</h3>
    </div>
  );
}