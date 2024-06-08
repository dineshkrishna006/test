"use client";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import { Signup } from "@/components/Signup";
export default function Home() {
  return (
    <div className="flex md:hidden flex-col relative h-[100vh]">
      <Navbar />
      <div className="flex flex-col items-start mt-[80px] p-[1.5rem] ">
        <p className=" font-semibold text-[#919191] text-xl">
          Let{"'"}s Get Started!
        </p>
        <p className="text-[#3D408A] text-5xl font-semibold">Sign Up</p>
        <div className="p-2 pt-[2rem] w-full flex items-center justify-center z-20">
          <Signup />
        </div>

        <div className="absolute bottom-0 left-0 right-0 z-0">
          <Image
            src={"/assets/Ellipse.svg"}
            alt={"Ellipse"}
            width={767}
            height={10}
          />
        </div>
        {/* <button type="button" className="cursor-pointer h-auto" onClick={()=>console.log('CLicked')}>sendotp</button> */}
      </div>
    </div>
  );
}
