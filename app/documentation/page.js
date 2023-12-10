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

            <pre className="overflow-x-auto bg-base-100 p-4 rounded-md text-slate-500">
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
        <h2 className="text-3xl font-bold mb-2">Feature: API Routes</h2>

        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Overview</div>
          <div className="collapse-content">
            <p>
              In order to interact with the backend and perform specific
              actions, API routes are defined. These routes handle requests from
              the client, execute necessary logic, and provide responses. The
              following sections detail the key API routes in this application.
            </p>
          </div>
        </div>

        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            NextAuthorization
          </div>
          <div className="collapse-content">
            <section>
              <h2 class="text-2xl font-bold mb-2">Endpoint:</h2>
              <p>
                <code>/api/auth/[...nextauth]/route.js</code>
              </p>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Purpose:</h2>
              <p>
                This route handles authentication through NextAuth, allowing
                users to sign in and obtain authorization tokens. The
                authentication process supports multiple providers, including
                Google, GitHub, and a custom MongoDB provider.
              </p>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Method:</h2>
              <p>POST, GET</p>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Parameters:</h2>
              <ul>
                <li>
                  <code>username</code>: Users username (for MongoDB provider)
                </li>
                <li>
                  <code>password</code>: Users password (for MongoDB provider)
                </li>
                <li>
                  <code>email</code>: Users email (for Google and Github
                  providers)
                </li>
              </ul>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Providers:</h2>

              <p>
                The authentication process supports the following providers:
              </p>
              <ul>
                <li>Google</li>
                <li>GitHub</li>
                <li>MongoDB (Custom)</li>
              </ul>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Password Security:</h2>
              <p>
                For the MongoDB provider, user passwords are securely stored
                using password hashing techniques, ensuring the protection of
                sensitive user information.
              </p>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Access:</h2>
              <p>
                Successful authentication through this route grants access to
                the restricted page on the website.
              </p>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Response:</h2>
              <p>
                The route responds with a JSON object containing user
                information and an authorization token upon successful
                authentication.
              </p>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Code Explanation:</h2>
              <p>
                The code for this authentication route utilizes NextAuth with
                multiple providers, including Google, GitHub, and custom MongoDB
                providers. The `authOptions` object configures each provider,
                specifying client IDs, client secrets, and custom credential
                fields for MongoDB. Additionally, it sets up password hashing
                for MongoDB users and defines JWT options for token generation.
              </p>
              <p>
                The route exports a handler function, which is accessible via
                both GET and POST requests. The `MongoDBAdapter` handles data
                storage, and the `session` configuration defines the JWT
                strategy for session management. Customization is achieved
                through options like specifying the sign-in page path.
              </p>
            </section>
          </div>
        </div>

        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">
            Send/Receive Comments
          </div>
          <div className="collapse-content">
            <section>
              <h2 class="text-2xl font-bold mb-2">Endpoint:</h2>
              <p>
                <code>/api/sendcomment/route.js</code>
              </p>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Purpose:</h2>
              <p>
                This route facilitates the sending and receiving of user
                comments. It allows the storage of comments in the MongoDB
                database and efficient retrieval for display on the website.
              </p>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Methods:</h2>
              <p>POST (for sending comments)</p>
              <p>GET (for retrieving comments)</p>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Parameters:</h2>
              <ul>
                <li>
                  <code>username</code>: Username of the user sending the
                  comment (for POST request)
                </li>
                <li>
                  <code>comment</code>: Content of the comment, provided in
                  richText format (for POST request)
                </li>
              </ul>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Response:</h2>
              <p>
                JSON array of comments for the specified post (for GET request).
              </p>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Code Explanation:</h2>
              <p>
                The provided code handles the submission and retrieval of
                comments. For the POST request, the route inserts the users
                comment into the MongoDB UserComments collection, associating
                it with the provided username. For the GET request, the route
                retrieves all comments from the collection and responds with a
                JSON array containing the comments.
              </p>
              <p>
                The MongoDB database is used to efficiently store and manage
                user-generated comments, allowing for seamless interaction and
                engagement on the website.
              </p>
            </section>
          </div>
        </div>

        <div className="collapse bg-base-200">
          <input type="checkbox" />
          <div className="collapse-title text-xl font-medium">Send Email</div>
          <div className="collapse-content">
            <section>
              <h2 class="text-2xl font-bold mb-2">Endpoint:</h2>
              <p>
                <code>/api/sendEmail/route.js</code>
              </p>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Purpose:</h2>
              <p>
                This route handles the sending of emails using the Nodemailer
                library, facilitating communication with users or
                administrators.
              </p>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Method:</h2>
              <p>POST</p>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Parameters:</h2>
              <ul>
                <li>
                  <code>username</code>: Senders username
                </li>
                <li>
                  <code>email</code>: Senders email address
                </li>
                <li>
                  <code>topic</code>: Subject of the email
                </li>
                <li>
                  <code>comment</code>: Content of the email message
                </li>
              </ul>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Response:</h2>
              <p>
                JSON object indicating the success or failure of the email
                sending process.
              </p>
            </section>
            <section>
              <h2 class="text-2xl font-bold mb-2">Code Explanation:</h2>
              <p>
                The provided code utilizes the Nodemailer library to send
                emails. It creates a transporter with the SendGrid SMTP details
                and sends an email containing information provided in the
                request body, such as the senders username, email, topic, and
                comment.
              </p>
              <p>
                The route is designed for use cases like contact form
                submissions, enabling users to communicate with administrators
                or receive important notifications via email.
              </p>
            </section>
          </div>
        </div>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-2">Conclusion</h2>
        <p>
          In conclusion, this documentation provides a comprehensive overview of
          the features and functionality that power my website. From
          understanding the MongoDB connection logic to exploring the
          intricacies of API routes and authentication with NextAuth, you have
          gained insight into the inner workings of my web application!
        </p>
        <p>
          I encourage you to delve deeper into each section for a more thorough
          understanding of how each feature contributes to the overall user
          experience. Whether you are interested in exploring my API routes,
          grasping the intricacies of MongoDB integration, or discovering the
          versatility of authentication with NextAuth, this documentation should
          get you started.
        </p>
        <p>
          Thank you for exploring the documentation. If you have any further
          questions or need assistance, feel free to reach out. Happy exploring!
          As well, my code is available on GitHub at the following link:{" "}
          <a
            href="https://github.com/Prepsld/prowlinggryphonstudio"
            target="_blank"
          >
            prowlinggryphonstudio
          </a>
        </p>
      </section>

      <Blurb />
    </div>
  );
}
