import styled from "styled-components";
import MoviesSection from "../components/MoviesSection";

export default function Movies() {
  return (
    <>
      <section style={{backgroundColor: "#010101"}}>
        <H1>Movies</H1>
        <MoviesSection genre="Action" />
        <MoviesSection genre="Adventure" />
        <MoviesSection genre="Comedy" />
        <MoviesSection genre="Drama" />
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
