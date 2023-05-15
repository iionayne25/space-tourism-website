import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import DestinationCard from "@/components/DestinationCard";
import { getLocalData } from "/lib/localData.js";
const index = ({ localData }) => {
  const destinationData = localData.destinations.map((destination) => {
    const { name, images, description, distance, travel } = destination;
    const { png, webp } = images;
    return { name, imageUrl: { png, webp }, description, distance, travel };
  });
  const firstDestinationData = destinationData[0];

  return (
    <div>
      <Head>
        <title>Moon</title>
        <meta
          name="description"
          content="This is sub destination moon page in destination page of space tourism website"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="overflow-x-hidden overflow-y-scroll scroll-smooth">
        <DestinationCard
          name={firstDestinationData.name}
          src={firstDestinationData.imageUrl.png}
          description={firstDestinationData.description}
          distance={firstDestinationData.distance}
          travel={firstDestinationData.travel}
        />
      </main>
    </div>
  );
};

export default index;
export async function getStaticProps() {
  const localData = await getLocalData();
  return {
    props: { localData },
  };
}
