import React from "react";
import Image from "next/image";
import BenHeadshot from "@/assets/BenHeadshot.png";

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
        <button className="rounded-md text-white bg-black p-4 poppins-bold w-full">
          Contact Me
        </button>
      </div>
      <div className="col-span-3 flex flex-row">
        <div>I am a Software Developer.</div>
        <div className="flex flex-col p-2">
          <div className="bg-gray-300 rounded-md m-1">GitHub</div>
          <div className="bg-gray-300 rounded-md m-1">LinkedIn</div>
          <div className="bg-gray-300 rounded-md m-1">Email</div>
        </div>
      </div>
    </div>
  );
}
