"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/logo/logo1.png";

import NavItem from "@/components/navigation/NavDropDown";

const navItems = [
  {
    label: "Residential",
    links: [
      { label: "All Residential Doors", href: "/residential-garage-doors" },
      { label: "Clopay", href: "/residential/insulated" },
      { label: "CHI", href: "/residential/CHI" },
      { label: "Haas", href: "/residential/HAAS" },
      { label: "Amaar", href: "/residential/AMAAR" },
    ],
  },
  {
    label: "Commercial",
    links: [
      { label: "All Commercial Doors", href: "/commercial-garage-doors" },
      { label: "Clopay", href: "/residential/insulated" },
      { label: "CHI", href: "/residential/CHI" },
      { label: "Haas", href: "/residential/HAAS" },
      { label: "Amaar", href: "/residential/AMAAR" },
    ],
  },
  {
    label: "Operators",
    links: [
      { label: "All LiftMaster Products", href: "/Liftmaster" },
      { label: "Operators", href: "/Liftmaster/Operators" },
      { label: "Accessories", href: "/Liftmaster/accessories" },
    ],
  },
  {
    label: "Springs",
    links: [
      { label: "Torsion Springs", href: "/springs/torsion" },
      { label: "Extension Springs", href: "/springs/extension" },
    ],
  },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < 10) {
        setIsVisible(true);
      } else if (currentScrollY < lastScrollY.current) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={` w-full z-20 top-0 transition-transform duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-center mx-auto p-3 text-text-main  backdrop-blue-lg">
        {/* Desktop menu */}
        <div className="hidden md:block">
          <ul className="flex items-center gap-10 lg:gap-20">
            {navItems.map((item) => (
              <NavItem key={item.label} label={item.label} links={item.links} />
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out flex items-center  justify-between ${
          isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-4 p-4  ">
          <li className="">
            <Link
              href="/residential"
              className="block text-red-main hover:text-red-main py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Residential Doors
            </Link>
          </li>
          <li className="border-b border-gray-300">
            <Link
              href="/commercial"
              className="block text-red-main hover:text-red-main py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Commercial Doors
            </Link>
          </li>
          <li className="border-b border-gray-300">
            <Link
              href="/operators"
              className="block text-red-main hover:text-red-main py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Operators
            </Link>
          </li>
          <li className="border-b border-gray-300">
            <Link
              href="/contact"
              className="block text-red-main hover:text-red-main py-2"
              onClick={() => setIsMenuOpen(false)}
            >
              Order Online
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
