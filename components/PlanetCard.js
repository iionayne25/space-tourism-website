import React from "react";
import Image from "next/image";
import NavPlanet from "./NavPlanet";
import Link from "next/link";
import CrewCard from "./CrewCard";
import {
  Link as ScrollLink,
  Element,
  Events,
  animateScroll as scroll,
} from "react-scroll";
const PlanetCard = ({ name, src, description, distance, travel }) => {
  return (
    <>
      <div
        className="bg-dest-mobile flex flex-col h-[850px] gap-5  overflow-y-scroll overflow-x-hidden items-center pt-16 
    md:bg-dest-tablet md:h-[1024px] md:px-6"
      >
        <div className="flex gap-3 justify-center items-center md:pt-[136px] md:justify-start md:items-start md:w-full ">
          <p className="font-barlowCondensed font-bold text-white/30 text-[13px]   ">
            01
          </p>
          <p className="font-barlowCondensed  font-normal text-[13px] md:text-white ">
            PICK YOUR DESTINATION
          </p>
        </div>
        <div className="md:hidden">
          <Image src={src} width={170} height={170} alt="moon image" />
        </div>
        <div className="hidden md:block">
          <Image src={src} width={300} height={300} alt="moon image" />
        </div>
        <NavPlanet />
        <div className="flex flex-col justify-center items-center">
          <p className="font-bellefair text-white text-[55px] uppercase md:text-[80px]">
            {name}
          </p>
          <p className="font-barlow text-lightBlue text-[14px] px-4 text-center md:text-[16px] md:px-11">
            {description}
          </p>
        </div>

        <hr className="w-64 border-darkGray md:w-[600px]" />
        <div className="flex flex-col gap-8 justify-center md:flex-row md:gap-12">
          <div className="flex flex-col gap-1 justify-center text-center ">
            <p className="font-barlowCondensed text-lightBlue text-[12px] tracking-[2.36px] md:text-[14px]">
              AVG. DISTANCE
            </p>
            <p className="font-bellefair text-white text-[30px] uppercase md:text-[28px]">
              {distance}
            </p>
          </div>
          <div className="flex flex-col gap-1 justify-center  text-center">
            <p className="font-barlowCondensed text-lightBlue text-[12px] tracking-[2.36px] md:text-[14px]">
              EST. TRAVEL TIME
            </p>
            <p className="font-bellefair text-white text-[30px] uppercase md:text-[28px]">
              {travel}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanetCard;
