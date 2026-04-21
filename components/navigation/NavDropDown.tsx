// components/layout/NavItem.tsx
"use client";
import { useState, useRef, useEffect, SVGProps, ComponentType } from "react";
import Link from "next/link";

type NavLink = { label: string; href: string };

type Props = {
  label: string;

  links: NavLink[];
};

export default function NavItem({ label,  links }: Props) {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <li ref={ref} className="relative group">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="inline-flex items-center whitespace-nowrap  lg:text-lg cursor-pointer"
      >
        {label}
      </button>
      <span className="absolute bottom-0 left-0 w-0 h-0.5  group-hover:w-full transition-all duration-300" />

      {/* Dropdown */}
      <div 
        className={`absolute top-full left-0  rounded z-50 bg-btn-main text-bg-main p-3 overflow-hidden transition-all duration-600 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col py-2 min-w-[180px]">
          {links.map((link) => (
            <li key={link.href}>
              {/* <p className="h-6 w-6">link.</p> */}
              <Link
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 text-red-main hover:bg-gray-50 whitespace-nowrap "
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </li>
  );
}
