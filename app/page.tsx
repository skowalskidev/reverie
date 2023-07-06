"use client";

import React, { useState } from 'react';

export default function Home() {
  const [estimate, setEstimate] = useState({
    developerHours: 0,
    hourlyRate: 0,
    designerHours: 0,
    designerHourlyRate: 0,
    developmentCost: 0,
    designerCost: 0,
    hostingCost: 0,
    cdnCost: 0,
    ourFee: 0,
    totalEstimate: 0,
  });

  // Function to calculate the estimate using AI
  const calculateEstimate = () => {
    // Replace this placeholder logic with your actual AI estimation implementation
    const developerHours = 40; // Placeholder value
    const hourlyRate = 50; // Placeholder value
    const designerHours = 20; // Placeholder value
    const designerHourlyRate = 60; // Placeholder value
    const developmentCost = developerHours * hourlyRate;
    const designerCost = designerHours * designerHourlyRate;
    const hostingCost = 100; // Placeholder value
    const cdnCost = 50; // Placeholder value
    const ourFee = (developmentCost + designerCost + hostingCost + cdnCost) * 0.04;
    const totalEstimate = developmentCost + designerCost + hostingCost + cdnCost + ourFee;

    setEstimate({
      developerHours,
      hourlyRate,
      designerHours,
      designerHourlyRate,
      developmentCost,
      designerCost,
      hostingCost,
      cdnCost,
      ourFee,
      totalEstimate,
    });
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1 className="text-4xl font-bold text-center">
        100% transparent web development
      </h1>

      <section className="my-12">
        <h2 className="text-2xl font-bold">Get an AI Estimate</h2>
        <p>Fill out the form below to get an instant AI estimate:</p>
        <form>
          {/* Include relevant form fields for project details */}
          <button
            type="button"
            className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            onClick={calculateEstimate}
          >
            Get Estimate
          </button>
        </form>
        {estimate.developerHours > 0 && estimate.hourlyRate > 0 && (
          <div>
            <p>
              Developer Hours: {estimate.developerHours} hours
              <br />
              Developer Hourly Rate: ${estimate.hourlyRate}
              <br />
              Designer Hours: {estimate.designerHours} hours
              <br />
              Designer Hourly Rate: ${estimate.designerHourlyRate}
              <br />
              Development Cost: ${estimate.developmentCost}
              <br />
              Designer Cost: ${estimate.designerCost}
              <br />
              Hosting Cost: ${estimate.hostingCost}
              <br />
              CDN Cost: ${estimate.cdnCost}
              <br />
              Our Fee (4%): ${estimate.ourFee}
              <br />
              Total Estimate: ${estimate.totalEstimate}
            </p>
          </div>
        )}
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold">How It Works</h2>
        <ol className="list-decimal list-inside">
          <li>Specify your requirements and project details</li>
          <li>Approve the design proposal provided by our team</li>
          <li>Development commences based on the approved design</li>
        </ol>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold">Why Choose Us</h2>
        <ul className="list-disc list-inside">
          <li>No time wasted on lengthy phone calls</li>
          <li>Efficient communication via messages to streamline operations</li>
          <li>Reduced overhead costs allow us to pass on savings to our clients</li>
          <li>Expertise and industry knowledge applied to deliver exceptional results</li>
        </ul>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold">For Clients</h2>
        <ul className="list-disc list-inside">
          <li>Create high-quality websites that leave a lasting impression</li>
          <li>Benefit from our transparent rates with no hidden fees</li>
          <li>Get fair and competitive pricing, ensuring you receive the best value</li>
        </ul>
      </section>

      <section className="my-12">
        <h2 className="text-2xl font-bold">For Developers and Designers</h2>
        <ul className="list-disc list-inside">
          <li>Join us for opportunities to work on top-notch projects</li>
          <li>Fulfill your passion for delivering high-quality websites</li>
          <li>Enjoy transparent rates and fair compensation for your expertise</li>
          <li>Experience efficient communication and reduced overhead</li>
        </ul>
      </section>
    </main>
  );
}
