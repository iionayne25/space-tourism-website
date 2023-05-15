import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import Link from "next/link";
const TechnologyCard = ({ name, srcLandscape, srcPortait, description }) => {
  const router = useRouter();

  return (
    <div className="technologyContiner">
      <div className="topic md:px-6 md:pt-12 md:pb-7 xl:px-36 xl:pt-28">
        <p className="font-bold text-white/25">03</p>
        <p className="font-normal">space launce 101</p>
      </div>
      <div className="xl:flex xl:flex-row xl:gap-10 xl:justify-center xl:items-start">
        <div className="xl:w-3/5 xl:pl-36 xl:pt-14">
          <div className="flex flex-col justify-center items-center md:hidden">
            <Image
              src={srcLandscape}
              width={375}
              height={170}
              alt={`${name} image`}
            />
          </div>
          <div className="hidden md:flex md:flex-col md:justify-center md:items-center xl:hidden">
            <Image
              src={srcLandscape}
              width={768}
              height={310}
              alt={`${name} image`}
              className=""
            />
          </div>
          <div className="flex flex-col xl:flex-row xl:gap-14 gap-4 justify-center items-center text-center pt-8 md:pt-12 xl:pt-0  ">
            <div className="flex gap-4 justify-center items-center xl:flex-col xl:gap-8 xl:self-center">
              <Link href="/technology/a">
                <div
                  className={`h-10 w-10 rounded-full flex justify-center items-center font-bellefair md:w-[60px] md:h-[60px] md:text-2xl
                  xl:w-[80px] xl:h-[80px] xl:text-[32px]  ${
                    router.pathname == "/technology/a"
                      ? "bg-white"
                      : "bg-transparent border border-white/50 text-white hover:border-white "
                  }`}
                >
                  1
                </div>
              </Link>
              <Link href="/technology/b">
                <div
                  className={`h-10 w-10 text-base rounded-full flex justify-center items-center font-bellefai md:w-[60px] md:h-[60px] md:text-2xl
                  xl:w-[80px] xl:h-[80px] xl:text-[32px] ${
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
                  className={`h-10 w-10 rounded-full flex justify-center items-center font-bellefai md:w-[60px] md:h-[60px] md:text-2xl
                  xl:w-[80px] xl:h-[80px] xl:text-[32px] ${
                    router.pathname == "/technology/c"
                      ? "bg-white"
                      : "bg-transparent border-2 border-white/50 text-white hover:border-white"
                  }`}
                >
                  3
                </div>
              </Link>
            </div>

            <div className="pt-2 md:pt-5 xl:pt-0 xl:self-start ">
              <p className="font-barlowCondensed text-[16px] tracking-[2.36px] uppercase text-lightBlue md:tracking-[2.7px] xl:text-left">
                the terminorlogy...
              </p>
              <p className="titleName">{name}</p>
              <p className="description px-[20px] md:px-20 xl:px-0 xl:text-left xl:pr-10">
                {description}
              </p>
            </div>
          </div>
        </div>
        <div className="xl:w-2/5">
          <div className="hidden xl:flex xl:flex-col xl:justify-end xl:items-end ">
            <Image
              src={srcPortait}
              width={515}
              height={527}
              alt={`${name} image`}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyCard;
