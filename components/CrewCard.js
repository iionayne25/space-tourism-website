import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const CrewCard = ({ name, src, role, bio }) => {
  const router = useRouter();
  return (
    <main className="crewContainer">
      <div className="xl:flex xl:flex-row xl:justify-center xl:pt-16 xl:h-full">
        <div className="xl:w-1/2 xl:flex xl:justify-center ">
          <div className="flex flex-col gap-12 md:gap-5  justify-center xl:justify-start items-center xl:gap-28 xl:pl-28  ">
            <div className="topic md:pt-5 ">
              <p className="font-bold text-white/25">02</p>
              <p className="font-normal">MEET YOUR CREW</p>
            </div>
            {/*mobile */}
            <div className="md:hidden xl:hidden flex flex-col justify-center items-center w-[237px] h-[223px] gap-7">
              <div className="flex flex-col justify-center items-center">
                {src === "/crew/image-douglas-hurley.png" ? (
                  <Image
                    src={src}
                    width={177}
                    height={222}
                    alt={`${name} image`}
                    loading="lazy"
                  />
                ) : src === "/crew/image-mark-shuttleworth.png" ? (
                  <Image
                    src={src}
                    width={154}
                    height={222}
                    alt={`${name} image`}
                    loading="lazy"
                  />
                ) : src === "/crew/image-victor-glover.png" ? (
                  <Image
                    src={src}
                    width={181}
                    height={222}
                    alt={`${name} image`}
                    loading="lazy"
                  />
                ) : (
                  <Image
                    src={src}
                    width={226}
                    height={222}
                    alt={`${name} image`}
                    loading="lazy"
                  />
                )}
                <hr className="w-64 border-[1px] border-darkGray" />
              </div>
              {/*nav mobile */}
              <div className="flex gap-4 md:hidden ">
                <Link href="/crew/a">
                  <p
                    className={`h-2.5 w-2.5 rounded-full ${
                      router.pathname == "/crew/a"
                        ? "bg-white"
                        : "bg-white/20 hover:bg-white/60"
                    }`}
                  ></p>
                </Link>
                <Link href="/crew/b">
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
            <div className="flex flex-col gap-4 justify-center items-center text-center md:justify-between xl:justify-start xl:items-start xl:text-left  ">
              <div className="pt-2 xl:space-y-2">
                <p className="font-bellefair text-[16px] uppercase text-white/50 md:text-2xl">
                  {role}
                </p>
                <p className="titleName">{name}</p>
              </div>
              <p className="description px-3.5 md:px-24 xl:pl-0 xl:pr-44 xl:text-left">
                {bio}
              </p>
            </div>
            <div className="hidden md:flex md:flex-col md:justify-center md:items-center  xl:self-start ">
              <div className="hidden md:flex md:gap-4   ">
                <Link href="/crew/a">
                  <p
                    className={`h-2.5 w-2.5 rounded-full ${
                      router.pathname == "/crew/a"
                        ? "bg-white"
                        : "bg-white/20 hover:bg-white/60"
                    }`}
                  ></p>
                </Link>
                <Link href="/crew/b">
                  <p
                    className={`h-2.5 w-2.5 rounded-full ${
                      router.pathname == "/crew/b"
                        ? "bg-white"
                        : "bg-white/20 hover:bg-white/60"
                    }`}
                  ></p>
                </Link>
                <Link href="/crew/c">
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
              <div className="hidden md:block xl:hidden">
                {src === "/crew/image-douglas-hurley.png" ? (
                  <Image
                    src={src}
                    width={457}
                    height={577}
                    alt={`${name} image`}
                    loading="lazy"
                  />
                ) : src === "/crew/image-mark-shuttleworth.png" ? (
                  <Image
                    src={src}
                    width={367}
                    height={535}
                    alt={`${name} image`}
                    loading="lazy"
                  />
                ) : src === "/crew/image-victor-glover.png" ? (
                  <Image
                    src={src}
                    width={433}
                    height={532}
                    alt={`${name} image`}
                    loading="lazy"
                  />
                ) : (
                  <Image
                    src={src}
                    width={520}
                    height={532}
                    alt={`${name} image`}
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="xl:w-1/2 xl:flex xl:justify-center ">
          <div className="hidden xl:block xl:self-end">
            {src === "/crew/image-douglas-hurley.png" ? (
              <Image
                src={src}
                width={568}
                height={654}
                alt={`${name} image`}
                loading="lazy"
                className="pt-5 pl-5 pr-5"
              />
            ) : src === "/crew/image-mark-shuttleworth.png" ? (
              <Image src={src} width={453} height={654} alt={`${name} image`} loading="lazy" />
            ) : src === "/crew/image-victor-glover.png" ? (
              <Image src={src} width={554} height={681} alt={`${name} image`} loading="lazy" />
            ) : (
              <Image src={src} width={615} height={607} alt={`${name} image`} loading="lazy" />
            )}
          </div>
        </div>
      </div>
    </main>
  );
};

export default CrewCard;
