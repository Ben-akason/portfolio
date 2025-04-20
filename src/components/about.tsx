import React from "react";
import Image from "next/image";
import BenHeadshot from "@/assets/BenHeadshot.png";
import LinkedInLogo from "@/assets/InBug-Black.png";
import GitHubLogo from "@/assets/github-mark.png";

export default function About() {
  return (
    <div className="rounded-lg col-span-3 grid grid-cols-5 gap-x-4 items-start p-8 border-solid border-black border-2">
      <div className="col-span-2 flex flex-col p-2 items-center justify-center gap-y-4">
        <Image
          src={BenHeadshot}
          alt="Ben's Headshot"
          width={300}
          height={300}
          className="rounded-full aspect-square object-cover border-solid border-gray-200 border-4"
        />
        <h1 className="text-black poppins-bold text-xl">Ben Akason</h1>
        <div className="text-gray-400 pb-8">Software Developer</div>
        <button className="rounded-md text-white bg-black p-4 poppins-bold w-full hover:shadow-lg active:shadow-none">
          Contact Me
        </button>
      </div>
      <div className="col-span-3 flex flex-col">
        <div className="poppins-bold w-full p-2">About Me</div>
        <div className="p-2">
          I am a recent graduate of Michigan Engineering with a strong interest
          in software, app, and web development, focusing on building tools that
          help people. I recently developed MTutor, an app designed to make it
          easier for students and tutors to connect at the University of
          Michigan. Students can filter by class, message tutors directly, and
          book one-on-one sessions, with all upcoming appointments conveniently
          organized in one place. Beyond MTutor, I have developed several
          websites, software tools, and an embedded systems project. I am
          passionate about working with cutting-edge technology and creating
          novel solutions that push the boundaries of innovation, whether in
          web, mobile, or emerging tech fields.
        </div>
        <hr className="h-[2px] my-8 bg-gray-200 border-0 dark:bg-gray-700"></hr>
        <div className="flex flex-row p-2 gap-x-5 justify-center">
          <button className="bg-gray-300 rounded-md m-1 p-2 flex flex-row content-center justify-center cursor-pointer hover:shadow-lg active:shadow-none">
            <Image
              src={GitHubLogo}
              alt="GitHub Logo"
              width={24}
              height={24}
              className="m-2"
            />
            <div className="m-2">GitHub</div>
          </button>
          <button className="bg-gray-300 rounded-md m-1 p-2 flex flex-row content-center justify-center cursor-pointer hover:shadow-lg active:shadow-none">
            <Image
              src={LinkedInLogo}
              alt="LinkedIn Logo"
              width={24}
              height={24}
              className="m-2"
            />
            <div className="m-2">LinkedIn</div>
          </button>
          <button className="bg-gray-300 rounded-md m-1 p-2 flex flex-row content-center justify-center cursor-pointer hover:shadow-lg active:shadow-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 m-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>
            <div className="m-2">Email</div>
          </button>
        </div>
      </div>
    </div>
  );
}
