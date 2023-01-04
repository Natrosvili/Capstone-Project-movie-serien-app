import Link from "next/link";
import styled from "styled-components";
import {useEffect, useState} from "react";
// import data from "../pages/api/tmdb.json";

export default function MoviesSection({genre}) {
  const [filter, setFilter] = useState([]);
  const [data, setData] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/data");
        if (response.ok) {
          const data = await response.json();
          console.log(data);
          setData(data);
        } else {
          throw new Error(
            `Fetch fehlgeschlagen mit Status: ${response.status}`
          );
        }
      } catch (error) {
        alert(error.message);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    if (data) {
      if (genre !== "Recommended Movies" && genre !== "Recommended Series") {
        setFilter(
          data.movie.filter(item => {
            return item.genre.includes(genre);
          })
        );
      } else {
        setFilter(data.movie);
      }
    }
  }, [genre, data]);

  return (
    <>
      <StyledSection>
        <H2>{genre}</H2>
        <hr />
        <StyledArticle>
          {filter.map((object, index) => {
            return (
              <MovieContainer key={index}>
                <StyledLink href={`/moviePages/${object.id}`}>
                  <Photo src={object.image} alt="movie image" />
                </StyledLink>
                <StyledLink href={`/moviePages/${object.id}`}>
                  <h3>{object.title}</h3>
                </StyledLink>
                <span>{object.year}</span>
              </MovieContainer>
            );
          })}
        </StyledArticle>
        <hr />
      </StyledSection>
    </>
  );
}

export const StyledSection = styled.section`
  text-align: center;
  padding: 4rem 12rem;

  @media screen and (max-width: 430px) {
    padding: 4rem 0;
  }
`;

export const H2 = styled.h2`
  color: #ffffff;
  font-style: italic;

  @media screen and (max-width: 430px) {
    text-align: center;
    margin: 0;
  }
`;

export const Photo = styled.img`
  width: 100%;
  object-fit: contain;
  background: #d9d9d9;
  border-radius: 15px;
`;

export const StyledArticle = styled.article`
  gap: 10%;
  display: flex;
  overflow: scroll;

  @media screen and (max-width: 430px) {
    justify-content: space-between;
    text-align: center;
  }
`;

export const MovieContainer = styled.div`
  margin: 0 1rem;
  padding-bottom: 2rem;
  min-width: 30%;
  display: flex;
  flex-direction: column;
  gap: 8%;
  box-sizing: content-box;
  color: #ffffff;
  font-style: italic;

  & span {
    margin-top: auto;
  }
`;

export const StyledLink = styled(Link)`
  color: #ffffff;
  width: 100%;
  text-decoration: none;
`;
