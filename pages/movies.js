import styled from "styled-components";
import neueFischePhoto from "../public/images/other/neuefische.jpeg";
import MoviesSection from "../components/MoviesSection";
import data from "./api/tmdb.json";

export default function Movies() {
  return (
    <>
      <section style={{backgroundColor: "#010101"}}>
        <H1>Movies</H1>
        <MoviesSection
          genre={"Action"}
          imgSrc1={data.movie[1].image}
          imgSrc2={neueFischePhoto}
          href1={"/moviePages/womanking"}
          href2={""}
          name1={data.movie[1].title}
          name2={"Name"}
          year1={data.movie[1].year}
          year2={"Year"}
        />
        <MoviesSection
          genre={"Adventure"}
          imgSrc1={neueFischePhoto}
          imgSrc2={neueFischePhoto}
          href1={""}
          href2={""}
          name1={"Name"}
          name2={"Name"}
          year1={"Year"}
          year2={"Year"}
        />
        <MoviesSection
          genre={"Comedy"}
          imgSrc1={neueFischePhoto}
          imgSrc2={neueFischePhoto}
          href1={""}
          href2={""}
          name1={"Name"}
          name2={"Name"}
          year1={"Year"}
          year2={"Year"}
        />
        <MoviesSection
          genre={"Drama"}
          imgSrc1={neueFischePhoto}
          imgSrc2={data.movie[0].image}
          href1={""}
          href2={"/moviePages/predator"}
          name1={"Name"}
          name2={data.movie[0].title}
          year1={"Year"}
          year2={data.movie[0].year}
        />
      </section>
    </>
  );
}

export const H1 = styled.h1`
  padding: 4rem 0 3rem 4rem;
  margin: 0;
  font-style: italic;

  @media screen and (max-width: 430px) {
    text-align: center;
    padding: 2rem;
  }
`;
