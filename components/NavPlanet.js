import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
const NavPlanet = () => {
  const router = useRouter();
  return (
    <div>
      <div className="flex gap-3 px-12">
        <Link href="/destination">
          <div className="flex flex-col gap-1.5">
            <p
              className={`font-barlowCondensed text-[12px] tracking-[2.36px] 
             ${
               router.pathname == "/destination"
                 ? "text-white hover:text-lightBlue "
                 : "text-lightBlue hover:border-b-[5px] hover:pb-1.5 hover:border-white/50 "
             }`}
            >
              MOON
            </p>
            {router.pathname == "/destination" ? (
              <div className="flex justify-center items-center">
                <p className="bg-white w-full h-1"></p>
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>
        <Link href="/destination/mars">
          <div className="flex flex-col gap-1.5">
            <div className="flex flex-col gap-1">
              <p
                className={`font-barlowCondensed text-[12px] tracking-[2.36px] 
                ${
                  router.pathname == "/destination/mars"
                    ? "text-white"
                    : "text-lightBlue hover:border-b-[5px] hover:pb-1.5 hover:border-white/50  first-letter:"
                }`}
              >
                MARS
              </p>
            </div>

            {router.pathname == "/destination/mars" ? (
              <div className="flex justify-center items-center">
                <p className="bg-white h-[4px] "></p>
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>
        <Link href="/destination/europa">
          <div className="flex flex-col gap-1.5">
            <p
              className={`font-barlowCondensed text-[12px] tracking-[2.36px] ${
                router.pathname == "/destination/europa"
                  ? "text-white"
                  : "text-lightBlue hover:border-b-[5px] hover:pb-1.5 hover:border-white/50 "
              }`}
            >
              EUROPA
            </p>
            {router.pathname == "/destination/europa" ? (
              <div className="flex justify-center items-center">
                <p className="bg-white w-full h-[3px]"></p>
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>
        <Link href="/destination/titan">
          <div className="flex flex-col gap-1.5">
            <p
              className={`font-barlowCondensed text-[12px] tracking-[2.36px] ${
                router.pathname == "/destination/titan"
                  ? "text-white"
                  : "text-lightBlue hover:border-b-[5px] hover:pb-1.5 hover:border-white/50 "
              }`}
            >
              TITAN
            </p>
            {router.pathname == "/destination/titan" ? (
              <div className="flex justify-center items-center">
                <p className="bg-white w-full h-[3px]"></p>
              </div>
            ) : (
              ""
            )}
          </div>
        </Link>
      </div>
    </div>
  );
};

export default NavPlanet;
