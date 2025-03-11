import React from "react";
import { Link } from "react-router-dom";
import { FaHandHoldingHeart, FaDonate, FaMapMarkerAlt } from "react-icons/fa";

const HowItWorks = () => {
  return (
    <section className="py-12 bg-gray-100">
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-gray-800 mb-6">How It Works</h2>
        <p className="text-lg text-gray-600 mb-10">
          Supporting those in need has never been easier. Follow these simple steps to make a difference today!
        </p>

        {/* Steps Section */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="card bg-white shadow-lg p-6 rounded-xl">
            <div className="flex justify-center mb-4">
              <FaHandHoldingHeart className="text-5xl text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Choose a Campaign</h3>
            <p className="text-gray-600 mt-2">
              Select from various causes including food aid, education, medical assistance, and more.
            </p>
          </div>

          {/* Step 2 */}
          <div className="card bg-white shadow-lg p-6 rounded-xl">
            <div className="flex justify-center mb-4">
              <FaDonate className="text-5xl text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Make a Donation</h3>
            <p className="text-gray-600 mt-2">
              Donate online securely or visit one of our collection points for in-kind donations.
            </p>
          </div>

          {/* Step 3 */}
          <div className="card bg-white shadow-lg p-6 rounded-xl">
            <div className="flex justify-center mb-4">
              <FaMapMarkerAlt className="text-5xl text-primary" />
            </div>
            <h3 className="text-2xl font-semibold text-gray-800">Find Collection Points</h3>
            <p className="text-gray-600 mt-2">
              Drop off donations at our centers located across different divisions.
            </p>
          </div>
        </div>

        {/* Supported Divisions */}
        <div className="mt-12">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">🌍 Supported Divisions</h3>
          <p className="text-gray-600 text-lg mb-6">We operate across the following regions:</p>
          <div className="flex flex-wrap justify-center gap-4">
            {["Dhaka", "Chattogram", "Rajshahi", "Khulna", "Sylhet", "Barishal", "Mymensingh", "Rangpur"].map((division, index) => (
              <Link key={index} className="badge badge-primary text-lg px-4 py-2">
                {division}
              </Link>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-10">
          <Link to="/donate" className="btn btn-primary text-lg px-6 py-3 rounded-lg shadow-md">
            Start Donating Now
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
