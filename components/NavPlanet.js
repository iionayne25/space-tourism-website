import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
const NavPlanet = () => {
    const router = useRouter()
  return (
    <div>
        <div className='flex gap-3 px-12'>
          <Link href="/destination">
            <div className='flex flex-col gap-1.5'>
            <p className={`font-barlowCondensed text-[12px] tracking-[2.36px] ${router.pathname == "/destination" ? "text-white":"text-lightBlue"}`}  >
            MOON
            </p>
            {router.pathname =="/destination"?
            <div className='flex justify-center items-center'>
                <p className='bg-white w-full h-[3px]'></p>
            </div>:""}
            </div>
            
          </Link>
          <Link href="/destination/mars">
            <div className='flex flex-col gap-1.5'>
            <p className={`font-barlowCondensed text-[12px] tracking-[2.36px] ${router.pathname == "/destination/mars" ? "text-white":"text-lightBlue"}`}  >
            MARS
            </p>
            {router.pathname =="/destination/mars"?
            <div className='flex justify-center items-center'>
                <p className='bg-white w-full h-[3px]'></p>
            </div>:""}
            </div>
            
          </Link>
          <Link href="/destination/europa">
          <div className='flex flex-col gap-1.5'>
          <p className={`font-barlowCondensed text-[12px] tracking-[2.36px] ${router.pathname == "/destination/europa" ? "text-white":"text-lightBlue"}`}  >
            EUROPA
            </p>
            {router.pathname =="/destination/europa"?
            <div className='flex justify-center items-center'>
                <p className='bg-white w-full h-[3px]'></p>
            </div>:""}
          </div>
            
          </Link>
          <Link href="/destination/titan">
          <div className='flex flex-col gap-1.5'>
          <p className={`font-barlowCondensed text-[12px] tracking-[2.36px] ${router.pathname == "/destination/titan" ? "text-white":"text-lightBlue"}`}   >
            TITAN
            </p>
            {router.pathname =="/destination/titan"?
            <div className='flex justify-center items-center'>
                <p className='bg-white w-full h-[3px]'></p>
            </div>:""}
          </div>
           
          </Link>
        </div>
    </div>
  )
}

export default NavPlanet