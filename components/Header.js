import { useState } from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  const { slug } = router.query;
  return (
    <div className="flex justify-between items-center w-full px-5 pt-4 md:pt-0 md:pr-0 fixed bg-transparent z-10 md:px-8 ">
      <Link href="/">
        <Image
          src="/shared/logo.svg"
          width={40}
          height={40}
          alt="logo image"
          className="md:hidden"
        />
        <Image
          src="/shared/logo.svg"
          width={48}
          height={48}
          alt="logo image"
          className="hidden md:block"
        />
      </Link>
      <div className="md:hidden">
        <Sidebar />
      </div>
      <div
        className="hidden md:font-barlowCondensed md:text-[12px] md:px-8 md:tracking-[2.36px] md:flex md:flex-row 
        md:gap-5 md:bg-white/5 md:w-[445px] md:h-[90px] md:items-center"
      >
        <div
          className={`text-white flex justify-center items-center font-barlowCondensed h-full text-[10px] tracking-[2.7px] ${
            router.pathname == "/"
              ? "border-b-2 border-white "
              : "hover:border-b-2 hover:border-white/50 "
          }`}
        >
          <Link href="/">
            <p>HOME</p>
          </Link>
        </div>
        <div
          className={`text-white flex justify-center items-center font-barlowCondensed h-full text-[10px] tracking-[2.7px] ${
            router.pathname == "/destination" ||
            router.pathname == "/destination/mars" ||
            router.pathname == "/destination/europa" ||
            router.pathname == "/destination/titan"
              ? "border-b-2 border-white "
              : "hover:border-b-2 hover:border-white/50 "
          }`}
        >
          <Link href="/destination">
            <p>DESTINATION</p>
          </Link>
        </div>

        <div
          className={`text-white flex justify-center items-center font-barlowCondensed h-full text-[10px] tracking-[2.7px] ${
            router.pathname == "/crew" ||
            router.pathname == "/crew/b" ||
            router.pathname == "/crew/c" ||
            router.pathname == "/crew/d"
              ? "border-b-2 border-white "
              : "hover:border-b-2 hover:border-white/50 "
          }`}
        >
          <Link href="/crew">
            <p>CREW</p>
          </Link>
        </div>

        <div
          className={`text-white flex justify-center items-center font-barlowCondensed h-full text-[10px] tracking-[2.7px] ${
            router.pathname == "/technology" ||
            router.pathname == "/technology/b" ||
            router.pathname == "/technology/c"
              ? "border-b-2 border-white "
              : "hover:border-b-2 hover:border-white/50 "
          }`}
        >
          <Link href="/technology">
            <p>TECHNOLOGY</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
