"use client";
import React from "react";
import Navigation from "../components/Navigation";
import Blurb from "../components/Blurb";

export default function DocumentPage() {
  return (
    <div className="prose container mx-auto max-w-screen-md">
      <h1 className="text-4xl font-bold mb-4">Documentation</h1>
      <Navigation />
      <section>
        <h2 className="text-3xl font-bold mb-2">Introduction</h2>
        <p>
          Welcome to the documentation for our website. This page provides an
          overview of the features and how the backend works to power these
          features.
        </p>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-2">Feature: MongoDB Connection</h2>

        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Overview</div>
          <div className="collapse-content">
            <p>
              In order to actually use a database, we need to establish a link
              with the database server. This connection is managed using a
              MongoDB driver or library, enabling the execution of queries and
              updates. My connection is taken from
              https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
            </p>
          </div>
        </div>

        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">How It Works</div>
          <div className="collapse-content">
            <section>
              <h2 class="text-2xl font-bold mb-2">MongoDB Connection Logic</h2>
              <p>
                The MongoDB connection logic in this code serves to establish a
                connection to a MongoDB database within a Next.js project using
                the official <code>mongodb</code> library.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">
                Environment Variable Check
              </h2>
              <p>
                The code first checks if the <code>MONGODB_URI</code>{" "}
                environment variable is set. If it is not set, the code throws
                an error, ensuring the presence of this essential variable.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">MongoDB URI Retrieval</h2>
              <p>
                Once the environment variable is confirmed, the code retrieves
                the MongoDB URI from the environment variable (
                <code>MONGODB_URI</code>), which holds the connection details
                for the MongoDB database.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">
                MongoClient Instance Creation
              </h2>
              <p>
                The <code>MongoClient</code> class from the <code>mongodb</code>{" "}
                library is then utilized to create a MongoDB client instance.
                This instance is configured with the provided URI and additional
                options, which can be customized based on the applications
                requirements.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">Development Mode Handling</h2>
              <p>
                In development mode, the code employs a global variable strategy
                to preserve the <code>MongoClient</code>
                instance across module reloads caused by Hot Module Replacement
                (HMR). This ensures efficiency and avoids unnecessary
                reconnections during development.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">Production Mode Handling</h2>
              <p>
                In production mode, a new <code>MongoClient</code> instance is
                created. This approach is adopted to maintain separation and
                prevent potential issues associated with global variables in
                production environments.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">Exporting the Promise</h2>
              <p>
                The resulting <code>clientPromise</code> is a promise that
                encapsulates the connection to the MongoDB server. This promise
                is then exported, allowing it to be used across different parts
                of the application. This export facilitates the sharing of the
                MongoDB client across various functions.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">Summary</h2>
              <p>
                In summary, the provided code establishes a robust and adaptable
                mechanism for managing MongoDB connections, considering both
                development and production environments. The organized breakdown
                highlights each key step in the MongoDB connection process.
              </p>
            </section>
          </div>
        </div>

        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Configuration
          </div>
          <div className="collapse-content">
            <p>
              To configure the MongoDB connection in my application, I followed
              these steps:
            </p>

            <ol className="list-decimal pl-6">
              <li>
                <p>
                  Set the <code>MONGODB_URI</code> environment variable with the
                  URI of my MongoDB database. I obtained this URI from MongoDB
                  Atlas.
                </p>
              </li>
              <li>
                <p>
                  Optionally, I can customize the connection options by
                  modifying the <code>options</code> object in the code. I can
                  adjust the parameters such as timeouts, SSL settings, or any
                  other relevant options as needed.
                </p>
              </li>
            </ol>

            <p>
              Here is an example of how my <code>MONGODB_URI</code> environment
              variable looks:
            </p>

            <pre className="overflow-x-auto bg-base-100 p-4 rounded-md">
              {`MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-address>/<database-name}?options`}
            </pre>
          </div>
        </div>

        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Use Cases</div>
          <div className="collapse-content">
            <section>
              <h2 class="text-2xl font-bold mb-2">User Authentication</h2>
              <p>
                The MongoDB connection established by this feature enables me to
                use user authentication. It enables the storage and retrieval of
                user data, including authentication information such as
                usernames, passwords, and authorization tokens. This use case is
                essential for ensuring secure access to various features and
                content on the website.... If I had any.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">
                Sending/Retrieving Comments
              </h2>
              <p>
                Another key use case facilitated by this MongoDB connection is
                the sending and retrieving of user comments. The connection
                allows the application to store user-generated content, such as
                comments, in the MongoDB database. Additionally, it enables the
                efficient retrieval of comments for display on the website,
                fostering user engagement and interaction.
              </p>
            </section>
          </div>
        </div>
      </section>

      {/* Repeat similar sections for other features */}

      <section>
        <h2 className="text-3xl font-bold mb-2">Feature: Api Routes</h2>

        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Overview</div>
          <div className="collapse-content">
            <p>
              In order to actually use a database, we need to establish a link
              with the database server. This connection is managed using a
              MongoDB driver or library, enabling the execution of queries and
              updates. My connection is taken from
              https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
            </p>
          </div>
        </div>

        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">How It Works</div>
          <div className="collapse-content">
            <section>
              <h2 class="text-2xl font-bold mb-2">MongoDB Connection Logic</h2>
              <p>
                The MongoDB connection logic in this code serves to establish a
                connection to a MongoDB database within a Next.js project using
                the official <code>mongodb</code> library.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">
                Environment Variable Check
              </h2>
              <p>
                The code first checks if the <code>MONGODB_URI</code>{" "}
                environment variable is set. If it is not set, the code throws
                an error, ensuring the presence of this essential variable.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">MongoDB URI Retrieval</h2>
              <p>
                Once the environment variable is confirmed, the code retrieves
                the MongoDB URI from the environment variable (
                <code>MONGODB_URI</code>), which holds the connection details
                for the MongoDB database.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">
                MongoClient Instance Creation
              </h2>
              <p>
                The <code>MongoClient</code> class from the <code>mongodb</code>{" "}
                library is then utilized to create a MongoDB client instance.
                This instance is configured with the provided URI and additional
                options, which can be customized based on the applications
                requirements.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">Development Mode Handling</h2>
              <p>
                In development mode, the code employs a global variable strategy
                to preserve the <code>MongoClient</code>
                instance across module reloads caused by Hot Module Replacement
                (HMR). This ensures efficiency and avoids unnecessary
                reconnections during development.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">Production Mode Handling</h2>
              <p>
                In production mode, a new <code>MongoClient</code> instance is
                created. This approach is adopted to maintain separation and
                prevent potential issues associated with global variables in
                production environments.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">Exporting the Promise</h2>
              <p>
                The resulting <code>clientPromise</code> is a promise that
                encapsulates the connection to the MongoDB server. This promise
                is then exported, allowing it to be used across different parts
                of the application. This export facilitates the sharing of the
                MongoDB client across various functions.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">Summary</h2>
              <p>
                In summary, the provided code establishes a robust and adaptable
                mechanism for managing MongoDB connections, considering both
                development and production environments. The organized breakdown
                highlights each key step in the MongoDB connection process.
              </p>
            </section>
          </div>
        </div>

        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Configuration
          </div>
          <div className="collapse-content">
            <p>
              To configure the MongoDB connection in my application, I followed
              these steps:
            </p>

            <ol className="list-decimal pl-6">
              <li>
                <p>
                  Set the <code>MONGODB_URI</code> environment variable with the
                  URI of my MongoDB database. I obtained this URI from MongoDB
                  Atlas.
                </p>
              </li>
              <li>
                <p>
                  Optionally, I can customize the connection options by
                  modifying the <code>options</code> object in the code. I can
                  adjust the parameters such as timeouts, SSL settings, or any
                  other relevant options as needed.
                </p>
              </li>
            </ol>

            <p>
              Here is an example of how my <code>MONGODB_URI</code> environment
              variable looks:
            </p>

            <pre className="overflow-x-auto bg-base-100 p-4 rounded-md">
              {`MONGODB_URI=mongodb+srv://<username>:<password>@<cluster-address>/<database-name}?options`}
            </pre>
          </div>
        </div>

        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Use Cases</div>
          <div className="collapse-content">
            <section>
              <h2 class="text-2xl font-bold mb-2">User Authentication</h2>
              <p>
                The MongoDB connection established by this feature enables me to
                use user authentication. It enables the storage and retrieval of
                user data, including authentication information such as
                usernames, passwords, and authorization tokens. This use case is
                essential for ensuring secure access to various features and
                content on the website.... If I had any.
              </p>
            </section>

            <section>
              <h2 class="text-2xl font-bold mb-2">
                Sending/Retrieving Comments
              </h2>
              <p>
                Another key use case facilitated by this MongoDB connection is
                the sending and retrieving of user comments. The connection
                allows the application to store user-generated content, such as
                comments, in the MongoDB database. Additionally, it enables the
                efficient retrieval of comments for display on the website,
                fostering user engagement and interaction.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-2">Conclusion</h2>
        <p>
          Summarize the key points and encourage users to explore the
          documentation for a better understanding of our websites features.
        </p>
      </section>
      <Blurb />
    </div>
  );
}
