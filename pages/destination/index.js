import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import Image from 'next/image'
import Link from 'next/link'
import {Link as ScrollLink,Element,Events, animateScroll as scroll} from 'react-scroll'
import PlanetCard from '@/components/PlanetCard'
import { getLocalData } from '/lib/localData.js';
const index = ({localData}) => {
  console.log(localData)
  const destinationData = localData.destinations.map(destination =>{
    const {name,images,description,distance,travel} = destination
    const {png,webp} = images;
    return {name,imageUrl:{png,webp},description,distance,travel}
  })
 console.log(destinationData)
 const firstDestinationData = destinationData[0]
 console.log(firstDestinationData)
  return (
    <>
    <Head>
        <title>Destination</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="bg-dest-mobile pt-5  ">
        <div className="w-full pb-5"><Header /></div>
        
          <PlanetCard
          name={firstDestinationData.name}
          src={firstDestinationData.imageUrl.png}
          description={firstDestinationData.description}
          distance={firstDestinationData.distance}
          travel={firstDestinationData.travel}/>

          
      </main>
 
    </>
  )
}

export default index
export async function getStaticProps(){
 const localData = await getLocalData();
 return{
  props:{localData}
 }
}