import Image from "next/image";
import React from "react";

const donationDetails = [
  {
    title: "Account Name :",
    subtitle: "Ambitious Institution for Moral Generation",
  },
  {
    title: "Account Number :",
    subtitle: "001 0470914 001",
  },
  {
    title: "Bank Name :",
    subtitle: "Amana Bank PLC",
  },
  {
    title: "Branch :",
    subtitle: "Kinniya",
  },
  {
    title: "Address :",
    subtitle: "486, Galle Road, Colombo -03, Sri Lanka",
  },
  {
    title: "BIC/SWIFT :",
    subtitle: "AMNALKLX",
  },
];

const page = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative mx-3 sm:mx-4 lg:mx-16 mt-4 sm:mt-6 lg:mt-8 rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-cyan-800" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-12 sm:py-16 lg:py-28">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl mx-auto">
              Donate
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
              What you&apos;re about to do could change a life forever. Whether
              you decide to make a one-off donation or invest in its lifelong
              legacy. Help us make a difference today.
            </p>
          </div>
        </div>
      </section>
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Contact Information */}
            <Image
              width={460}
              height={500}
              alt="feature"
              className="object-cover object-center h-full w-full rounded-2xl"
              src="/donation.jpg"
            />

            {/* Contact Form */}
            <div className="bg-white rounded-2xl p-8">
              {donationDetails.map((donationDetail) => (
                <div
                  key={donationDetail.title}
                  className="text-xl font-semibold text-slate-900 mb-6 text-center"
                >
                  <h1>{donationDetail.title}</h1>
                  <strong>{donationDetail.subtitle}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            {donationDetails.map((donationDetail) => (
              <div className="p-2 sm:w-1/2 w-full">
                <div className="bg-gray-100 p-4 rounded-lg shadow-sm">
                  <svg
                    fill="none"
                    stroke="currentColor"
                    strokeLinejoin="round"
                    strokeLinejoin="round"
                    strokeWidth="3"
                    className="text-indigo-500 w-6 h-6 flex-shrink-0 mr-4"
                    viewBox="0 0 24 24"
                  >
                    <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
                    <path d="M22 4L12 14.01l-3-3"></path>
                  </svg>
                  <p className="text-xs text-gray-500 uppercase font-medium">
                    {donationDetail.title}
                  </p>
                  <div className="flex items-center gap-2 mt-1">
                    <p className="text-lg font-semibold text-gray-900">
                      {donationDetail.subtitle}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div> */}
    </main>
  );
};

export default page;
