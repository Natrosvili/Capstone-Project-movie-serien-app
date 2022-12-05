import GlobalStyles from "../styles/GlobalStyles";
import Footer from "../components/Footer";
import Header from "../components/Header";

export default function MyApp({Component, pageProps}) {
  return (
    <>
      <GlobalStyles />
      <Header>
        <Component {...pageProps} />
      </Header>
      <Footer />
    </>
  );
}
