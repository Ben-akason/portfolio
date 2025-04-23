"use client";

import Card from "@/components/projectCard";
import NavWheel from "../components/navWheel";
import Skills from "@/components/skills";
import About from "@/components/about";
import ProjectExperience from "@/components/projectExperience";
import WorkExperience from "@/components/workExperience";
import EducationHobbies from "@/components/educationHobbies";
import Footer from "@/components/footer";
import { useEffect, useState } from "react";

export default function Home() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [isDark]);

  return (
    <>
      <div className="relative dark:bg-[#111728]">
        <button
          className="fixed right-8 bottom-20 rounded-full bg-black dark:bg-white shadow-xl p-3 cursor-pointer active:shadow-none"
          onClick={() => setIsDark(!isDark)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="size-8 fill-white dark:fill-black"
          >
            <path
              fill-rule="evenodd"
              d="M9.528 1.718a.75.75 0 0 1 .162.819A8.97 8.97 0 0 0 9 6a9 9 0 0 0 9 9 8.97 8.97 0 0 0 3.463-.69.75.75 0 0 1 .981.98 10.503 10.503 0 0 1-9.694 6.46c-5.799 0-10.5-4.7-10.5-10.5 0-4.368 2.667-8.112 6.46-9.694a.75.75 0 0 1 .818.162Z"
              clip-rule="evenodd"
            />
          </svg>
        </button>
        <div className="flex flex-col justify-center items-center h-screen">
          {/* <NavWheel></NavWheel> */}
          <div className="grid grid-cols-6 gap-x-4 gap-y-4 w-4/5 h-1/2">
            <div className="h-full col-span-2 rounded-xl border-solid border-black dark:border-white dark:bg-[#1c2b3b] dark:text-white border-2 flex items-end justify-end p-4 poppins-bold cursor-pointer shadow-xl active:shadow-none">
              About Me
            </div>
            <div className="h-full col-span-1 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4 poppins-bold cursor-pointer shadow-xl active:shadow-none dark:border-white dark:bg-black dark:text-white">
              Education
            </div>
            <div className="h-full col-span-1 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4 poppins-bold cursor-pointer shadow-xl active:shadow-none dark:border-white dark:bg-black dark:text-white">
              Hobbies
            </div>
            <div className="h-full col-span-2 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4 poppins-bold cursor-pointer shadow-xl active:shadow-none dark:border-white dark:bg-black dark:text-white">
              Work
            </div>
            <div className="h-full col-span-2 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4 poppins-bold cursor-pointer shadow-xl active:shadow-none dark:border-white dark:bg-black dark:text-white">
              Skills
            </div>
            <div className="h-full col-span-4 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4 poppins-bold cursor-pointer shadow-xl active:shadow-none dark:border-white dark:bg-black dark:text-white">
              Project Experience
            </div>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center h-screen">
          <div className="grid grid-cols-5 w-5/6 gap-x-4">
            <About></About>
            <Skills></Skills>
          </div>
        </div>
        <ProjectExperience></ProjectExperience>
        <WorkExperience></WorkExperience>
        <EducationHobbies></EducationHobbies>
        <Footer></Footer>
      </div>
    </>
  );
}
