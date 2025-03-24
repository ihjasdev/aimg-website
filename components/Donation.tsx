import Image from "next/image";
import React from "react";

const donationDetails = [
  {
    title: "Account Name",
    subtitle: "Ambitious Institution for Moral Generation",
    icon: "👤"
  },
  {
    title: "Account Number",
    subtitle: "001 0470914 001",
    icon: "🔢"
  },
  {
    title: "Bank Name",
    subtitle: "Amana Bank PLC",
    icon: "🏦"
  },
  {
    title: "Branch",
    subtitle: "Kinniya",
    icon: "📍"
  },
  {
    title: "Address",
    subtitle: "486, Galle Road, Colombo -03, Sri Lanka",
    icon: "📮"
  },
  {
    title: "BIC/SWIFT",
    subtitle: "AMNALKLX",
    icon: "🌐"
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" >
            {/* Donation Information */}
            <Image
              width={460}
              height={500}
              alt="Donation Image"
              className="object-cover object-center h-full w-full rounded-2xl"
              src="/donation.jpg"
              data-aos="zoom-in-right"
            />

            {/* Bank details Form */}
            <div className="bg-gray-50 rounded-2xl p-6 sm:p-8 shadow-sm">
              <h2 className="text-2xl font-bold text-center mb-8 text-slate-900">Bank Details</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {donationDetails.map((detail) => (
                  <div
                    key={detail.title}
                    className="bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    data-aos="zoom-in-up"
                  >
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-2xl">{detail.icon}</span>
                      <h3 className="text-sm font-medium text-gray-500">
                        {detail.title}
                      </h3>
                    </div>
                    <p className="text-slate-900 font-semibold break-words">
                      {detail.subtitle}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default page;
