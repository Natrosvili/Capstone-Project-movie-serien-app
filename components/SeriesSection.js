import {
  StyledSection,
  H2,
  StyledArticle,
  Photo,
  MovieContainer,
  StyledLink,
} from "./MoviesSection";
import {useEffect, useState} from "react";
// import data from "../pages/api/tmdb.json";

export default function SeriesSection({genre}) {
  const [filter, setFilter] = useState([]);
  const [data, setData] = useState(false);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch("/api/data");
        if (response.ok) {
          const data = await response.json();
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
          data.series.filter(item => {
            return item.genre.includes(genre);
          })
        );
      } else {
        setFilter(data.series);
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
                <StyledLink href={`/seriesPages/${object.id}`}>
                  <Photo src={object.image} alt="series' image" />
                </StyledLink>
                <StyledLink href={`/seriesPages/${object.id}`}>
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
