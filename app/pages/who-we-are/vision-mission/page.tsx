import { Quote } from 'lucide-react';
import React from 'react'

export const metadata = {
  title: "Vission & Mission | AIMGeneration",
  description:
    "A",
};
const goals = [
  {
    name: "Our Vision",
    description:
      "A leader in peacebuilding, research and development, and Centre for Mutual Understanding and social welfare.",
  },
  {
    name: "Our Mission",
    description:
      "AIMG is a center of research-based development. We provide opportunities for conducting research and supporting vulnerable communities in achieving progress and prosperity through robust social welfare systems. We build mutual understanding and harmony among religious and ethnic societies to enhance the nations productivity and competitiveness. We Adopt some of the Sustainable Development Goals (SDGs) to enrich life and provide solutions that support communities.",
  },
];
const VissionMission = () => {
  return (
    <main className="bg-white">
    {/* vision, Mision */}
    <section className="py-8 sm:py-16">
    <div className="mx-auto max-w-3xl px-6 lg:px-8">
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-1">
        {goals.map((goal) => (
          <div key={goal.name} className="rounded-2xl p-8 bg-cyan-50" data-aos="zoom-in-up">
            <div className="flex justify-center pb-4">
              <Quote className="w-8 h-8 text-cyan-500" />
            </div>

            <h3 className="text-5xl font-bold text-center bg-gradient-to-r from-cyan-700 to-cyan-300 bg-clip-text text-transparent">
              {goal.name}
            </h3>
            <p className="mt-4 text-slate-600 text-center text-lg">
              {goal.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  </section>
  </main>
  )
}

export default VissionMission