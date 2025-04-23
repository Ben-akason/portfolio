import Image, { StaticImageData } from "next/image";
import * as React from "react";
//icons
import SportsBasketballIcon from "@mui/icons-material/SportsBasketball";
import DirectionsRunIcon from "@mui/icons-material/DirectionsRun";
import OutdoorGrillIcon from "@mui/icons-material/OutdoorGrill";
import CodeIcon from "@mui/icons-material/Code";

const HobbiesCard = ({}) => {
  return (
    <div className="rounded-xl border-solid border-black border-2 col-span-2 row-span-4 relative overflow-hidden items-center">
      <div className="text-xl ml-8 mt-8 poppins-bold">Hobbies</div>
      <div className="flex flex-row items-center justify-between p-4 mt-4 mb-8 ml-8 mr-8 rounded-lg bg-gradient-to-r from-orange-500 to-orange-300">
        <div className="text-4xl poppins-bold text-black">Basketball</div>
        <SportsBasketballIcon fontSize="large" />
      </div>
      <div className="flex flex-row items-center justify-between p-4 m-8 rounded-lg bg-gradient-to-r from-green-500 to-green-300">
        <div className="text-4xl poppins-bold text-black">Running</div>
        <DirectionsRunIcon fontSize="large" />
      </div>
      <div className="flex flex-row items-center justify-between p-4 m-8 rounded-lg bg-gradient-to-r from-red-500 to-red-300">
        <div className="text-4xl poppins-bold text-black">Cooking</div>
        <OutdoorGrillIcon fontSize="large" />
      </div>
      <div className="flex flex-row items-center justify-between p-4 m-8 rounded-lg bg-gradient-to-r from-purple-500 to-purple-300">
        <div className="text-4xl poppins-bold text-black">Creating</div>
        <CodeIcon fontSize="large" />
      </div>
    </div>
  );
};

export default HobbiesCard;
