import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
import TechnologyCard from '@/components/TechnologyCard'
import { getLocalData } from '@/lib/localData'
const index = ({localData}) => {
  const techData = localData.technology.map(tech =>{
    const { name,images,description} =tech;
    const {portrait,landscape} = images
    return {name,imageType:{portrait,landscape},description}
  })
  const firstTechData = techData[0]
 
  return (
    <>
    <Head>
        <title>Technology</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="overflow-x-hidden overflow-y-scroll scroll-smooth">
      <TechnologyCard
        name={firstTechData.name}
        srcLandscape={firstTechData.imageType.landscape}
        srcPortait ={firstTechData.imageType.portrait}
        description={firstTechData.description}
        />
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