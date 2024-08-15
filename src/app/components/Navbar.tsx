'use client';
import React, { useState } from "react";
import { IconHome, IconMessage, IconUser, IconMenu, IconX } from "@tabler/icons-react";
import { FloatingNav } from "./ui/floating-navbar";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "/" },
    { name: "Product", link: "/product" },
    { name: "Resources", link: "/resources" },
    { name: "Pricing", link: "/pricing" },
  ];

  return (
    <div className="relative w-full">
    
      <div className="hidden lg:block">
        <FloatingNav navItems={navItems} />
      </div>

      
      <div className="lg:hidden flex justify-between items-center px-4 ">
        <p className="text-[22px]" > <span className="text-[#7F56D9]" >N</span>AV</p>
        <button
          onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
          className="p-4 text-gray-700"
        >
          {isMobileMenuOpen ? (
            <IconX size={24} />
          ) : (
            <IconMenu size={24} />
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white shadow-lg">
            <ul className="flex flex-col items-center p-4">
              {navItems.map((item) => (
                <li key={item.name} className="my-2">
                  <a href={item.link} className="text-gray-700 hover:text-gray-900">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex justify-center items-center  gap-4" >
            <button className="text-[#7F56D9] font-bold bg-[#F9F5FF] border-[#7F56D9] border-[1px] p-2 px-3 rounded-lg " >Log in</button>
            <button className="text-white font-bold bg-[#7F56D9] p-2 px-3 rounded-lg"> Sign up</button>
        </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default Navbar;
