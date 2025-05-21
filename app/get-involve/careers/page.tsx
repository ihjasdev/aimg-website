'use client'

import Link from "next/link";
import React from "react";
import { careerPosts } from "@/constants/careers";
import Image from "next/image";

const CareersPage = () => {
  // const careerPosts = await getCareerPosts();

  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative mx-3 sm:mx-4 lg:mx-16 mt-4 sm:mt-6 lg:mt-8 rounded-2xl sm:rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-200 to-cyan-800" />
        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-6 sm:py-16 lg:py-24">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl mx-auto">
              Join Our Mission
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
              Be part of a team dedicated to making positive changes in our
              community. Discover opportunities to grow, learn, and make a
              difference.
            </p>
          </div>
        </div>
      </section>
      {/* Career Posts Grid  */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerPosts.map((post) => (
              <Link
                href={`/careers/${post.id}`}
                key={post.id}
                className="group relative bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300"
              >
                <div className="aspect-[16/10] relative overflow-hidden">
                  <Image
                    src={post.src}
                    alt={post.title}
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    fill
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 text-xs font-medium bg-cyan-100 text-cyan-800 rounded-full">
                      {post.type}
                    </span>
                    <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full">
                      {post.location}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-cyan-600 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between pt-4 border-t border-slate-100">
                    <span className="text-sm text-gray-500">
                      Deadline: {post.deadline}
                    </span>
                    <span className="text-cyan-600 font-medium text-sm group-hover:translate-x-1 transition-transform duration-200">
                      Learn More →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {careerPosts.length === 0 && (
        <div className="text-center py-12 bg-slate-50 rounded-2xl">
          <h3 className="text-xl font-semibold text-slate-900 mb-2">
            No Current Openings
          </h3>
          <p className="text-slate-600">
            Please check back later for new opportunities or send us your CV for
            future consideration.
          </p>
        </div>
      )}
    </main>
  );
};

export default CareersPage;
