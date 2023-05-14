import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const CrewCard = ({ name, src, role, bio }) => {
  const router = useRouter();
  return (
    <div className="bg-crew-mobile flex flex-col gap-5 h-[710px] backdrop-brightness-0 overflow-x-hidden overflow-y-scroll items-center pt-16">
      <div className="flex gap-3 justify-center items-center">
        <p className="title-condensed font-bold text-white/30 text-[13px] ">
          02
        </p>
        <p className="title-condensed font-normal text-[13px] ">
          MEET YOUR CREW
        </p>
      </div>
      <div className="flex flex-col justify-center items-center w-[237px] h-[223px]">
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
      <div className="flex flex-col gap-4 justify-center items-center text-center ">
        <div className="flex gap-4 ">
          <Link href="/crew">
            <p
              className={`h-2 w-2 rounded-full ${
                router.pathname == "/crew"
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/60"
              }`}
            ></p>
          </Link>
          <Link href="/crew/b">
            <p
              className={`h-2 w-2 rounded-full ${
                router.pathname == "/crew/b"
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/60"
              }`}
            ></p>
          </Link>
          <Link href="/crew/c">
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

        <p className="font-barlow text-[15px]  text-lightBlue px-5 leading-[25px]">
          {bio}
        </p>
      </div>
    </div>
  );
};

export default CrewCard;
