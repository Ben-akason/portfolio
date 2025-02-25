import Image from "next/image";

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-6 gap-x-4 gap-y-4 w-4/5 h-1/2">
        <div className="h-full col-span-2 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4">
          About Me
        </div>
        <div className="h-full col-span-1 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4">
          Education
        </div>
        <div className="h-full col-span-1 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4">
          Hobbies
        </div>
        <div className="h-full col-span-2 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4">
          Work
        </div>
        <div className="h-full col-span-2 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4">
          Skills
        </div>
        <div className="h-full col-span-4 rounded-xl border-solid border-black border-2 flex items-end justify-end p-4">
          Project Experience
        </div>
      </div>
    </div>
  );
}
