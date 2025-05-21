import Link from "next/link";
import React from "react";
import Image from "next/image";

const GoodGovernance = () => {
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
              Good Governance
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
              Empowering Justice, Ensuring Accountability - Building Transparent
              Governance for All.
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
                    Good Governance
                  </h1>
                  <p className="mt-6 text-gray-700 text-justify">
                    We are committed to advancing transparent, accountable, and
                    inclusive governance in Sri Lanka. We believe that strong
                    public institutions are the cornerstone of justice,
                    equality, and sustainable development—especially for
                    marginalized and underserved communities.
                    <br />
                    <br />
                    Our approach to good governance focuses on strengthening the
                    capacity of public institutions and justice systems to
                    ensure fair, efficient, and people-centered service
                    delivery. We work closely with government authorities, local
                    officials, and judicial actors to foster a culture of
                    accountability and responsiveness—prioritizing the needs of
                    women, youth, and minority groups who often face barriers in
                    accessing public services.
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
                src="/good_governance.jpg"
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
                    AIMG actively engages in efforts to improve legal and policy
                    enforcement by promoting anti-corruption practices,
                    advocating for institutional reform, and closing gaps in
                    public service delivery. We support mechanisms that promote
                    transparency and ensure that governance systems function
                    effectively at both national and local levels.
                  </p>
                  <p className="mt-8">
                    At the community level, we raise awareness and build civic
                    knowledge by educating citizens about their rights and
                    responsibilities. Through grassroots outreach,
                    capacity-building workshops, and public forums, we empower
                    individuals—particularly women and young people—to engage
                    meaningfully in governance processes, influence
                    decision-making, and demand accountability from those in
                    power.
                    <br />
                    <br />
                    By bridging the gap between citizens and institutions, AIMG
                    is helping to build a more democratic, just, and
                    participatory governance landscape in Sri Lanka—where every
                    voice counts and every institution serves the public good.
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

export default GoodGovernance;
