import * as React from "react";
import ProjectCard from "./projectCard";

export default function ProjectExperience() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="grid grid-cols-4 grid-rows-4 w-5/6 h-5/6 gap-4">
        <ProjectCard
          projectTitle="MTutor"
          projectOverview="MTutor is a free app designed to help Michigan students connect with reliable, affordable peer tutors. Students can filter by class, message tutors directly, and book one-on-one sessions, with all upcoming appointments conveniently organized in one place."
          languages={[
            ["#2596be", "React Native"],
            ["#2e6c2e", "Node.js"],
            ["#44ec64", "MongoDB"],
          ]}
          colSpan={2}
          rowSpan={2}
        ></ProjectCard>
        {/* <ProjectCard
          projectTitle="MTutor Landing Page"
          projectOverview="Website to drive marketing growth and give MTutor an online presence. Main features include information on the app, links to download, privacy policy, terms, and a contact form."
          languages={[
            ["#2596be", "React"],
            ["#2e6c2e", "Node.js"],
          ]}
          colSpan={1}
          rowSpan={2}
        ></ProjectCard> */}
        <ProjectCard
          projectTitle="Marble Solitaire"
          projectOverview="8 bit marble solitaire game - also known as medikaison. Built using a combination of React and Phaser JS and allows users to read instructions, play games of marble solitaire, and receive a final score. Global leaderboard coming soon."
          languages={[
            ["#2596be", "React"],
            ["#441854", "PhaserJS"],
            ["#2e6c2e", "Node.js"],
          ]}
          colSpan={2}
          rowSpan={2}
        ></ProjectCard>
        <ProjectCard
          projectTitle="Running Blog"
          projectOverview="MTutor is a free app designed to help Michigan students connect with reliable, affordable peer tutors. Students can filter by class, message tutors directly, and book one-on-one sessions, with all upcoming appointments conveniently organized in one place."
          languages={[
            ["#2596be", "React Native"],
            ["#2e6c2e", "Node.js"],
            ["#44ec64", "MongoDB"],
          ]}
          colSpan={2}
          rowSpan={2}
        ></ProjectCard>
        <ProjectCard
          projectTitle="Ticket Scout"
          projectOverview="MTutor is a free app designed to help Michigan students connect with reliable, affordable peer tutors. Students can filter by class, message tutors directly, and book one-on-one sessions, with all upcoming appointments conveniently organized in one place."
          languages={[
            ["#2596be", "React Native"],
            ["#2e6c2e", "Node.js"],
            ["#44ec64", "MongoDB"],
          ]}
          colSpan={2}
          rowSpan={2}
        ></ProjectCard>
      </div>
    </div>
  );
}
