import Head from "next/head";
import Header from "../components/Header";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Head>
        <title>Search Find Go!</title>
        <meta
          name="description"
          content="Find Your Favourite Movies and Series in Milliseconds"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <Footer />
    </>
  );
}
