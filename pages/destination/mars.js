import React from "react";
import Header from "@/components/Header";
import Head from "next/head";
import DestinationCard from "@/components/DestinationCard";
import { getLocalData } from "@/lib/localData";
const mars = ({ localData }) => {
  const destinationData = localData.destinations.map((destination) => {
    const { name, images, description, distance, travel } = destination;
    const { png, webp } = images;
    return { name, imageUrl: { png, webp }, description, distance, travel };
  });
  const secondDestinationData = destinationData[1];

  return (
    <>
      <Head>
        <title>Mars</title>
        <meta
          name="description"
          content="This is sub destination mars page in destination page of space tourism website"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="overflow-x-hidden overflow-y-scroll scroll-smooth  ">
        <DestinationCard
          name={secondDestinationData.name}
          src={secondDestinationData.imageUrl.png}
          description={secondDestinationData.description}
          distance={secondDestinationData.distance}
          travel={secondDestinationData.travel}
        />
      </main>
    </>
  );
};

export default mars;
export async function getStaticProps() {
  const localData = await getLocalData();
  return {
    props: { localData },
  };
}
