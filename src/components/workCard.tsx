import * as React from "react";
import Image, { StaticImageData } from "next/image";

interface WorkCardProps {
  imageSrc: StaticImageData;
  company: string;
  title: string;
  dateString: string;
  location: string;
  description: string;
  colSpan: number;
  rowSpan: number;
}

const WorkCard: React.FC<WorkCardProps> = ({
  imageSrc,
  company,
  title,
  dateString,
  location,
  description,
  colSpan,
  rowSpan,
}) => {
  return (
    <div
      className={`rounded-xl border-solid border-black border-2 col-span-${colSpan} row-span-${rowSpan} relative overflow-hidden`}
    >
      <div className="flex flex-row justify-between">
        <div className="flex flex-row gap-x-6 items-center">
          <Image
            src={imageSrc}
            alt={`${company} logo`}
            width={64}
            height={64}
            className="ml-4 mt-4 rounded-lg"
          />
          <div>
            <div className="poppins-bold w-full mt-4 text-3xl">{company}</div>
            <div className="text-gray-400">{title}</div>
          </div>
        </div>
        <div className="m-4 bg-black rounded-xl items-center justify-center text-center h-10">
          <div className="text-white p-2 poppins-bold">{location}</div>
        </div>
      </div>

      <div className="flex flex-column items-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="black"
          className="size-6 ml-4 my-1"
        >
          <path
            fill-rule="evenodd"
            d="M6.75 2.25A.75.75 0 0 1 7.5 3v1.5h9V3A.75.75 0 0 1 18 3v1.5h.75a3 3 0 0 1 3 3v11.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V7.5a3 3 0 0 1 3-3H6V3a.75.75 0 0 1 .75-.75Zm13.5 9a1.5 1.5 0 0 0-1.5-1.5H5.25a1.5 1.5 0 0 0-1.5 1.5v7.5a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5v-7.5Z"
            clip-rule="evenodd"
          />
        </svg>

        <div className="px-4 py-2">{dateString}</div>
      </div>
      <div className="px-4 py-1 text-ellipsis h-1/2 lg:text-sm md:text-xs sm:text-xs xs:text-xs">
        {description}
      </div>
    </div>
  );
};

export default WorkCard;
