"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Dialog, DialogPanel } from "@headlessui/react";
import { Menu, X } from "lucide-react";
import { NavMenu } from "./NavMenu";
import NavDisclosure from "./NavDisclosure";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky inset-x-0 top-0 z-50 bg-white border-b">
      <nav className="mx-auto max-w-7xl flex items-center justify-between px-3 sm:px-4 py-3 sm:py-4 lg:px-8">
        <div className="flex lg:flex-1">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              width={212}
              height={74}
              className="w-24 sm:w-32 lg:w-[180px] h-auto"
              alt="logo"
            />
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700"
          >
            <span className="sr-only">Open main menu</span>
            <Menu className="h-5 w-5 sm:h-6 sm:w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-8">
          <NavMenu />
        </div>
        {/* Get a Demo */}
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          <Link
            href="/pages/donate-now"
            className="rounded-md bg-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-cyan-500 transition-colors"
          >
            Donate Now
          </Link>
        </div>
      </nav>
      <Dialog
        as="div"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50 bg-black/20 backdrop-blur-sm" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-4 sm:px-6 py-4 sm:py-6 sm:max-w-sm">
          <div className="flex items-center justify-between">
            <Link
              href="/"
              className="flex items-center gap-2 text-lg font-semibold md:text-base"
            >
              <Image src="/logo.png" width={137} height={56} alt="logo" />
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-slate-700"
            >
              <span className="sr-only">Close menu</span>
              <X aria-hidden="true" className="h-6 w-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6">
              <NavDisclosure />
              {/* Get a Demo */}
              <div className="py-8 border-t">
                <Link
                  href="/pages/donate-now"
                  className="inline-block w-full rounded-md bg-cyan-600 px-6 py-3 text-base font-semibold text-white shadow-sm hover:bg-cyan-500 transition-colors text-center"
                >
                  Donate Now
                </Link>
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}