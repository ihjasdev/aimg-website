import Link from "next/link";
import { title } from "process";
import React from "react";
import { careerPosts } from "@/constants/careers";
// import { collection, getDocs } from "firebase/firestore";
// import { db } from "@/lib/firebaseConfig";

// Define the type for career posts
interface CareerPost {
  id: string;
  title: string;
  description: string;
  location: string;
  type: string;
  deadline: string;
  imageUrl: string;
}

// // Fetch career posts from Firestore
// async function getCareerPosts() {
//   const careerPosts: CareerPost[] = [];
//   const querySnapshot = await getDocs(collection(db, "careers"));
//   querySnapshot.forEach((doc) => {
//     careerPosts.push({ id: doc.id, ...doc.data() } as CareerPost);
//   });
//   return careerPosts;
// }


const CareersPage = () => {
  // const careerPosts = await getCareerPosts();

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
              Join Our Team
            </h1>
            <p className="mt-4 sm:mt-6 text-base sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto">
              Be part of our mission to make a difference. Explore opportunities
              to grow and contribute to meaningful causes.
            </p>
          </div>
        </div>
      </section>

      {/* Career Posts Grid */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {careerPosts.map((post) => (
              <div
                key={post.id}
                className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow"
              >
                <div className="h-48 relative">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-full h-full object-cover"
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
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 mb-4 line-clamp-3">
                    {post.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">
                      Deadline: {post.deadline}
                    </span>
                    <Link
                      href={`/careers/${post.id}`}
                      className="text-cyan-600 hover:text-cyan-700 font-medium text-sm"
                    >
                      Learn More →
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default CareersPage;
