import React from "react";
import Link from "next/link";
import { Mail, Phone, MapPin, Linkedin, Facebook } from "lucide-react";
import ContactForm from "@/components/ContactForm";
import Image from "next/image";

export const metadata = {
  title: "Contact Us | AIMGeneration",
  description:
    "Contact US",
};

const ContactPage = () => {
  return (
    <main className="bg-white">
      {/* Hero Section */}
      <section className="relative mx-3 sm:mx-4 lg:mx-16 mt-4 sm:mt-6 lg:mt-8 rounded-2xl sm:rounded-3xl overflow-hidden">
        {/* Background Image with Gradient Overlay */}
        <div className="absolute inset-0">
          <Image
            src="/hero-bg-11.svg"
            alt="Background pattern"
            fill
            className="object-cover opacity-30"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/80 from-10% via-slate-500/50 via-30% to-emerald-500/50 to-90%" />
        </div>

        {/* Content */}
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 py-16 sm:py-20 lg:py-32">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-6xl">
              Contact Us
            </h1>
            <p className="mt-6 text-lg leading-8 text-slate-600">
              We are here to help you with all your cybersecurity and Identity &
              Access Governance needs.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div>
              <div className="space-y-12">
                {/* Address */}
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                    Our Address
                  </h2>
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />
                    <p className="text-slate-600 text-lg">
                      AIMG
                      <br />
                      33, Hijra Street, Kinniya 03
                      <br />
                      Sri Lanka
                    </p>
                  </div>
                </div>

                {/* Contact Details */}
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                    Contact Information
                  </h2>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-4">
                      <Phone className="w-6 h-6 text-cyan-600 flex-shrink-0" />
                      <p className="text-slate-600 text-lg">+94 77 861 2303</p>
                    </div>
                    <div className="flex items-start space-x-4">
                      <Mail className="w-6 h-6 text-cyan-600 mt-1 flex-shrink-0" />
                      <div className="space-y-2 mt-1">
                        <p className="text-slate-600 text-lg">
                          <a
                            href="mailto:info@welfordsystems.co.uk"
                            className="text-cyan-600 hover:text-cyan-700"
                          >
                            info@aimgeneration.org
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Social Links */}
                <div>
                  <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                    Connect With Us
                  </h2>
                  <div className="flex space-x-4">
                    <Link
                      href="https://www.linkedin.com/company/welford-systems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                    >
                      <Linkedin className="w-6 h-6" />
                    </Link>
                    <Link
                      href="https://www.facebook.com/welfordsystems"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 transition-colors"
                    >
                      <Facebook className="w-6 h-6" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 p-8">
              <h2 className="text-2xl font-semibold text-slate-900 mb-6">
                Send us a Message
              </h2>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ContactPage;
