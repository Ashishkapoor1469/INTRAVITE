"use client";
import Link from "next/link";
import Button1 from "@/components/Buttons/button";
import { motion } from "motion/react";
import { AiOutlineBars } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";
import { useEffect, useState } from "react";
import Theme from "@/components/Themecotroller/ThemeController";
export default function NavMobo() {
  const [Header, setHeader] = useState(false);
  const [Open, setOpen] = useState(false);
  const Close = () => setOpen(!Open);

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
          ? "w-full z-20 fixed flex justify-between items-center ps-10 pe-5 h-16 transition-all duration-300 text-black bg-white"
          : "w-full z-20 fixed flex justify-between items-center ps-10 pe-5 h-20 transition-all duration-300 text-white"
      }
    >
      <div className="logo text-2xl font-bold ">INTRAVITE</div>
      <div className="absolute right-14"> <Theme/></div>
      <button onClick={Close} className="text-2xl text-black z-20">
        {Open ? <RxCross1 /> : <AiOutlineBars />}
      </button>
      {Open ? (
        <>
          <motion.main
            initial={{ x: "100%" }}
            animate={{ x: Open ? 0 : "80%" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="min-h-screen min-w-full absolute top-0 text-black bg-white flex flex-col"
          >
            <h1 className="logo text-2xl font-bold py-6 px-4">INTRAVITE</h1>
            <div className="links w-full h-auto flex flex-col gap-4 p-4">
                {routes.map((route,index)=>{
                return <Link href={route.href} onClick={Close}  key={index}>{route.name}</Link>
                })}
          <Button1 dis="Contact Us"/>
            </div> 
          </motion.main> 
        </>
      ) : (
        <></>
      )}
    </div>
  );
}
