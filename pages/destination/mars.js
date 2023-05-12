import React from 'react'
import Header from '@/components/Header'
import Head from 'next/head'
import PlanetCard from '@/components/PlanetCard'
import { getLocalData } from '@/lib/localData'
const mars = ({localData}) => {
  const destinationData = localData.destinations.map(destination =>{
    const {name,images,description,distance,travel} = destination
    const {png,webp} = images;
    return {name,imageUrl:{png,webp},description,distance,travel}
  })
 const secondeDestinationData = destinationData[1]
  return (
    <>
    <Head>
        <title>Destination</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="min-h-screen bg-dest-mobile pt-5  ">
        <div className="w-full pb-5"><Header /></div>
        <PlanetCard
          name={secondeDestinationData.name}
          src={secondeDestinationData.imageUrl.png}
          description={secondeDestinationData.description}
          distance={secondeDestinationData.distance}
          travel={secondeDestinationData.travel}/>

      </main>
 
    </>
  )
}

export default mars
export async function getStaticProps(){
  const localData = await getLocalData();
  return{
   props:{localData}
  }
 }