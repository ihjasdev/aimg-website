import Link from "next/link";
import Image from "next/image";
import { navigation } from "@/constants/footernavigation";

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
                  className="text-slate-400 hover:text-slate-100"
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
                    className="text-slate-400 hover:text-slate-100"
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
                    className="text-slate-400 hover:text-slate-100"
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
            <p className="text-slate-400 text-sm">
              <strong className="text-slate-200">A/c Name:</strong> Ambitious
              Institution for Moral Generation
              <br />
              <strong className="text-slate-200">A/c No:</strong> 001 0470914
              001
              <br />
              <strong className="text-slate-200">Bank:</strong> Amana Bank PLC
              <br />
              <strong className="text-slate-200">Branch:</strong> Kinniya
            </p>
          </div>
        </div>
        {/* Copyright Section */}
        <div className="mt-12 sm:mt-16 lg:mt-24 pt-3 sm:pt-4 border-t border-slate-400">
          <p className="text-xs sm:text-sm leading-5 text-slate-400 text-center">
            &copy; {new Date().getFullYear()} AIMG. All rights reserved.
            Developed by
            <Link href="https://www.linkedin.com/in/ihjasabdullah/" className="mx-2 text-slate-400 underline">
              IhjasDev
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
