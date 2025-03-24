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


function NavDisclosure() {
  return (
    <div className="flex flex-col w-full space-y-8">
      <Disclosure as="div" className="mt-10 border-0 border-none">
        <DisclosureButton className="group flex w-full items-center justify-between">
          <span className="text-xl font-semibold text-slate-900">
            What We Do
          </span>
          <ChevronDown className="size-6  group-data-[hover]:fill-slate-500 group-data-[open]:rotate-180" />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 space-y-1 py-2 text-lg font-medium text-slate-900">
          {whatwedo.map((item) => (
            <Link href={item.href} key={item.id}>
              <span className="block rounded-md p-2 hover:bg-gradient-to-b from-muted/50 to-muted">
                {item.title}
              </span>
            </Link>
          ))}
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" className="mt-10 border-0 border-none">
        <DisclosureButton className="group flex w-full items-center justify-between">
          <span className="text-xl font-semibold text-slate-900">
            Who We Are
          </span>
          <ChevronDown className="size-6  group-data-[hover]:fill-slate-500 group-data-[open]:rotate-180" />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 space-y-1 py-2 text-lg font-medium text-slate-900">
          {Whoweare.map((item) => (
            <Link href={item.href} key={item.id}>
              <span className="block rounded-md p-2 hover:bg-gradient-to-b from-muted/50 to-muted">
                {item.title}
              </span>
            </Link>
          ))}
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" className="mt-10 border-0 border-none">
        <DisclosureButton className="group flex w-full items-center justify-between">
          <span className="text-xl font-semibold text-slate-900">
            Get Involved
          </span>
          <ChevronDown className="size-6  group-data-[hover]:fill-slate-500 group-data-[open]:rotate-180" />
        </DisclosureButton>
        <DisclosurePanel className="mt-2 space-y-1 py-2 text-lg font-medium text-slate-900">
          <Link href="/pages/get-involve/donate">
            <span className="block rounded-md p-2 hover:bg-gradient-to-b from-muted/50 to-muted">
              Donate
            </span>
          </Link>
          <Link href="/pages/get-involve/volunteer">
            <span className="block rounded-md p-2 hover:bg-gradient-to-b from-muted/50 to-muted">
              Volunteer
            </span>
          </Link>
          <Link href="/pages/get-involve/careers">
            <span className="block rounded-md p-2 hover:bg-gradient-to-b from-muted/50 to-muted">
              Careers
            </span>
          </Link>
        </DisclosurePanel>
      </Disclosure>
      <Disclosure as="div" className="mt-10 border-0 border-none">
        <DisclosureButton className="group flex w-full items-center justify-between">
          <Link href="/pages/contact-us">
            <span className="text-xl font-semibold text-slate-900">
              Contact us
            </span>
          </Link>
        </DisclosureButton>
      </Disclosure>
      
    </div>
  );
}

export default NavDisclosure;
