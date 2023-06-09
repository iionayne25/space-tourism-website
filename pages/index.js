import Head from "next/head";
import Header from "@/components/Header";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
        <meta
          name="description"
          content="This is home page of space tourism website"
        />
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="homeContainer">
        <div className="flex flex-col justify-center items-center pb-[85px]  xl:w-1/2 xl:pb-0 xl:pt-14">
          <p className="text-[12px] font-barlowCondensed tracking-[2.7px] text-lightBlue text-center px-9 xl:text-[20px] xl:pl-32 xl:w-full xl:text-left ">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className="font-bellefair text-white text-[80px] md:text-[150px] ">
            SPACE
          </p>
          <p className="description px-4 md:px-32 xl:pl-32 xl:pr-14">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <div className="xl:w-1/2 xl:flex xl:justify-center xl:items-center xl:pt-40 xl:pl-24 ">
          <Link href="/destination/moon">
            <div className="flex flex-col justify-center bg-white w-[150px] h-[150px] rounded-full md:w-[242px] md:h-[242px] hover:ring-[60px] hover:ring-white/10 xl:w-[274px] xl:h-[274px]  ">
              <p className="text-center items-center font-bellefair text-[20px] tracking-[1.25px] md:text-[32px] md:tracking-[2px]  ">
                EXPLORE
              </p>
            </div>
          </Link>
        </div>
      </main>
    </>
  );
}
