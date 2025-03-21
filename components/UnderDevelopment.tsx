// components/UnderDevelopment.jsx
import React from "react";
import Link from "next/link";

const UnderDevelopment = ({
  title = "Under Development",
  message = "We're working hard to bring you something amazing!",
  contactEmail = "ihjasdev@gmail.com",
  estimatedCompletion = "soon",
}) => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-gray-50 to-gray-100 p-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
        {/* Construction Icon */}
        <div className="mx-auto mb-6 w-24 h-24 flex items-center justify-center bg-yellow-100 rounded-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-12 w-12 text-yellow-600"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
            />
          </svg>
        </div>

        {/* Title */}
        <h1 className="text-3xl font-bold text-gray-800 mb-4">{title}</h1>

        {/* Animation for "Building in Progress" */}
        <div className="mb-4 flex justify-center">
          <div className="flex space-x-1">
            {["Building", "in", "Progress"].map((word, idx) => (
              <span key={idx} className="font-semibold text-blue-600">
                {word}&nbsp;
              </span>
            ))}
            <span className="flex space-x-1">
              {[0, 1, 2].map((dot, idx) => (
                <span
                  key={idx}
                  className="animate-bounce text-blue-600 font-bold"
                  style={{ animationDelay: `${idx * 200}ms` }}
                >
                  .
                </span>
              ))}
            </span>
          </div>
        </div>

        {/* Message */}
        <p className="text-gray-600 mb-6">{message}</p>

        {/* Estimated Completion */}
        <div className="mb-6">
          <p className="text-sm text-gray-500">
            Estimated completion:{" "}
            <span className="font-medium">{estimatedCompletion}</span>
          </p>
        </div>

        {/* Contact & Return Home */}
        <div className="space-y-4">
          <p className="text-sm text-gray-600">
            Questions? Reach out to us at{" "}
            <a
              href={`mailto:${contactEmail}`}
              className="text-blue-600 font-medium hover:text-blue-800"
            >
              {contactEmail}
            </a>
          </p>

          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-2 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700"
          >
            Return Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnderDevelopment;
