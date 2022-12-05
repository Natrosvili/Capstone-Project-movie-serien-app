import GlobalStyles from "../styles/GlobalStyles";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

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
