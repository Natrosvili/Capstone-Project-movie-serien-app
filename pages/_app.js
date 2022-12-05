import GlobalStyles from "../styles/GlobalStyles";
import Header from "./header";
import Footer from "./footer";

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
