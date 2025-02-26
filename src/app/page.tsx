import Card from "@/components/card";
import NavWheel from "../components/navWheel";
import Skills from "@/components/skills";
import About from "@/components/about";

export default function Home() {
  return (
    <>
      <div className="flex flex-col justify-center items-center h-screen">
        {/* <NavWheel></NavWheel> */}
        <div className="grid grid-cols-6 gap-x-4 gap-y-4 w-4/5 h-1/2">
          <div className="h-full col-span-2 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4 poppins-bold cursor-pointer hover:shadow-xl active:shadow-none">
            About Me
          </div>
          <div className="h-full col-span-1 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4 poppins-bold cursor-pointer hover:shadow-xl active:shadow-none">
            Education
          </div>
          <div className="h-full col-span-1 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4 poppins-bold cursor-pointer hover:shadow-xl active:shadow-none">
            Hobbies
          </div>
          <div className="h-full col-span-2 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4 poppins-bold cursor-pointer hover:shadow-xl active:shadow-none">
            Work
          </div>
          <div className="h-full col-span-2 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4 poppins-bold cursor-pointer hover:shadow-xl active:shadow-none">
            Skills
          </div>
          <div className="h-full col-span-4 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4 poppins-bold cursor-pointer hover:shadow-xl active:shadow-none">
            Project Experience
          </div>
        </div>
      </div>
      <div className="flex flex-col justify-center items-center h-screen">
        <div className="grid grid-cols-5 w-4/5 h-2/3 gap-x-4">
          <About></About>
          <Skills></Skills>
        </div>
      </div>
    </>
  );
}
