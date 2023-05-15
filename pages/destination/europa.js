import React from "react";
import Header from "@/components/Header";
import Head from "next/head";
import DestinationCard from "@/components/DestinationCard";
import { getLocalData } from "@/lib/localData";
const europa = ({ localData }) => {
  
  const destinationData = localData.destinations.map((destination) => {
    const { name, images, description, distance, travel } = destination;
    const { png, webp } = images;
    return { name, imageUrl: { png, webp }, description, distance, travel };
  });
  const thirdDestinationData = destinationData[2];

  return (
    <>
      <Head>
        <title>Destination</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="min-h-screen bg-dest-mobile   ">
        <DestinationCard
          name={thirdDestinationData.name}
          src={thirdDestinationData.imageUrl.png}
          description={thirdDestinationData.description}
          distance={thirdDestinationData.distance}
          travel={thirdDestinationData.travel}
        />
      </main>
    </>
  );
};

export default europa;
export async function getStaticProps() {
  const localData = await getLocalData();
  return {
    props: { localData },
  };
}
