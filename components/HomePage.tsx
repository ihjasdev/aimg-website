"use client";
import Link from "next/link";
import React from "react";
import { Carousel, CarouselContent, CarouselItem } from "./ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { carouselImages, focusAreas } from "@/constants/home";

const HomePage = () => {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <main className="bg-white">
      <section className="relative inset-0 bg-gradient-to-br from-cyan-200 to-cyan-800 mx-3 sm:mx-4 lg:mx-16 mt-4 sm:mt-6 lg:mt-8 rounded-2xl sm:rounded-3xl overflow-hidden">
        <div className="absolute inset-0 bg-cyan-100 opacity-40">
          {/* Shadcn Carousel Component */}
          <div className="relative w-full h-full">
            <Carousel
              plugins={[plugin.current]}
              onMouseEnter={plugin.current.stop}
              onMouseLeave={plugin.current.reset}
              className="w-full"
            >
              <CarouselContent>
                {carouselImages.map((image, index) => (
                  <CarouselItem key={index} className="md:basis-1/1">
                    <div className="relative w-full h-[300px] sm:h-[400px] md:h-[400px] lg:h-[550px]">
                      <Image
                        src={image.src}
                        alt={image.alt}
                        fill
                        className="object-cover"
                        priority={index === 0}
                      />
                    </div>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>
        </div>

        {/* Content overlay - Update positioning and padding */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-8 sm:py-12 md:py-16 lg:py-24">
          <div className="text-center ">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900 max-w-4xl mx-auto">
              Empowering Communities, Inspiring Generations.
            </h1>
            <p className="mt-3 sm:mt-4 md:mt-6 text-sm sm:text-base md:text-lg lg:text-xl text-white max-w-2xl mx-auto px-2 sm:px-0">
              At AIMG, we believe in creating a brighter future through
              education, social welfare, and peacebuilding. By uplifting
              communities and nurturing young minds, we strive to inspire
              lasting change for generations to come.
            </p>
            <div className="mt-6 sm:mt-8 md:mt-10">
              <Link
                href="/pages/donate-now"
                className="inline-flex items-center justify-center rounded-lg bg-cyan-600 px-4 sm:px-5 py-2 sm:py-2.5 text-sm sm:text-base font-medium text-white shadow-sm hover:bg-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2 transition-colors"
              >
                Donate Now
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font" data-aos="fade-up">
        <div className="container mx-auto flex px-12 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded-xl"
              alt="hero"
              src="/intro.jpg"
              width="720"
              height="600"
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              About Ambitious Institution for Moral Generation(AIMG)
            </h1>
            <p className="mb-8 leading-relaxed ">
              The Ambitious Institution for Moral Generation (AIMG) is a dynamic
              civil society organization based in Sri Lanka, committed to
              building a just, inclusive, and peaceful society. We were founded
              on the strong belief that empowering communities and strengthening
              institutions are essential to achieve good governance, human
              rights protection, sustainable peace, and inclusive development.
              At AIMG, we recognize that Sri Lanka&apos;s path to reconciliation and
              progress must be rooted in democratic values, institutional
              accountability, and social justice particularly for marginalized
              and vulnerable populations. Our work spans the grassroots to the
              policy level, engaging with communities, public institutions, and
              legal systems to bring about meaningful change. Our mission is to
              promote civic consciousness, protect fundamental rights, and build
              the capacity of individuals and institutions to foster a society
              where every person—regardless of gender, ethnicity, or
              religion can realize their full potential.
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
          <h2
            data-aos="fade-right"
            className="text-xl sm:text-2xl lg:text-3xl font-bold text-slate-900 mb-6 sm:mb-8 lg:mb-12 px-2 sm:px-0 "
          >
            Our Focus Area
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6">
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
