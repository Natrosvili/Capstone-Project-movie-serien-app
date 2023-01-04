import styled, {keyframes} from "styled-components";
import Image from "next/image";
import seats2 from "../public/images/other/seats2.jpg";
import ShareSection from "../components/ShareSection";
import MoviesSection from "../components/MoviesSection";
import SeriesSection from "../components/SeriesSection";

export default function Main() {
  return (
    <>
      <link rel="icon" href="/images/other/favicon.ico" />
      <main style={{backgroundColor: "#010101"}}>
        <StyledSection heightMedia={"40rem"}>
          <BackgroundImage src={seats2} alt="seats as background image" />
          <h1>Find Movies and Series</h1>
          <p>
            searchfind.go - Just a better place to find Movies and Series for
            free. It allows you to find Movies and Series in high Quality. Just
            open searchfind.go, find your favorite Series and Movies, and have
            fun.
          </p>
        </StyledSection>
        <MoviesSection genre="Recommended Movies" />
        <SeriesSection genre="Recommended Series" />
        <ShareSection />
      </main>
    </>
  );
}

const infoAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const StyledSection = styled.section`
  text-align: center;
  margin: ${props => props.margin};
  height: 50rem;

  @media screen and (max-width: 430px) {
    margin: ${props => props.marginMedia};
    height: ${props => props.heightMedia};
  }

  & h1 {
    padding: 0.5em;
    bottom: 30rem;
    position: relative;
    color: #ffffff;
    text-align: center;
    font-style: italic;
    animation: ${infoAnimation};
    animation-duration: 2.5s;
  }

  & p {
    position: relative;
    bottom: 32.5rem;
    line-height: 145.2%;
    padding: 3.125rem;
    font-weight: 30rem;
    font-size: 1, 25rem;
    margin: 0 6.25rem;
    color: #ffffff;
    font-style: italic;
    animation: ${infoAnimation};
    animation-duration: 2.5s;

    @media screen and (max-width: 430px) {
      margin: 0 2rem;
    }
  }
`;

export const BackgroundImage = styled(Image)`
  width: 100vw;
  height: ${props => (props.primary ? "90vh" : "98vh")};

  @media screen and (max-width: 430px) {
    width: 100vw;
    height: ${props => (props.primary ? "50vh" : "75vh")};
  }
`;
