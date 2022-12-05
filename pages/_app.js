import GlobalStyles from "../styles/GlobalStyles";
import Footer from "./footer";
import Header from "./header";

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
