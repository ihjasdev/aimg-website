import React from "react";
import Image from "next/image";
import Link from "next/link";
import { careerPosts } from "@/constants/careers";

const CareersPage = () => {
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
              Our Contributions
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
              Be part of a team dedicated to making positive changes in our
              community. Discover opportunities to grow, learn, and make a
              difference.
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

      {/* Career Posts Section */}
      <section className="py-16 sm:py-24 px-4 sm:px-6 lg:px-8 mx-3 sm:mx-4 lg:mx-16">
        <div className="max-w-7xl mx-auto">
          {/* Section Title */}
          <div className="text-center mb-12">
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900">
              Our Latest Works
            </h2>
            <p className="mt-4 text-lg text-slate-600">
              Explore our latest contribution to this community.
            </p>
          </div>

          {/* Career Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerPosts.map((post) => (
              <Link
                href={`/careers/${post.id}`}
                key={post.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                {/* Image Container */}
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={post.src}
                    alt={post.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  {/* Location Badge */}
                  <div className="absolute bottom-4 left-4 px-3 py-1 bg-white/90 rounded-full">
                    <span className="text-sm font-medium text-slate-900">
                      {post.location}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-slate-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-slate-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>

                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm text-slate-500">
                      Apply by: {post.deadline}
                    </span>
                    <span className="text-cyan-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* No Positions Notice - Show when no posts available */}
          {careerPosts.length === 0 && (
            <div className="text-center py-12 bg-slate-50 rounded-2xl">
              <h3 className="text-xl font-semibold text-slate-900 mb-2">
                No Current Projects
              </h3>
              <p className="text-slate-600">
                Please check back later for new opportunities or send us your CV
                for future consideration.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
