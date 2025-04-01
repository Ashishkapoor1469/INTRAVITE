"use client";
import Link from "next/link";
import Button1 from "@/components/Buttons/button";
import Theme from "@/components/Themecotroller/ThemeController";
import { useEffect, useState } from "react";
export default function NavLg() {
  const [Header, setHeader] = useState(false);
  const scrollHeader = () => {
    if (window.scrollY >= 30) {
      setHeader(true);
    } else {
      setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollHeader);
    return () => {
      window.removeEventListener("scroll", scrollHeader);
    };
  }, []);

  const routes = [
    { name: "Home", href: "/" },
    { name: "Courses", href: "/users/courses" },
    { name: "Programs", href: "/users/programs" },
    { name: "Teachers", href: "/users/teachers" },
  ];
  return (
    <div
      className={
        Header
          ? "w-full z-20 fixed flex justify-between items-center px-15 h-15 transition-all duration-300 text-black bg-white"
          : "w-full z-20 fixed flex justify-between items-center px-15 h-20 transition-all duration-300 text-white"
      }
    >
      <Link href="/" className="logo text-2xl font-bold ">INTRAVITE</Link>
      <div className="cont flex gap-8   ">
        {routes.map((route, index) => {
          return (
            <Link
              className=" flex flex-col gap-1 tracking-widest uppercase relative group"
              href={route.href}
              key={index}
            >
              {route.name}
              <div className="absolute w-full h-0.5 -bottom-1 scale-x-0 group-hover:scale-x-100 rounded-2xl bg-purple-700 duration-300" />
            </Link>
          );
        })}
      </div>
      <div className="button flex gap-4 justify-center items-center">
      <div className=""> <Theme/></div>
        {" "}
        <Button1 dis="Contact us" />
       
      </div>
    </div>
  );
}
