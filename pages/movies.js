import styled from "styled-components";
// import neueFischePhoto from "../public/images/other/neuefische.jpeg";
import MoviesSection from "../components/MoviesSection";
import data from "./api/tmdb.json";

export default function Movies() {
  console.log(data);
  return (
    <>
      <section style={{backgroundColor: "#010101"}}>
        <H1>Movies</H1>
        <MoviesSection genre="Action" data={data} />
        <MoviesSection genre="Adventure" data={data} />
        <MoviesSection genre="Comedy" data={data} />
        <MoviesSection genre="Drama" data={data} />
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
