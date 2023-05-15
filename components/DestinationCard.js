import React from "react";
import Image from "next/image";
import NavDestination from "./NavDestination";

const DestinationCard = ({ name, src, description, distance, travel }) => {
  return (
    <>
      <main className="destinationContainer">
        <div className="topic pt-16 md:pt-28 xl:pt-[212px] xl:pl-[135px]">
          <p className="font-bold text-white/25">01</p>
          <p className="font-norma">PICK YOUR DESTINATION</p>
        </div>
        <div className="md:hidden">
          <Image src={src} width={170} height={170} alt="moon image" />
        </div>
        <div className="hidden md:block xl:hidden">
          <Image src={src} width={300} height={300} alt="moon image" />
        </div>

        <div className="xl:flex xl:flex-row xl:justify-center xl:gap-2">
          <div className="w-1/2 flex justify-center items-center">
            <Image
              src={src}
              width={445}
              height={445}
              alt="moon image"
              className="hidden xl:block"
            />
          </div>

          <div className="flex flex-col items-center justify-center xl:w-1/2 xl:justify-start xl:items-start xl:space-y-[35px] md:space-y-4 ">
            <NavDestination />
            <div className="flex flex-col justify-center items-center xl:justify-start xl:items-start">
              <p className="titleDestination">{name}</p>
              <p className="description px-4 pb-8 md:px-16 md:pb-5 xl:pl-0 xl:pr-36 ">
                {description}
              </p>
            </div>
            <hr className="w-64 border-darkGray text-center pb-5 md:pb-2 md:w-[600px] xl:w-[520px] xl:flex xl:justify-start xl:items-center " />
            <div className="flex flex-col gap-8 justify-center md:flex-row md:gap-12 xl:w-full xl:justify-start xl:items-start">
              <div className="flex flex-col gap-1 justify-center text-center xl:justify-start  xl:items-start ">
                <p className="attributeDestination">AVG. DISTANCE</p>
                <p className="attributeNumber">{distance}</p>
              </div>
              <div className="flex flex-col gap-1 justify-center  text-center">
                <p className="attributeDestination">EST. TRAVEL TIME</p>
                <p className="attributeNumber">{travel}</p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default DestinationCard;
