import React from "react";
import Header from "@/components/Header";
import Head from "next/head";
import PlanetCard from "@/components/PlanetCard";
import { getLocalData } from "@/lib/localData";

const titan = ({ localData }) => {
  const destinationData = localData.destinations.map((destination) => {
    const { name, images, description, distance, travel } = destination;
    const { png, webp } = images;
    return { name, imageUrl: { png, webp }, description, distance, travel };
  });
  const fourthDestinationData = destinationData[3];

  return (
    <>
      <Head>
        <title>Destination</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="min-h-screen bg-dest-mobile">
        <PlanetCard
          name={fourthDestinationData.name}
          src={fourthDestinationData.imageUrl.png}
          description={fourthDestinationData.description}
          distance={fourthDestinationData.distance}
          travel={fourthDestinationData.travel}
        />
      </main>
    </>
  );
};

export default titan;
export async function getStaticProps() {
  const localData = await getLocalData();
  return {
    props: { localData },
  };
}
