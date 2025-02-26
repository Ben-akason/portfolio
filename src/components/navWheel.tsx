"use client";

import React from "react";
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import "react-horizontal-scrolling-menu/dist/styles.css";

export default function NavWheel() {
  let items: string[] = [
    "Ben Akason",
    "About Me",
    "Education",
    "Hobbies",
    "Work",
    "Skills",
    "Project Experience",
  ];

  return (
    <div className="flex flex-row gap-x-4 w-1/5 overflow-x-auto backdrop-blur-sm">
      {items.map((item, index) => (
        <div key={index} className="p-4 whitespace-nowrap">
          {item}
        </div>
      ))}
    </div>
  );
}
