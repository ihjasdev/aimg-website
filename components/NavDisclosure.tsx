"use client";
import React from "react";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { whatwedo, Whoweare } from "@/constants/navdisclosure";

// Add the type definition for the props
interface NavDisclosureProps {
  setIsOpen: (value: boolean) => void;
}

function NavDisclosure({ setIsOpen }: NavDisclosureProps) {
  // State to track which section is currently open
  const [openSection, setOpenSection] = React.useState<string | null>(null);

  const handleLinkClick = () => {
    setIsOpen(false);
  };

  const handleDisclosureClick = (section: string) => {
    // If clicking the same section that's open, close it
    // If clicking a different section, open it (and close the previous one)
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="flex flex-col w-full space-y-4">
      <Disclosure 
        as="div" 
        className="mt-4 border-0 border-none"
      >
        <DisclosureButton 
          className="group flex w-full items-center justify-between"
          onClick={() => handleDisclosureClick('whatwedo')}
        >
          <span className="text-xl font-semibold text-slate-900">
            What We Do
          </span>
          <ChevronDown 
            className={`size-6 group-data-[hover]:fill-slate-500 transition-transform duration-200 ${
              openSection === 'whatwedo' ? 'rotate-180' : ''
            }`} 
          />
        </DisclosureButton>
        <DisclosurePanel static>
          <div className={`mt-2 space-y-1 py-2 text-lg font-medium text-slate-900 transition-all duration-200 ${
            openSection === 'whatwedo' ? 'block' : 'hidden'
          }`}>
            {whatwedo.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                className="block rounded-md p-2 hover:bg-gradient-to-b from-muted/50 to-muted"
                onClick={handleLinkClick}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      <Disclosure 
        as="div" 
        className="mt-4 border-0 border-none"
      >
        <DisclosureButton 
          className="group flex w-full items-center justify-between"
          onClick={() => handleDisclosureClick('whoweare')}
        >
          <span className="text-xl font-semibold text-slate-900">
            Who We Are
          </span>
          <ChevronDown 
            className={`size-6 group-data-[hover]:fill-slate-500 transition-transform duration-200 ${
              openSection === 'whoweare' ? 'rotate-180' : ''
            }`} 
          />
        </DisclosureButton>
        <DisclosurePanel static>
          <div className={`mt-2 space-y-1 py-2 text-lg font-medium text-slate-900 transition-all duration-200 ${
            openSection === 'whoweare' ? 'block' : 'hidden'
          }`}>
            {Whoweare.map((item) => (
              <Link
                href={item.href}
                key={item.id}
                className="block rounded-md p-2 hover:bg-gradient-to-b from-muted/50 to-muted"
                onClick={handleLinkClick}
              >
                {item.title}
              </Link>
            ))}
          </div>
        </DisclosurePanel>
      </Disclosure>

      <Disclosure 
        as="div" 
        className="mt-4 border-0 border-none"
      >
        <DisclosureButton 
          className="group flex w-full items-center justify-between"
          onClick={() => handleDisclosureClick('getinvolved')}
        >
          <span className="text-xl font-semibold text-slate-900">
            Get Involved
          </span>
          <ChevronDown 
            className={`size-6 group-data-[hover]:fill-slate-500 transition-transform duration-200 ${
              openSection === 'getinvolved' ? 'rotate-180' : ''
            }`} 
          />
        </DisclosureButton>
        <DisclosurePanel static>
          <div className={`mt-2 space-y-1 py-2 text-lg font-medium text-slate-900 transition-all duration-200 ${
            openSection === 'getinvolved' ? 'block' : 'hidden'
          }`}>
            <Link
              href="/pages/get-involve/donate"
              className="block rounded-md p-2 hover:bg-gradient-to-b from-muted/50 to-muted"
              onClick={handleLinkClick}
            >
              Donate
            </Link>
            <Link
              href="/pages/get-involve/volunteer"
              className="block rounded-md p-2 hover:bg-gradient-to-b from-muted/50 to-muted"
              onClick={handleLinkClick}
            >
              Volunteer
            </Link>
            <Link
              href="/pages/get-involve/careers"
              className="block rounded-md p-2 hover:bg-gradient-to-b from-muted/50 to-muted"
              onClick={handleLinkClick}
            >
              Careers
            </Link>
          </div>
        </DisclosurePanel>
      </Disclosure>

      <Disclosure as="div" className="mt-4 border-0 border-none">
        <Link 
          href="/pages/contact-us"
          onClick={handleLinkClick}
        >
          <span className="text-xl font-semibold text-slate-900">
            Contact us
          </span>
        </Link>
      </Disclosure>
    </div>
  );
}

export default NavDisclosure;
