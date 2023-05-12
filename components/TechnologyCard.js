import React from "react";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
const TechnologyCard = ({ name, src, description }) => {
  const router = useRouter();
  return (
    <div className="bg-tech-mobile flex flex-col gap-6 h-[710px] overflow-x-hidden overflow-y-scroll items-center pt-16">
      <div className="flex gap-3 justify-center items-center">
        <p className="title-condensed font-bold text-white/30 text-[13px] ">
          03
        </p>
        <p className="title-condensed font-normal text-[13px] uppercase ">
          space launce 101
        </p>
      </div>
      <div className="flex flex-col justify-center items-center">
        <Image
          src={src}
          width={375}
          height={170}
          alt={`${name} image`}
          className=""
        />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center text-center ">
        <div className="flex gap-4 justify-center items-center ">
          <Link href="/technology">
            <div
              className={`h-10 w-10 rounded-full flex justify-center items-center font-bellefair  ${
                router.pathname == "/technology"
                  ? "bg-white"
                  : "bg-transparent border border-white/50 text-white "
              }`}
            >
              1
            </div>
          </Link>
          <Link href="/technology/b">
            <div
              className={`h-10 w-10 text-base rounded-full flex justify-center items-center font-bellefai ${
                router.pathname == "/technology/b"
                  ? "bg-white"
                  : "bg-transparent border-2 border-white/50 text-white"
              }`}
            >
              2
            </div>
          </Link>
          <Link href="/technology/c">
            <div
              className={`h-10 w-10 rounded-full flex justify-center items-center font-bellefai ${
                router.pathname == "/technology/c"
                  ? "bg-white"
                  : "bg-transparent border-2 border-white/50 text-white"
              }`}
            >
              3
            </div>
          </Link>
        </div>
        <div className="pt-2">
          <p className="font-barlowCondensed text-[16px] tracking-[2.36px] uppercase text-lightBlue">
            the terminorlogy...
          </p>
          <p className="font-bellefair text-[24px] uppercase text-white">
            {name}
          </p>
        </div>

        <p className="font-barlow text-[15px] text-lightBlue px-[40px] leading-[25px]">
          {description}
        </p>
      </div>
    </div>
  );
};

export default TechnologyCard;
