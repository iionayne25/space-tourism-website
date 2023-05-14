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
      <main className="flex min-h-[667px] flex-col  items-center bg-home-mobile pt-20 md:min-h-[1024px] md:bg-home-tablet md:pt-[202px]">
        <div className="flex flex-col justify-center items-center pb-[85px] space-y-2">
          <p className="subheading1 text-white  text-center  px-9">
            SO, YOU WANT TO TRAVEL TO
          </p>
          <p className=" text-white text-[80px] md:text-[150px] ">SPACE</p>
          <p className="description px-4 md:px-32">
            Let’s face it; if you want to go to space, you might as well
            genuinely go to outer space and not hover kind of on the edge of it.
            Well sit back, and relax because we’ll give you a truly out of this
            world experience!
          </p>
        </div>
        <Link href="/destination">
          <div className="flex flex-col  justify-center bg-white w-[150px] h-[150px] rounded-full md:w-[242px] md:h-[242px] hover:ring-[60px] hover:ring-white/10 ">
            <p className="text-center items-center font-bellefair text-[20px] tracking-[1.25px] md:text-[32px] md:tracking-[2px]">
              EXPLORE
            </p>
          </div>
        </Link>
      </main>
    </>
  );
}
