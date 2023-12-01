// components/Blurb.js
import React from "react";

const Blurb = () => {
  return (
    <footer className="container mx-auto max-w-screen-md mt-8">
      <section>
        <h3 className="prose">
          <a
            className="link link-accent"
            target="_blank"
            href="https://www.linkedin.com/in/david-prepsl-2b384a24b/"
          >
            Linkedin
          </a>
          <span className="text-base-content"> || </span>
          <a
            className="link link-accent"
            target="_blank"
            href="https://github.com/Prepsld/"
          >
            Github Repository
          </a>
          <span className="text-base-content"> || </span>
          DavidPrepsl@gmail.com
        </h3>
        <p>
          Aspiring full stack developer, currently enrolled in the SAIT Software
          Development program.
        </p>
      </section>
    </footer>
  );
};

export default Blurb;