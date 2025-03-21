"use client";
import Link from "next/link";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const HomePage = () => {
  const focusAreas = [
    {
      id: 1,
      href: "/pages/quality-education",
      img: "/quality-education.jpg",
      title: "Quality Education",
      description:
        "Quality Education is the foundation of sustainable development. We work to ensure that every child has access to quality education, regardless of their background or circumstances.",
    },
    {
      id: 2,
      href: "/pages/peace-and-harmony",
      img: "/peace-harmony.jpg",
      title: "Peace and Harmony",
      description:
        "Promote peaceful and inclusive societies for sustainable development, provide access to justice for all and build effective, accountable and inclusive institutions at all levels.",
    },
    {
      id: 3,
      href: "/pages/youth-empowerment",
      img: "/youth.jpeg",
      title: "Youth Empowerment",
      description:
        "Youth Empowerment is the key to creating a brighter future. We work to empower young people to reach their full potential and become leaders in their communities.",
    },
    {
      id: 4,
      href: "/pages/humanitarian-aid",
      img: "/Humanitarian-Aid.jpeg",
      title: "Humanitarian Aid",
      description:
        "Humanitarian Aid is essential for saving lives and alleviating suffering in times of crisis. We work to provide emergency relief to those affected by conflict, natural disasters, and other emergencies.",
    },
  ];

  // Array of carousel images - replace with your actual image paths
  const carouselImages = [
    {
      src: "/carousel1.jpg",
      alt: "Security dashboard visualization",
    },
    {
      src: "/carousel2.jpg",
      alt: "Zero trust architecture diagram",
    },
    {
      src: "/carousel3.jpg",
      alt: "Identity management solution",
    },
    {
      src: "/carousel4.jpg",
      alt: "Security operations center",
    },
    // {
    //   src: "/carousel5.jpg",
    //   alt: "Security operations center",
    // },
    {
      src: "/carousel6.jpg",
      alt: "Security operations center",
    },
    {
      src: "/carousel7.jpg",
      alt: "Security operations center",
    },
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <main className="bg-white">
      <section className="relative inset-0 bg-gradient-to-br from-cyan-200 to-cyan-800 mx-3 sm:mx-4 lg:mx-16 mt-4 sm:mt-6 lg:mt-8 rounded-2xl sm:rounded-3xl overflow-hidden ">
        <div className="absolute inset-0 bg-cyan-100 opacity-20">
          {/* Shadcn Carousel Component */}
          <div className="relative rounded-2xl sm:rounded-3xl overflow-hidden">
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              className="w-full"
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/1">
                    <div className="rounded-2xl sm:rounded-3xl aspect-video relative">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>
        {/* </div> */}

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl mx-auto">
              Empowering Communities, Inspiring Generations.
            </h1>
            <p className="mt-4 sm:mt-6 text-white sm:text-lg lg:text-xl text-slate-600 max-w-2xl mx-auto px-2 sm:px-0">
              At AIMG, we believe in creating a brighter future through
              education, social welfare, and peacebuilding. By uplifting
              communities and nurturing young minds, we strive to inspire
              lasting change for generations to come.
            </p>
            <div className="mt-8 sm:mt-10">
              <Link
                href="/pages/donate-now"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-color"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0" data-aos="fade-right">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/intro.jpg"
              width="720"
              height="600"
            />
          </div>
          <div data-aos="fade-left" className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Ambitious Institution for Moral Generation
            </h1>
            <p className="mb-8 leading-relaxed text-justify">
              AIMG (Ambitious Institution for Moral Generation) is a nonprofit
              organization in Sri Lanka dedicated to empowering communities
              through education, peacebuilding, and humanitarian aid. With a
              strong focus on social cohesion, youth development, and economic
              empowerment, AIMG collaborates with local and international
              partners to create impactful initiatives. The organization
              actively supports underprivileged students, promotes dialogue
              among diverse communities, and fosters professional growth through
              skill-building programs. Committed to building a better future,
              AIMG continuously works towards uplifting lives and fostering
              positive change across Sri Lanka.
            </p>
            <div className="flex justify-center">
              <Link
                href="/pages/who-we-are/our-history"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-5 sm:px-6 py-2.5 sm:py-3 text-sm sm:text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-color"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/*AIMG Intro */}

      {/* Our Focus Area*/}
      <section className="py-16 sm:py-20 px-3 sm:px-4 lg:px-16">
        <div className="max-w-7xl mx-auto">
          <h2 data-aos="fade-right" className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-0 ">
            Our Focus Area
          </h2>
          <div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6"
            
          >
            {focusAreas.map((focusArea) => (
              <Link
                key={focusArea.id}
                href={focusArea.href || "#"}
                className="w-full max-w-md mx-auto p-4 sm:p-6 lg:p-8 "
                data-aos="zoom-in-right"
              >
                <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300  hover:bg-sky-100 dark:bg-gray-950">
                  <Image
                    src={focusArea.img}
                    alt={focusArea.title}
                    width={600}
                    height={400}
                    className="w-full h-64 object-cover"
                    style={{ aspectRatio: "600/400", objectFit: "cover" }}
                  />
                  <div className="p-4 space-y-2">
                    <h3 className="text-xl font-semibold text-center ">
                      {focusArea.title}
                    </h3>
                    <p className="text-gray-500 dark:text-gray-400 text-center">
                      {focusArea.description}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default HomePage;
