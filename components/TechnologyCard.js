import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
const TechnologyCard = ({ name, src, description }) => {
  const router = useRouter();
  return (
    <div
      className="bg-tech-mobile flex flex-col gap-6 h-[710px] overflow-x-hidden overflow-y-scroll items-center pt-16
    md:bg-tech-tablet md:h-[1024px]"
    >
      <div className="topic md:px-6 md:pt-12 md:pb-7 ">
        <p className="font-bold text-white/25">03</p>
        <p className="font-normal">space launce 101</p>
      </div>
      <div className="flex flex-col justify-center items-center md:hidden">
        <Image
          src={src}
          width={375}
          height={170}
          alt={`${name} image`}
          className=""
        />
      </div>
      <div className="hidden md:flex md:flex-col md:justify-center md:items-center">
        <Image
          src={src}
          width={768}
          height={310}
          alt={`${name} image`}
          className=""
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center text-center pt-3 ">
        <div className="flex gap-4 justify-center items-center ">
          <Link href="/technology">
            <div
              className={`h-10 w-10 rounded-full flex justify-center items-center font-bellefair md:w-[60px] md:h-[60px] md:text-2xl  ${
                router.pathname == "/technology"
                  ? "bg-white"
                  : "bg-transparent border border-white/50 text-white hover:border-white "
              }`}
            >
              1
            </div>
          </Link>
          <Link href="/technology/b">
            <div
              className={`h-10 w-10 text-base rounded-full flex justify-center items-center font-bellefai md:w-[60px] md:h-[60px] md:text-2xl ${
                router.pathname == "/technology/b"
                  ? "bg-white"
                  : "bg-transparent border-2 border-white/50 text-white hover:border-white"
              }`}
            >
              2
            </div>
          </Link>
          <Link href="/technology/c">
            <div
              className={`h-10 w-10 rounded-full flex justify-center items-center font-bellefai md:w-[60px] md:h-[60px] md:text-2xl ${
                router.pathname == "/technology/c"
                  ? "bg-white"
                  : "bg-transparent border-2 border-white/50 text-white hover:border-white"
              }`}
            >
              3
            </div>
          </Link>
        </div>
        <div className="pt-2 md:pt-5">
          <p className="font-barlowCondensed text-[16px] tracking-[2.36px] uppercase text-lightBlue md:tracking-[2.7px]">
            the terminorlogy...
          </p>
          <p className="titleName">{name}</p>
        </div>

        <p className="description px-[40px]  md:px-20">{description}</p>
      </div>
    </div>
  );
};

export default TechnologyCard;
