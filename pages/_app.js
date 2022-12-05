import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/Header";
import Footer from "../components/Footer";

function MyApp({Component, pageProps}) {
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

export default MyApp;
