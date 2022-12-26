import styled from "styled-components";
import neueFischePhoto from "../public/images/other/neuefische.jpeg";
import MoviesSection from "../components/MoviesSection";

export default function Movies() {
  return (
    <>
      <section style={{backgroundColor: "#010101"}}>
        <H1>Movies</H1>
        <MoviesSection
          genre={"Action"}
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
          genre={"Comendy"}
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
          imgSrc2={neueFischePhoto}
          href1={""}
          href2={""}
          name1={"Name"}
          name2={"Name"}
          year1={"Year"}
          year2={"Year"}
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
