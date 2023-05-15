import React from "react";
import Head from "next/head";
import Header from "@/components/Header";
import TechnologyCard from "@/components/TechnologyCard";
import { getLocalData } from "@/lib/localData";
const index = ({ localData }) => {
  const techData = localData.technology.map((tech) => {
    const { name, images, description } = tech;
    const { portrait, landscape } = images;
    return { name, imageType: { portrait, landscape }, description };
  });
  const thirdTechData = techData[2];
  return (
    <>
      <Head>
        <title>Technology C</title>
        <meta
          name="description"
          content="This is sub technology C page in technology page of space tourism website"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="overflow-x-hidden overflow-y-scroll scroll-smooth">
        <TechnologyCard
          name={thirdTechData.name}
          srcLandscape={thirdTechData.imageType.landscape}
          srcPortait={thirdTechData.imageType.portrait}
          description={thirdTechData.description}
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
