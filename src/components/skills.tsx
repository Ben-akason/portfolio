import React from "react";

export default function Skills() {
  let skills: string[] = [
    "C",
    "C++",
    "JavaScript",
    "TypeScript",
    "Python",
    "React",
    "React Native",
    "Node.js",
    "TailwindCSS",
    "MongoDB",
    "SQL",
    "Docker",
    "Git",
  ];
  return (
    <div className="rounded-lg col-span-2 flex flex-wrap items-start content-start gap-x-2 gap-y-4 p-4 border-solid border-black border-2">
      <h1 className="poppins-bold w-full p-2">Skills</h1>
      {skills.map((skill, index) => (
        <div key={index} className="rounded-md bg-gray-300 text-black p-2 m-1">
          {skill}
        </div>
      ))}
    </div>
  );
}
