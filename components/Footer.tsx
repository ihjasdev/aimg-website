import Link from "next/link";
import { Facebook, Linkedin, Instagram, Twitter } from "lucide-react";
import Image from "next/image";

const navigation = {
  quickLinks: [
    { name: "FAQ", href: "/#" },
    { name: "Donate", href: "/#" },
    { name: "Volunteer", href: "/#" },
    { name: "Careers", href: "/#" },
  ],
  aimgLinks: [
    { name: "Home", href: "/#" },
    { name: "Our work", href: "/#" },
    { name: "About us", href: "/#" },
    { name: "Contact us", href: "/#" },
  ],
  social: [
    { name: "Facebook", href: "https://facebook.com/", icon: Facebook },
    { name: "LinkedIn", href: "https://linkedin.com/", icon: Linkedin },
    { name: "Instagram", href: "https://instagram.com/", icon: Instagram },
    { name: "Twitter", href: "https://twitter.com/", icon: Twitter },
  ],
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 py-8 sm:py-12 lg:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo Section */}
          <div>
            <Image
              src="/logo.png" // Update with your actual logo path
              alt="AIMG Logo"
              width={150}
              height={100}
            />
            <div className="flex py-5 space-x-4">
            {navigation.social.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-slate-100 hover:text-slate-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                <item.icon className="h-5 w-5" aria-hidden="true" />
              </Link>
            ))}
          </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {navigation.quickLinks.map((item) => (
                <li key={item.name}>
                  <Link 
                    href={item.href}
                    className="text-slate-100 hover:text-slate-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* AIMG Links */}
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">AIMG</h3>
            <ul className="space-y-2">
              {navigation.aimgLinks.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="text-slate-100 hover:text-slate-400"
                  >
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Bank Details */}
          <div>
            <h3 className="text-lg font-semibold text-slate-100 mb-4">
              Bank Details
            </h3>
            <p className="text-slate-100 text-sm">
              <strong>A/c Name:</strong> Ambitious Institution for Moral Generation
              <br />
              <strong>A/c No:</strong> 001 0470914 001
              <br />
              <strong>Bank:</strong> Amana Bank PLC
              <br />
              <strong>Branch:</strong> Kinniya
            </p>
          </div>
        </div>
         {/* Copyright Section */}
         <div className="mt-12 sm:mt-16 lg:mt-24 pt-3 sm:pt-4 border-t border-slate-400">
          <p className="text-xs sm:text-sm leading-5 text-slate-400 text-center">
            &copy; {new Date().getFullYear()} AIMG. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
