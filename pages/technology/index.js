import React from 'react'
import Head from 'next/head'
import Header from '@/components/Header'
const index = () => {
  return (
    <>
    <Head>
        <title>Technology</title>
        <link rel="icon" href="/favicon.png" />
      </Head>
      <main className="flex min-h-[667px] flex-col  items-center bg-bg-home-mobile pt-5  ">
        <div className="w-full pb-10"><Header /></div>
      </main>
 
    </>
  )
}

export default index