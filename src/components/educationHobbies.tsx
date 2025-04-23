import * as React from "react";
import EducationCard from "./educationCard";
import MTutorLogo from "@/assets/Logo.png";
import HobbiesCard from "./hobbiesCard";

export default function EducationHobbies() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="grid grid-cols-4 grid-rows-4 w-5/6 h-2/3 gap-4">
        <EducationCard
          imageSrc={MTutorLogo}
          school={"University of Michigan"}
          degree={"Bachelor of Science in Engineering in Computer Engineering"}
          dateRange={"August 2020 - May 2024"}
          location={"Ann Arbor, MI"}
          courseWork={
            "Undergraduate Coursework: Embedded Systems, Data Structures and Algorithms, Logic Design, Computer Organization, Multivariable and Vector Calculus, Differential Equations"
          }
        ></EducationCard>
        <HobbiesCard></HobbiesCard>
      </div>
    </div>
  );
}
