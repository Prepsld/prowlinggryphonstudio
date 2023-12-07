// This approach is taken from https://github.com/vercel/next.js/tree/canary/examples/with-mongodb
// Import the MongoClient class from the mongodb library
import { MongoClient } from "mongodb";

// Check if the MONGODB_URI environment variable is set
if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

// Retrieve the MongoDB URI from the environment variable
const uri = process.env.MONGODB_URI;

// Define options for the MongoClient (can be customized as needed)
const options = {};

// Declare variables to store the MongoClient instance and its promise
let client;
let clientPromise: Promise<MongoClient>;

// Check if the application is in development mode
if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable to preserve the MongoClient
  // instance across module reloads caused by Hot Module Replacement (HMR)
  if (!global._mongoClientPromise) {
    // Create a new MongoClient instance with the provided URI and options
    client = new MongoClient(uri, options);
    // Connect to the MongoDB server and assign the promise to the global variable
    global._mongoClientPromise = client.connect();
  }
  // Use the global promise for the MongoClient
  clientPromise = global._mongoClientPromise;
} else {
  // In production mode, create a new MongoClient instance and connect to the server
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

// Export a module-scoped MongoClient promise.
// By doing this in a separate module, the client can be shared across functions.
export default clientPromise;
