import React from 'react';
import Image from 'next/image';

const OurHistory = () => {
  return (
    <section className="bg-gray-100 py-16 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <div>
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Our History</h2>
          <p className="text-gray-600 mb-4">
            Founded in the heart of innovation, our journey began with a vision to create impactful solutions. Over the years, we have expanded our expertise, embracing new challenges and evolving with technology.
          </p>
          <p className="text-gray-600 mb-4">
            Our commitment to excellence and customer satisfaction has driven us to achieve milestones that define our success. We believe in continuous growth and making a positive impact on the world.
          </p>
          <p className="text-gray-600">
            Today, we stand as a testament to perseverance, teamwork, and the passion that fuels our mission. Join us as we continue shaping the future with our innovative solutions.
          </p>
        </div>
        <div className="relative w-full h-64 md:h-96">
          <Image 
            src="/our team.jpg" 
            alt="Our history" 
            layout="fill" 
            objectFit="cover" 
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
};

export default OurHistory;
