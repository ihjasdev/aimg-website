import React from "react";
import Image from "next/image";
import { teamMembers } from "@/constants/ourTeams";

const LeadershipTeam = () => {

  return (
    <div className="max-w-6xl mx-auto px-4 py-16 text-center">
      <h2 className="text-2xl font-bold mb-2 text-indigo-600">Meet our Team</h2>

      <p className="text-lg text-gray-600 mb-16 max-w-3xl mx-auto">
        Teamwork makes the dream work. The implementation of the new leadership
        team has strengthened our commitment to our mission.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 justify-items-center">
        {teamMembers.map((member) => (
          <div
            key={member.id}
            className="flex flex-col items-center transition-all duration-300 hover:translate-y-2"
          >
            <div className="w-40 h-40 rounded-full overflow-hidden mb-6 relative">
              <Image
                width={200}
                height={200}
                src={member.image}
                alt={member.name}
                className="w-full h-full object-contain transition-all duration-500 hover:scale-110"
              />
            </div>

            <h3 className="text-lg font-medium text-gray-900">{member.name}</h3>
            <p className="text-sm text-gray-500 mb-4">{member.position}</p>

            <div className="flex space-x-4">
              <a
                href={member.social.twitter}
                className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
              <a
                href={member.social.linkedin}
                className="text-gray-400 hover:text-gray-500 transition-colors duration-300"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeadershipTeam;
