import * as React from "react";
import WorkCard from "./workCard";
import MTutorLogo from "@/assets/Logo.png";

export default function WorkExperience() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="grid grid-cols-4 grid-rows-3 w-5/6 h-5/6 gap-4">
        <WorkCard
          imageSrc={MTutorLogo}
          company="Caterpillar Inc."
          title="Software Engineer"
          dateString="August 2024 - Present"
          location="Chicago, IL"
          description="Built a web app with React and Python WebSockets, enabling internal users to upload, create, and run
k6 load test scripts, reducing setup time by 30%. Led frontend development and collaborated with the team to containerize the solution using Docker and store test results in InfluxDB. Developed API monitoring scripts and supported a dealer-facing dashboard hub, providing development assistance during P1 incidents to ensure system reliability and quick issue resolution."
          colSpan={4}
          rowSpan={1}
        ></WorkCard>
        <WorkCard
          imageSrc={MTutorLogo}
          company="Caterpillar Inc."
          title="Software Engineering Intern"
          dateString="May 2023 - August 2023"
          location="Chicago, IL"
          description="Developed an interactive alerts dashboard with a React frontend, integrated with Python Flask, for
real-time monitoring of CAT applications. Adopted by 10+ teams and Caterpillar dealers, the tool
connected to the ServiceNow REST API and a Snowflake database. Implemented dynamic alert filtering and support contact identification during outages, while maintaining biweekly check-ins with the manager and collaborating with a mentor via GitHub."
          colSpan={4}
          rowSpan={1}
        ></WorkCard>
        <WorkCard
          imageSrc={MTutorLogo}
          company="Lincoln International LLC"
          title="Information Technology Intern"
          dateString="May 2022 - August 2022"
          location="Chicago, IL"
          description="Consulted on user account configuration, access management, disaster recovery, and patching of
network and server racks in the firm’s Chicago and New York offices. Trained employees on best practices regarding phishing attempts and solved hardware and software technical issues for the multinational investment bank’s employees."
          colSpan={4}
          rowSpan={1}
        ></WorkCard>
      </div>
    </div>
  );
}
