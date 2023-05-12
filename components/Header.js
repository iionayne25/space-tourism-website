import { useState } from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Link from "next/link";

const Header = () => {
  return (
    <div className="flex justify-between items-center w-full px-5 pt-4 fixed bg-transparent z-10 ">
      <Link href="/"><Image src="/shared/logo.svg" width={40} height={40} alt="logo image" /></Link>
      
      <div className="md:hidden">
        <Sidebar />
      </div>
      <div className="hidden md:flex md:flex-row md:gap-6   ">
        <Link href="/">
          <p className="sidebarItem"> HOME</p>
        </Link>
        <Link href="/destination">
          <p className="sidebarItem"> DESTINATION</p>
        </Link>
        <Link href="/crew">
          <p className="sidebarItem"> CREW</p>
        </Link>
        <Link href="/technology">
          <p className="sidebarItem"> TECHNOLOGY</p>
        </Link>
      </div>
    </div>
  );
};

export default Header;
