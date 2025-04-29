import Link from "next/link";
import React from "react";
import Image from "next/image";

const EconomicEmpowerment = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative mx-3 sm:mx-4 lg:mx-16 mt-4 sm:mt-6 lg:mt-8 rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-cyan-800" />

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl mx-auto">
              Economic Empowerment
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
              Empowering Communities, Transforming Futures - Building Resilience
              Through Opportunity.
            </p>
            <div className="mt-8 sm:mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/donate-now"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>
      {/* Features Section */}
      <section className="mx-3 sm:mx-4 lg:mx-16 mt-4 sm:mt-6 lg:mt-8 rounded-2xl sm:rounded-3xl">
        <div className="relative isolate overflow-hidden bg-white px-6 py-24 sm:py-32 lg:overflow-visible lg:px-0">
          <div className="absolute inset-0 -z-10 overflow-hidden">
            <svg
              aria-hidden="true"
              className="absolute top-0 left-[max(50%,25rem)] h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
            >
              <defs>
                <pattern
                  x="50%"
                  y={-1}
                  id="e813992c-7d03-4cc4-a2bd-151760b470a0"
                  width={200}
                  height={200}
                  patternUnits="userSpaceOnUse"
                >
                  <path d="M100 200V.5M.5 .5H200" fill="none" />
                </pattern>
              </defs>
              <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
                <path
                  d="M-100.5 0h201v201h-201Z M699.5 0h201v201h-201Z M499.5 400h201v201h-201Z M-300.5 600h201v201h-201Z"
                  strokeWidth={0}
                />
              </svg>
              <rect
                fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
                width="100%"
                height="100%"
                strokeWidth={0}
              />
            </svg>
          </div>
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div className="lg:max-w-lg" data-aos="zoom-in-right">
                  <h1 className="mt-2 text-4xl font-semibold tracking-tight text-pretty text-gray-900 sm:text-5xl">
                    Economic Empowerment
                  </h1>
                  <p className="mt-6 text-gray-700 text-justify">
                    We see economic empowerment as a critical step toward
                    justice, dignity, and resilience especially for women and
                    youth from war-affected and economically marginalized
                    communities in Sri Lanka.
                    <br />
                    <br />
                    Our work focuses on building practical skills and creating
                    opportunities that enable individuals to lead sustainable
                    livelihoods. Through tailored training in small business
                    development, digital literacy, and professional
                    competencies, we help participants enter the workforce or
                    establish their own ventures. By promoting innovation and
                    digital inclusion, we connect aspiring entrepreneurs to
                    broader markets and modern tools for growth.
                  </p>
                </div>
              </div>
            </div>
            <div
              className="-mt-12 -ml-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden"
              data-aos="zoom-in-left"
            >
              <Image
                width={400}
                height={400}
                alt="Youth Empowerment"
                src="/youth-empowerment.jpeg"
                className="w-[48rem] max-w-none rounded-xl bg-gray-900 ring-1 shadow-xl ring-gray-400/10 sm:w-[57rem]"
              />
            </div>
            <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
              <div className="lg:pr-4">
                <div
                  className="max-w-xl text-base/7 text-gray-700 lg:max-w-lg text-justify"
                  data-aos="zoom-in-right"
                >
                  <p>
                    AIMG also provides targeted financial support and mentorship
                    to women and youth ready to launch micro or small-scale
                    enterprises. We equip them with the knowledge and confidence
                    to manage resources, make strategic decisions, and build
                    long-term financial independence. Our programs emphasize
                    leadership development and resource control especially for
                    women ensuring they are not just participants, but leaders
                    in the local economy.
                  </p>
                  <p className="mt-8">
                    At the core of our approach is a rights-based framework that
                    recognizes economic participation as a fundamental human
                    right. We raise awareness about economic justice and support
                    individuals in asserting their right to equal access, fair
                    treatment, and sustainable opportunities in the labor
                    market.
                    <br />
                    <br />
                    Through this work, AIMG contributes to reducing
                    vulnerability, fostering local economic development, and
                    enabling communities to shape their own futures with
                    autonomy and pride.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default EconomicEmpowerment;
