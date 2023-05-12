import React from 'react'
import Image from 'next/image'
import NavPlanet from './NavPlanet'
import Link from 'next/link'
import CrewCard from './CrewCard'
import {Link as ScrollLink,Element,Events, animateScroll as scroll} from 'react-scroll'
const PlanetCard = ({name,src,description,distance,travel}) => {
  
  return (
    <>
    <div className='bg-dest-mobile flex flex-col h-[850px] gap-5  overflow-y-scroll overflow-x-hidden items-center pt-16 '>
     <div className='flex gap-3 justify-center items-center'>
          <p className='title-condensed font-bold text-white/30 text-[13px] '>01</p>
          <p className='title-condensed font-normal text-[13px] '>PICK YOUR DESTINATION</p>
        </div>
        <div >
          <Image
          src={src}
          width={170}
          height ={170}
          alt='moon image'
          />
        </div>
        <NavPlanet/>
        <div className='flex flex-col justify-center items-center'>
        <p className='font-bellefair text-white text-[55px] uppercase'>{name}</p>
        <p className='font-barlow text-lightBlue text-[14px] px-4 text-center'>{description}</p>
        </div>
        
        <hr className='w-64 border-darkGray'/>
        <div className='flex flex-col gap-1 justify-center  text-center'>
            <p className='font-barlowCondensed text-lightBlue text-[12px] tracking-[2.36px]'>AVG. DISTANCE</p>
            <p className='font-bellefair text-white text-[30px] uppercase' >{distance}</p>
        </div>
        <div className='flex flex-col gap-1 justify-center  text-center'>
            <p className='font-barlowCondensed text-lightBlue text-[12px] tracking-[2.36px]'>EST. TRAVEL TIME</p>
            <p className='font-bellefair text-white text-[30px] uppercase' >{travel}</p>
        </div>
    </div>
   
    </>
    
  )
}

export default PlanetCard