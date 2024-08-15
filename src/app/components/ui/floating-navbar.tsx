"use client";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";

import Link from "next/link";
import { cn } from "@/lib/utils";

export const FloatingNav = ({
  navItems,
  className,
}: {
  navItems: {
    name: string;
    link: string;
    icon?: JSX.Element;
  }[];
  className?: string;
}) => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current! - scrollYProgress.getPrevious()!;

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={cn(
          "flex   w-[95%] fixed top-10 inset-x-0 mx-auto border border-transparent dark:border-white/[0.2] rounded-xl dark:bg-black bg-white navbar_shadow z-[5000] pr-2 pl-8 py-2  items-center justify-between px-7 space-x-4",
          className
        )}
      >
        <div className="md:text-[40px]" ><span className="text-[#7F56D9]" >N</span>AV<span>B</span>AR</div>
        <div className="flex gap-5" >
        {navItems.map((navItem: any, idx: number) => (
          <Link
            key={`link=${idx}`}
            href={navItem.link}
            className={cn(
              "relative dark:text-neutral-50 items-center flex space-x-1 text-black font-bold dark:hover:text-neutral-300 text-[16px] hover:text-neutral-500"
            )}
          >
            
            {
                navItem.name === "Product" || navItem.name === 'Resources' ? (<div className="flex justify-center items-center gap-1" > <span className="hidden sm:block text-sm">{navItem.name}</span> <IoIosArrowDown/> </div>) : (<span className="hidden sm:block text-sm">{navItem.name}</span>)
            }
          </Link>
        ))}
        </div>
        <div className="flex gap-4" >
            <button className="text-[#7F56D9] font-bold bg-[#F9F5FF] border-[#7F56D9] border-[1px] p-2 px-3 rounded-lg " >Log in</button>
            <button className="text-white font-bold bg-[#7F56D9] p-2 px-3 rounded-lg"> Sign up</button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
