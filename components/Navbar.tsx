"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
const Navbar = () => {
  const router = useRouter();

  return (
    <div className="md:hidden flex fixed h-[80px] w-full z-10 items-center  justify-between shadow-lg">
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
