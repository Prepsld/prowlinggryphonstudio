// components/Blurb.js
import React from 'react';

const Blurb = () => {
  return (
    <section  className="container mx-auto mt-8">
      <h2 className="text-3xl font-bold mb-4">David Prepsl, student of SAIT</h2>
      <h3>
        <a className="link link-accent" target="_blank" href="https://www.linkedin.com/in/david-prepsl-2b384a24b/">Linkedin</a>
      </h3>
      <h3>
        <a className="link link-accent" target="_blank" href="https://github.com/Prepsld/">Github Repository</a>
      </h3>
      <p>
        Aspiring full stack developer, currently enrolled in the SAIT Software Development program.
      </p>
    </section>
  );
};

export default Blurb;