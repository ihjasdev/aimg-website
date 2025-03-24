'use client';
import React, { useState } from 'react';
import Image from 'next/image';

const AdvisoryBoard = () => {
  const boardMembers = [
    {
      name: "Dr. Nayeem Mohamed Mohideen",
      position: "Director at Fathin Institute for Higher Education",
      image: "/nayeem.jpg"
    },
    {
      name: "Mr. Mohammed Habeebullah, MA",
      position: "Lecturer at South Eastern University of Sri Lanka",
      image: "/habeebullah.jpg"
    },
    {
      name: "Mr.M.S.Mohamed Muheen, LLB",
      position: "Attorney-at-law, Notary Public, Commissioner for Oaths & Company Secretary",
      image: "/mueen.jpg"
    }
  ];

  return (
    <div className="max-w-6xl mx-auto px-4 py-24">
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {boardMembers.map((member, index) => (
          <AdvisoryBoard2 key={index} member={member} />
        ))}
      </div>
    </div>
  );
};

interface Member {
  name: string;
  position: string;
  image: string;
}

const AdvisoryBoard2 = ({ member }: { member: Member }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <div 
      className="flex flex-col items-center transition-all duration-300 ease-in-out transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      data-aos="flip-left"
    >
      <div 
        className={`rounded-lg overflow-hidden mb-4 w-48 h-48 shadow-md transition-all duration-300 ${
          isHovered ? 'shadow-xl' : ''
        }`} 
      >
        <Image 
          width={300}
          height={300}
          src={member.image} 
          alt={member.name} 
          className={`w-full h-full object-cover transition-all duration-500 ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
      </div>
      
      <div className={`transition-all duration-300 ${isHovered ? 'translate-y-1' : ''}`}>
        <h3 className="text-lg font-medium text-center">{member.name}</h3>
        <p 
          className={`text-sm text-center mt-2 transition-all duration-300 ${
            isHovered ? 'text-blue-600' : 'text-gray-600'
          }`}
        >
          {member.position}
        </p>
      </div>
    </div>
  );
};

export default AdvisoryBoard;