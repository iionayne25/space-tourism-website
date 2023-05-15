import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import CrewCard from "@/components/CrewCard";
import { getLocalData } from "@/lib/localData";
const index = ({ localData }) => {
  const crewData = localData.crew.map((crew) => {
    const { name, images, role, bio } = crew;
    const { png, webp } = images;
    return { name, imageUrl: { png, webp }, role, bio };
  });
  const secondCrewData = crewData[1];
  return (
    <>
      <Head>
        <title>Crew B</title>
        <meta
          name="description"
          content="This is sub crew A page in crew page of space tourism website"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="overflow-x-hidden overflow-y-scroll scroll-smooth">
        <CrewCard
          name={secondCrewData.name}
          src={secondCrewData.imageUrl.png}
          role={secondCrewData.role}
          bio={secondCrewData.bio}
        />
      </main>
    </>
  );
};

export default index;
export async function getStaticProps() {
  const localData = await getLocalData();
  return {
    props: { localData },
  };
}
