import styled from "styled-components";
import Image from "next/image";
import seats2 from "../public/images/other/seats2.jpg";
import neueFischePhoto from "../public/images/other/neuefische.jpeg";
import ShareSection from "../components/ShareSection";
import MoviesSection from "../components/MoviesSection";
import data from "./api/tmdb.json";
import SeriesSection from "../components/SeriesSection";

export default function Main() {
  return (
    <>
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
        <MoviesSection
          genre={"Recommended Movies"}
          imgSrc1={data.movie[0].image}
          imgSrc2={data.movie[1].image}
          href1="/moviePages/predator"
          href2="/moviePages/womanking"
          name1={data.movie[0].title}
          name2={data.movie[1].title}
          year1={data.movie[0].year}
          year2={data.movie[1].year}
        />
        <SeriesSection
          genre={"Recommended Series"}
          imgSrc1={neueFischePhoto}
          imgSrc2={neueFischePhoto}
          href1="/"
          href2="/"
          name1={"Name"}
          name2={"Name"}
          year1={"Year"}
          year2={"Year"}
        />
        <ShareSection />
      </main>
    </>
  );
}

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
