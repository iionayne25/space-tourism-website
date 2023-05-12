import Image from "next/image";
import Head from "next/head";
import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Head>
        <title>Space Tourism</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <Header />
      <main className="flex min-h-[667px] flex-col  items-center bg-bg-home-mobile pt-20  ">

        <div className="flex flex-col justify-center items-center pb-[85px] space-y-2">
          <p className="title-condensed tracking-[2.7px] px-9">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className="title-bellefair">SPACE</p>
          <p className="description px-4">Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. 
            Well sit back, and relax because we’ll give you a truly out of this world experience!</p>
        </div>
        <Link href="/destination">
        <div className="flex flex-col  justify-center bg-white w-[150px] h-[150px] rounded-full ">
        <p className="text-center items-center font-bellefair text-[20px] tracking-[1.25px]">EXPLORE</p>
        </div>
        </Link>
        
        
        
      </main>
 
    </>
  );
}
