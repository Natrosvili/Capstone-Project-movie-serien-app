import Head from "next/head";
import Header from "./Header";
import Footer from "./Footer"

export default function Home() {
  return (
    <>
      <Head>
        <title>
          Search Find Go! - Find Your Favourite Movies and Series in
          Milliseconds
        </title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />

      <Footer/>
    </>
  );
}
