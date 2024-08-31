'use client'

import { useState } from 'react';
import Logo from "@/components/Navbar/_components/logo";
import { NavigationMenuBar } from "@/components/Navbar/_components/menu";
import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navbarClasses = `
    px-4 h-20 sticky top-0 inset-x-0 w-full bg-background/40 backdrop-blur-lg border-b border-border z-50`;

  return (
    <div className={navbarClasses}>
      <div className="flex items-center md:justify-center justify-between gap-20">
        <Logo />
        
        <div className="hidden md:flex md:items-center md:gap-20">
          <NavigationMenuBar />
          <div className="flex items-center gap-4">
            <Link href="" className={buttonVariants({ size: "sm", variant: "ghost" })}>
              Contact
            </Link>
            <Link href="" className={buttonVariants({ size: "lg" })}>
              Login
            </Link>
          </div>
        </div>

        <div className="md:hidden flex items-center">
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle Menu"
            className="p-2 text-white"
          >
            {isMenuOpen ? (
              <XMarkIcon className="w-6 h-6" />
            ) : (
              <Bars3Icon className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed inset-0 bg-background/90 backdrop-blur-lg border-b border-border z-50 md:hidden transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="relative p-4 h-full">
          <button 
            onClick={() => setIsMenuOpen(false)}
            aria-label="Close Menu"
            className="absolute top-4 right-4 p-2 text-white"
          >
            <XMarkIcon className="w-6 h-6" />
          </button>
          
          <NavigationMenuBar />
          <div className="flex flex-col gap-4 mt-16">
            <Link href="" className={buttonVariants({ size: "sm", variant: "ghost" })}>
              Contact
            </Link>
            <Link href="" className={buttonVariants({ size: "lg" })}>
              Login
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
