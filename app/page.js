"use client";
import Button1 from "@/components/Buttons/button";
import Data from "@/Data/HomeData";
import Cards from "@/components/Cards/Cards1";
import { motion } from "motion/react";
import Page1 from "@/components/Page/page";
export default function Home() {
  return (
    <>
      <main className="bg-1 backdrop-opacity-25 min-w-screen min-h-screen flex justify-center items-center overflow-hidden">
        <div className="main bg-[#1d1834c1] text-neutral-content flex flex-col gap-4 min-w-screen min-h-screen justify-center p-10 md:p-20">
          <motion.h1 initial={{y:-50,opacity:0}} animate={{y:0,opacity:100}} transition={{delay:0.3,duration:1}} className="md:text-[45px] text-2xl font-semibold">{Data.Home}</motion.h1>
          <motion.p initial={{y:100,opacity:0}} animate={{y:0,opacity:100}} transition={{delay:0.3,duration:1}} className="md:w-120 text-[14px] text-sm">{Data.Homedis}</motion.p>
          <Button1 in={{y:150,opacity:0}} ani={{y:0,opacity:100}} tra={{delay:0.3,duration:1.1}}  dis="Admission now" />
        </div>
      </main>
      <main className="min-w-screen min-h-screen flex flex-col items-center">
        <div className="w-full h-full absolute flex flex-col -z-20">
          <div className="w-full h-120 bg-[#7971EA]"></div>
          <div className="w-full h-full"> </div>{" "}
        </div>
        <div className="h-40 md:w-9/12 w-full flex flex-col justify-center items-center text-white z-0">
          <h1 id="courses" className="text-5xl font-extrabold">Courses</h1>
        </div>
        <Cards />
      </main>
      <main className="">
<Page1/>
      </main>
    </>
  );
}
