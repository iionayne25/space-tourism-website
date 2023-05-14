import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const CrewCard = ({ name, src, role, bio }) => {
  const router = useRouter();
  return (
    <div
      className="bg-crew-mobile flex flex-col gap-5 h-[710px] backdrop-brightness-0 overflow-x-hidden overflow-y-scroll items-center pt-16
    md:bg-crew-tablet md:h-[1024px] md:px-7 "
    >
      <div
        className="flex gap-3 justify-center items-center font-barlowCondensed text-white text-[13px]
      md:text-[20px] md:pt-12 md:justify-start md:w-full "
      >
        <p className="font-bold text-white/30  ">02</p>
        <p className="font-normal  ">MEET YOUR CREW</p>
      </div>
      <div className="md:hidden flex flex-col justify-center items-center w-[237px] h-[223px]">
        {src === "/crew/image-douglas-hurley.png" ? (
          <Image src={src} width={177} height={222} alt={`${name} image`} />
        ) : src === "/crew/image-mark-shuttleworth.png" ? (
          <Image src={src} width={154} height={222} alt={`${name} image`} />
        ) : src === "/crew/image-victor-glover.png" ? (
          <Image src={src} width={181} height={222} alt={`${name} image`} />
        ) : (
          <Image src={src} width={226} height={222} alt={`${name} image`} />
        )}

        <hr className="w-64 border-[1px] border-darkGray" />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center text-center md:justify-between  ">
        <div className="flex gap-4 md:order-last">
          <Link href="/crew">
            <p
              className={`h-2 w-2 rounded-full ${
                router.pathname == "/crew"
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/60"
              }`}
            ></p>
          </Link>
          <Link href="/crew/b" as="/crew">
            <p
              className={`h-2 w-2 rounded-full ${
                router.pathname == "/crew/b"
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/60"
              }`}
            ></p>
          </Link>
          <Link href="/crew/c" as="/crew">
            <p
              className={`h-2 w-2 rounded-full ${
                router.pathname == "/crew/c"
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/60"
              }`}
            ></p>
          </Link>
          <Link href="/crew/d">
            <p
              className={`h-2 w-2 rounded-full ${
                router.pathname == "/crew/d"
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/50"
              }`}
            ></p>
          </Link>
        </div>
        <div className="pt-2">
          <p className="font-bellefair text-[16px] uppercase text-white/60">
            {role}
          </p>
          <p className="font-bellefair text-[24px] uppercase text-white">
            {name}
          </p>
        </div>
        <p className="font-barlow text-[15px]  text-lightBlue px-5 leading-[25px] md:text-[16px] md:leading-[28px] md:px-24">
          {bio}
        </p>
      </div>
      <div className="hidden md:flex md:flex-col md:justify-center md:items-center ">
        {src === "/crew/image-douglas-hurley.png" ? (
          <Image src={src} width={457} height={572} alt={`${name} image`} />
        ) : src === "/crew/image-mark-shuttleworth.png" ? (
          <Image src={src} width={367} height={535} alt={`${name} image`} />
        ) : src === "/crew/image-victor-glover.png" ? (
          <Image src={src} width={433} height={532} alt={`${name} image`} />
        ) : (
          <Image src={src} width={540} height={532} alt={`${name} image`} />
        )}
      </div>
    </div>
  );
};

export default CrewCard;
