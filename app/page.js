"use client";
import Button1 from "@/components/Buttons/button";
import Data from "@/Data/HomeData";
import Cards from "@/components/Cards/Cards1";
export default function Home() {
  return (
    <>
      <main className="bg-1 backdrop-opacity-25 min-w-screen min-h-screen flex justify-center items-center">
        <div className="main bg-[#1d1834c1] text-white flex flex-col gap-4 min-w-screen min-h-screen justify-center p-10 md:p-20">
          <h1 className="md:text-[45px] font-semibold">{Data.Home}</h1>
          <p className="w-120 text-[14px]">{Data.Homedis}</p>
          <Button1 dis="Admission now" />
        </div>
      </main>
      <main className="min-w-screen min-h-screen flex flex-col items-center">
        <div className="w-full h-full absolute flex flex-col -z-20">
          <div className="w-full h-120 bg-[#7971EA]"></div>
          <div className="w-full h-full"> </div>{" "}
        </div>
        <div className="h-40 w-full flex flex-col justify-center items-center text-white">
          <h1 className="text-5xl font-extrabold">Courses</h1>
        </div>
        <Cards />
      </main>
    </>
  );
}
