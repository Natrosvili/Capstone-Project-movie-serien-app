import GlobalStyles from "../styles/GlobalStyles";
import Header from "../components/header";
import Footer from "../components/footer";

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
