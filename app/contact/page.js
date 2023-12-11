"use client";    
import ContactForm from "../components/ContactForm";
import Navigation from "../components/Navigation";
import Blurb from "../components/Blurb";
const Home = () => {
  return (
    <div className="prose container mx-auto max-w-screen-md">
      <h1 className="text-4xl font-bold mb-4">Contact Me</h1>
      <Navigation />
      <h2 className="text-3xl font-bold mb-2">Contact Form!</h2>
      <p>
        I hope you have enjoyed my website! If you have any questions or
        comments, or just want to say hi, please fill out the form below and I
        will get back to you as soon as I can!
      </p>
      <ContactForm />
      <Blurb />
    </div>
  );
};

export default Home;
