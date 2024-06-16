"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();

  return (
    <div className='sticky top-0 w-full min-h-[7vh] flex justify-between py-4 px-5 items-center shadow-xl bg-white z-50'>
      <div className="pt-2 pl-4">
        <button onClick={() => router.push("/")}>
          <Image
            src={"/assets/Applogo.svg"}
            width={40}
            height={32}
            alt={"AppLogo"}
          />
        </button>
      </div>
      <div className="pt-2 pr-4">
        <button onClick={() => router.push("/")}>
          <Image
            src={"/assets/Vector.svg"}
            width={28}
            height={25}
            alt={"AppLogo"}
          />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
