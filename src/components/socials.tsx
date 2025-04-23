import * as React from "react";
import Image from "next/image";
import BenHeadshot from "@/assets/BenHeadshot.png";
import LinkedInLogo from "@/assets/InBug-Black.png";
import GitHubLogo from "@/assets/github-mark.png";

const Socials = ({}) => {
  return (
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
  );
};

export default Socials;
