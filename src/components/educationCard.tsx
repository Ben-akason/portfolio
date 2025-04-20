import Image, { StaticImageData } from "next/image";
import * as React from "react";

interface EducationCardProps {
  imageSrc: StaticImageData;
  school: string;
  degree: string;
  dateRange: string;
  location: string;
  courseWork: string;
}

const EducationCard: React.FC<EducationCardProps> = ({
  imageSrc,
  school,
  degree,
  dateRange,
  location,
  courseWork,
}) => {
  return (
    <div className="rounded-xl border-solid border-black border-2 col-span-2 row-span-4 relative overflow-hidden">
      <Image
        src={imageSrc}
        alt={`${school} logo`}
        width={64}
        height={64}
        className="ml-4 mt-4 rounded-lg"
      />
      <div>{school}</div>
      <div>{degree}</div>
    </div>
  );
};
