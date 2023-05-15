import React from "react";
import Image from "next/image";
import NavDestination from "./NavDestination";

const DestinationCard = ({ name, src, description, distance, travel }) => {
  return (
    <>
      <main
        className="bg-dest-mobile flex flex-col w-[375px] h-[825px] gap-4 md:gap-8  overflow-y-scroll overflow-x-hidden items-center 
    md:bg-dest-tablet md:w-screen md:h-[1024px] md:px-8 xl:bg-dest-desktop xl:w-[1440px] xl:h-[900px]"
      >
        <div className="topic pt-16 md:pt-28">
          <p className="font-bold text-white/25">01</p>
          <p className="font-norma">PICK YOUR DESTINATION</p>
        </div>
        <div className="md:hidden">
          <Image src={src} width={170} height={170} alt="moon image" />
        </div>
        <div className="hidden md:block">
          <Image src={src} width={300} height={300} alt="moon image" />
        </div>
        <NavDestination />
        <div className="flex flex-col justify-center items-center">
          <p className="titleDestination">{name}</p>
          <p className="description px-4 md:px-16">{description}</p>
        </div>
        <hr className="w-64 border-darkGray md:w-[600px]" />
        <div className="flex flex-col gap-8 justify-center md:flex-row md:gap-12">
          <div className="flex flex-col gap-1 justify-center text-center ">
            <p className="attributeDestination">AVG. DISTANCE</p>
            <p className="attributeNumber">{distance}</p>
          </div>
          <div className="flex flex-col gap-1 justify-center  text-center">
            <p className="attributeDestination">EST. TRAVEL TIME</p>
            <p className="attributeNumber">{travel}</p>
          </div>
        </div>
      </main>
    </>
  );
};

export default DestinationCard;
