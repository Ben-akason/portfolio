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
      className={`rounded-xl border-solid border-black border-2 col-span-${colSpan} row-span-${rowSpan} relative`}
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
        <div className="m-4 bg-black rounded-xl items-center justify-center">
          <div className="text-white p-4 poppins-bold">{location}</div>
        </div>
      </div>
      <div className="p-4">{dateString}</div>
      <div className="p-4">{description}</div>
    </div>
  );
};

export default WorkCard;
