"use client";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import {HomeIcon, UserCircleIcon, CodeBracketIcon, ComputerDesktopIcon} from "@heroicons/react/24/outline"

import NavItem from "@/components/navigation/NavDropDown";

const navItems = [
  {
    label: "Home",
    icon: HomeIcon,
    links: [
    
    ],
  },
  {
    label: "About",
    icon: UserCircleIcon,
    links: [
      { label: "All Commercial Doors", href: "/commercial-garage-doors" },
      { label: "Clopay", href: "/residential/insulated" },
      { label: "CHI", href: "/residential/CHI" },
      { label: "Haas", href: "/residential/HAAS" },
      { label: "Amaar", href: "/residential/AMAAR" },
    ],
  },
  {
    label: "Projects",
    icon: CodeBracketIcon,
    links: [
      { label: "All LiftMaster Products", href: "/Liftmaster" },
      { label: "Operators", href: "/Liftmaster/Operators" },
      { label: "Accessories", href: "/Liftmaster/accessories" },
    ],
  },
  {
    label: "Web Design",
    icon: ComputerDesktopIcon,
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
      className="w-[300px]  ml-5 mt-2 rounded-lg h-[99vh] ">
      <div className=" flex flex-col items-start gap-3 p-5">
        {/* Logo */}
        <div className="flex">
          
          <Image src="/images/logo/bcWH.png" height={75} width={75} alt="Japanese Symbol for reason, principle, and truth"  />
        </div>
        {/* Desktop menu */}
        <div className="hidden md:block">
          <ul className="flex flex-col  gap-5">
            {navItems.map((item) => (
              <NavItem key={item.label} icon={item.icon} label={item.label} links={item.links} />
            ))}
          </ul>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {/* <div
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
      </div> */}
    </nav>
  );
}
