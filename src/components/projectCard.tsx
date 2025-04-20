import * as React from "react";
import Image from "next/image";
import MTutorLogo from "@/assets/Logo.png";

interface ProjectCardProps {
  projectTitle: string;
  projectOverview: string;
  languages: [string, string][];
  colSpan: number;
  rowSpan: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  projectTitle,
  projectOverview,
  languages,
  colSpan,
  rowSpan,
}) => {
  return (
    <div
      className={`rounded-xl border-solid border-black border-2 col-span-${colSpan} row-span-${rowSpan} relative`}
    >
      <div className="flex flex-row gap-x-4 items-center">
        <Image
          src={MTutorLogo}
          alt="GitHub Logo"
          width={48}
          height={48}
          className="ml-4 mt-4 rounded-lg"
        />
        <div className="poppins-bold w-full mt-4 text-3xl">{projectTitle}</div>
      </div>
      <div className="p-4 text-gray-400">{projectOverview}</div>
      <div className="flex flex-row justify-between w-full absolute bottom-5">
        <div className="flex flex-col">
          {languages.map((pair, index) => (
            <div key={index} className="flex flex-row px-2 py-1 mb-2">
              <div
                style={{ backgroundColor: pair[0] }}
                className="rounded-full mx-2 w-6 h-6"
              ></div>
              <div className="text-gray-400">{pair[1]}</div>
            </div>
          ))}
        </div>
        <button className="flex flex-row m-2 self-end">
          <div className="poppins m-2">View Source</div>
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
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </button>

        <button className="flex flex-row m-2 self-end">
          <div className="poppins m-2">View Project</div>
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
              d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProjectCard;
