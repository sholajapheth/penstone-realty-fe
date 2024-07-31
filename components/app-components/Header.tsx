"use client";
import { Fragment, useState } from "react";
import { Dialog, Disclosure, Popover, Transition } from "@headlessui/react";
import { useRouter } from "next/navigation";
import { TbVaccine } from "react-icons/tb";
import { FaGripLines } from "react-icons/fa6";
import {
  IoChevronDownCircleOutline,
  IoChevronDownOutline,
  IoCloseCircle,
} from "react-icons/io5";
import { CgChevronDown } from "react-icons/cg";
import Image from "next/image";
import Link from "next/link";
// import { classNames as hydrateClassNames } from "classnames";

const products = [
  {
    name: "Explore our listings",
    description: "Extra information here",
    href: "#",
    icon: "/home-location.png",
    bg: "bg-[#FFD55B]",
  },
  {
    name: "Rent out property",
    description: "Extra information here",
    href: "#",
    icon: "/home-upload.png",
    bg: "bg-[#5BFFFF]",
  },
  {
    name: "Manage your space",
    description: "Extra information here",
    href: "#",
    icon: "/grid-circle.png",
    bg: "bg-[#5EFF5B]",
  },
  {
    name: "Improve your property",
    description: "Extra information here",
    href: "#",
    icon: "/grid.png",
    bg: "bg-[#FF5BA9]",
  },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const router = useRouter();

  return (
    <header className="bg-white">
      <div className="flex justify-center">
        <nav
          className="flex items-center justify-between py-6 lg:py-8 md:w-[85%] max-w-[1200px] w-[90%]"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Pentstone</span>
              <Image
                src={"/logo.svg"}
                alt="penstone-logo"
                height={90}
                width={150}
              />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <FaGripLines className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <Popover.Group className="hidden lg:flex lg:gap-x-12">
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                For Developers
                <IoChevronDownOutline
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-lg overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4 flex justify-between flex-wrap">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group w-[50%] relative flex items-center gap-x-2 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div
                          className={classNames(
                            "flex h-11 w-11 flex-none items-center justify-center rounded-lg",
                            item.bg
                          )}
                        >
                          <Image
                            src={item.icon}
                            width={20}
                            height={20}
                            alt=""
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Popover className="relative">
              <Popover.Button className="flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900">
                For Investors
                <IoChevronDownOutline
                  className="h-5 w-5 flex-none text-gray-400"
                  aria-hidden="true"
                />
              </Popover.Button>
              <Transition
                as={Fragment}
                enter="transition ease-out duration-200"
                enterFrom="opacity-0 translate-y-1"
                enterTo="opacity-100 translate-y-0"
                leave="transition ease-in duration-150"
                leaveFrom="opacity-100 translate-y-0"
                leaveTo="opacity-0 translate-y-1"
              >
                <Popover.Panel className="absolute -left-8 top-full z-10 mt-3 w-screen max-w-lg overflow-hidden rounded-3xl bg-white shadow-lg ring-1 ring-gray-900/5">
                  <div className="p-4 flex justify-between flex-wrap">
                    {products.map((item) => (
                      <div
                        key={item.name}
                        className="group w-[50%] relative flex items-center gap-x-2 rounded-lg p-4 text-sm leading-6 hover:bg-gray-50"
                      >
                        <div
                          className={classNames(
                            "flex h-11 w-11 flex-none items-center justify-center rounded-lg",
                            item.bg
                          )}
                        >
                          <Image
                            src={item.icon}
                            width={20}
                            height={20}
                            alt=""
                          />
                        </div>
                        <div className="flex-auto">
                          <Link
                            href={item.href}
                            className="block font-semibold text-gray-900"
                          >
                            {item.name}
                            <span className="absolute inset-0" />
                          </Link>
                          <p className="mt-1 text-gray-600">
                            {item.description}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </Popover.Panel>
              </Transition>
            </Popover>
            <Link
              href="/search"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Find Property
            </Link>
            <Link
              href="/blog"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Blog
            </Link>
          </Popover.Group>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end items-center gap-4">
            <Link
              href="#"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Agent Log in
            </Link>
            <Link
              href="/contact_us"
              className="text-sm  leading-6 px-4 py-2 text-white font-bold hover:scale-95 ease-in-out transition-all duration-300 rounded-md bg-primary cursor-pointer"
            >
              Get in touch <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </nav>
      </div>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Penstone</span>
              <Image
                src={"/logo.png"}
                alt="penstone-logo"
                height={90}
                width={150}
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <IoCloseCircle className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        For Developers
                        <IoChevronDownOutline
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Disclosure as="div" className="-mx-3">
                  {({ open }) => (
                    <>
                      <Disclosure.Button className="flex w-full items-center justify-between rounded-lg py-2 pl-3 pr-3.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50">
                        For Investors
                        <IoChevronDownOutline
                          className={classNames(
                            open ? "rotate-180" : "",
                            "h-5 w-5 flex-none"
                          )}
                          aria-hidden="true"
                        />
                      </Disclosure.Button>
                      <Disclosure.Panel className="mt-2 space-y-2">
                        {[...products].map((item) => (
                          <Disclosure.Button
                            key={item.name}
                            as="a"
                            href={item.href}
                            className="block rounded-lg py-2 pl-6 pr-3 text-sm font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                            onClick={() => setMobileMenuOpen(false)}
                          >
                            {item.name}
                          </Disclosure.Button>
                        ))}
                      </Disclosure.Panel>
                    </>
                  )}
                </Disclosure>
                <Link
                  href="/search"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Find Property
                </Link>
                <Link
                  href="/blog"
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Blog
                </Link>
              </div>
              <div className="py-6">
                <Link
                  href="#"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Agent Log in
                </Link>
                <Link
                  href="/contact_us"
                  className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 mt-2 bg-primary text-white hover:text-primary hover:bg-gray-50 transition-all duration-300 ease-out"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  Get in touch
                </Link>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
