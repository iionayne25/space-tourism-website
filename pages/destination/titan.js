import React from "react";
import Header from "@/components/Header";
import Head from "next/head";
import DestinationCard from "@/components/DestinationCard";
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
        <title>Titan</title>
        <meta
          name="description"
          content="This is sub destination titan page in destination page of space tourism website"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="min-h-screen bg-dest-mobile">
        <DestinationCard
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
