import { useState } from "react";
import Image from "next/image";
import Sidebar from "./Sidebar";
import Link from "next/link";
import { useRouter } from "next/router";
import classnames from "classnames";

const Header = () => {
  const router = useRouter();
  const validDesPath = "/destination";
  const isDesActive = router.pathname.startsWith(validDesPath);

  const validCrewPath = "/crew";
  const isCrewActive = router.pathname.startsWith(validCrewPath);

  const validTechPath = "/technology";
  const isTechActive = router.pathname.startsWith(validTechPath);

  const classNameDes = classnames(
    "text-white flex justify-center items-center font-barlowCondensed h-full text-[12px] md:tracking-[2.36px]",
    {
      "border-b-2 border-white": isDesActive,
      "hover:border-b-2 hover:border-white/50": !isDesActive,
    }
  );
  const classNameCrew = classnames(
    "text-white flex justify-center items-center font-barlowCondensed h-full text-[12px] md:tracking-[2.36px]",
    {
      "border-b-2 border-white": isCrewActive,
      "hover:border-b-2 hover:border-white/50": !isCrewActive,
    }
  );
  const classNameTech = classnames(
    "text-white flex justify-center items-center font-barlowCondensed h-full text-[12px] md:tracking-[2.36px]",
    {
      "border-b-2 border-white": isTechActive,
      "hover:border-b-2 hover:border-white/50": !isTechActive,
    }
  );

  return (
    <div
      className="flex justify-between items-center w-full px-5 pt-4 md:pt-0 md:pr-0 fixed bg-transparent z-10 md:px-8
     "
    >
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
          className="hidden md:block xl:pt-8"
        />
      </Link>
      <div className="md:hidden">
        <Sidebar />
      </div>
      <hr className="hidden xl:block  xl:bg-white/25 xl:w-[473px] xl:relative xl:top-3.5 xl:left-12 xl:z-10 " />
      <div
        className="hidden md:font-barlowCondensed md:text-[12px] md:px-8 md:tracking-[2.36px] md:flex md:flex-row 
        md:gap-5 md:bg-white/5 md:w-[445px] md:h-[90px] md:items-center xl:w-[830px] xl:h-[95px] xl:backdrop-blur-[81px] xl:mt-[40px]
        xl:text-[16px] xl:tracking-[2.7px] xl:gap-12 xl:justify-center xl:relative"
      >
        <div
          className={`text-white flex justify-center items-center font-barlowCondensed h-full text-[12px] tracking-[2.7px] ${
            router.pathname == "/"
              ? "border-b-2 border-white "
              : "hover:border-b-2 hover:border-white/50 "
          }`}
        >
          <Link href="/">
            <div className="xl:flex xl:gap-[11px]">
              <p className="hidden xl:block">00</p>
              <p>HOME</p>
            </div>
          </Link>
        </div>
        <div className={classNameDes}>
          <Link href={validDesPath+"/moon"}>
            <div className="xl:flex xl:gap-[11px]">
              <p className="hidden xl:block">01</p>
              <p>DESTINATION</p>
            </div>
          </Link>
        </div>

        <div className={classNameCrew}>
          <Link href={validCrewPath+"/a"}>
            <div className="xl:flex xl:gap-[11px]">
              <p className="hidden xl:block">02</p>
              <p>CREW</p>
            </div>
          </Link>
        </div>

        <div className={classNameTech}>
          <Link href={validTechPath+"/a"}>
            <div className="xl:flex xl:gap-[11px]">
              <p className="hidden xl:block">03</p>
              <p>TECHNOLOGY</p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
