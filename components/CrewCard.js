import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const CrewCard = ({ name, src, role, bio }) => {
  const router = useRouter();
  return (
    <main
      className="bg-crew-mobile flex flex-col gap-12 h-[710px] backdrop-brightness-0 overflow-x-hidden overflow-y-scroll items-center pt-16
    md:bg-crew-tablet md:h-[1024px] md:px-7 md:gap-10 md:pt-20 "
    >
      <div className="topic md:pt-5 ">
        <p className="font-bold text-white/25">02</p>
        <p className="font-normal">MEET YOUR CREW</p>
      </div>
      <div
        className="md:hidden flex flex-col justify-center items-center w-[237px] h-[223px] gap-7
       "
      >
        <div className="flex flex-col justify-center items-center">
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

        <div className="flex gap-4 md:hidden ">
          <Link href="/crew">
            <p
              className={`h-2.5 w-2.5 rounded-full ${
                router.pathname == "/crew"
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/60"
              }`}
            ></p>
          </Link>
          <Link href="/crew/b" as="/crew">
            <p
              className={`h-2.5 w-2.5 rounded-full ${
                router.pathname == "/crew/b"
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/60"
              }`}
            ></p>
          </Link>
          <Link href="/crew/c" as="/crew">
            <p
              className={`h-2.5 w-2.5 rounded-full ${
                router.pathname == "/crew/c"
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/60"
              }`}
            ></p>
          </Link>
          <Link href="/crew/d">
            <p
              className={`h-2.5 w-2.5 rounded-full  ${
                router.pathname == "/crew/d"
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/50"
              }`}
            ></p>
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-4 justify-center items-center text-center md:justify-between  ">
        <div className="pt-2">
          <p className="font-bellefair text-[16px] uppercase text-white/50 md:text-2xl">
            {role}
          </p>
          <p className="titleName">{name}</p>
        </div>
        <p className="description px-3.5 md:px-8.5">{bio}</p>
      </div>

      <div className="hidden md:flex md:flex-col md:justify-center md:items-center md:gap-8 ">
        <div className="hidden md:flex md:gap-4  ">
          <Link href="/crew">
            <p
              className={`h-2.5 w-2.5 rounded-full ${
                router.pathname == "/crew"
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/60"
              }`}
            ></p>
          </Link>
          <Link href="/crew/b" as="/crew">
            <p
              className={`h-2.5 w-2.5 rounded-full ${
                router.pathname == "/crew/b"
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/60"
              }`}
            ></p>
          </Link>
          <Link href="/crew/c" as="/crew">
            <p
              className={`h-2.5 w-2.5 rounded-full ${
                router.pathname == "/crew/c"
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/60"
              }`}
            ></p>
          </Link>
          <Link href="/crew/d">
            <p
              className={`h-2.5 w-2.5 rounded-full  ${
                router.pathname == "/crew/d"
                  ? "bg-white"
                  : "bg-white/20 hover:bg-white/50"
              }`}
            ></p>
          </Link>
        </div>
        {src === "/crew/image-douglas-hurley.png" ? (
          <Image src={src} width={457} height={577} alt={`${name} image`} />
        ) : src === "/crew/image-mark-shuttleworth.png" ? (
          <Image src={src} width={367} height={535} alt={`${name} image`} />
        ) : src === "/crew/image-victor-glover.png" ? (
          <Image src={src} width={433} height={532} alt={`${name} image`} />
        ) : (
          <Image src={src} width={520} height={532} alt={`${name} image`} />
        )}
      </div>
    </main>
  );
};

export default CrewCard;
