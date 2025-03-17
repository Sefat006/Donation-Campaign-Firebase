import React from "react";
import Card from "./Card";

const About = () => {
  return (
    <div className="bg-gray-100 py-10 px-4">
      <h2 className="text-4xl text-black font-bold text-center mb-8">About</h2>

      {/* Responsive flex container */}
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse md:flex-row items-center md:items-start gap-8">
        
        {/* Left: Text Section (Appears Second on Mobile, First on Larger Screens) */}
        <div className="justify-center mt-10 bg-sky-900 text-white p-6 rounded-xl shadow-lg md:max-w-lg w-full">
          <h1 className="mb-4 text-3xl md:text-4xl font-mono font-bold text-green-400">
            Our Mission & How You Can Help
          </h1>
          <p className="leading-relaxed">
            At <span className="font-bold">Donation Campaign Website</span>, our mission is to bring hope and support to those in need by connecting generous donors with impactful causes. Whether it's providing food for the hungry, education for underprivileged children, medical aid for the sick, or shelter for the homeless, we strive to make a difference in every way possible.
            <br />
            <br />
            How can you contribute? It’s simple! You can donate funds, volunteer your time, or spread the word about our campaigns. Every contribution, big or small, helps create a positive impact on countless lives. Join us in making the world a better place—one donation at a time. 💙
          </p>
        </div>

        {/* Right: Card Section (Appears First on Mobile, Second on Larger Screens) */}
        <div className="w-full md:w-96">
          <Card />
        </div>
        
      </div>
    </div>
  );
};

export default About;
