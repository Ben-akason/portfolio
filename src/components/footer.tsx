import * as React from "react";
import Socials from "./socials";

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center h-1/4 mt-8 mb-4">
      <hr className="border-black my-4 mx-8 w-5/6 border-2"></hr>
      <Socials></Socials>
    </div>
  );
}
