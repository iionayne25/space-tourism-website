import React from "react";
import Header from "@/components/Header";
import Head from "next/head";
import PlanetCard from "@/components/PlanetCard";
import { getLocalData } from "@/lib/localData";
const mars = ({ localData }) => {
  const destinationData = localData.destinations.map((destination) => {
    const { name, images, description, distance, travel } = destination;
    const { png, webp } = images;
    return { name, imageUrl: { png, webp }, description, distance, travel };
  });
  const secondDestinationData = destinationData[1];

  const crewData = localData.crew.map((crew) => {
    const { name, images, role, bio } = crew;
    const { png, webp } = images;
    return { name, imageUrl: { png, webp }, role, bio };
  });
  const secondCrewData = crewData[1];

  const techData = localData.technology.map((tech) => {
    const { name, images, description } = tech;
    const { portrait, landscape } = images;
    return { name, imageType: { portrait, landscape }, description };
  });
  const secondeTechData = techData[1];
  return (
    <>
      <Head>
        <title>Destination</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="overflow-x-hidden overflow-y-scroll scroll-smooth  ">
        <PlanetCard
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
