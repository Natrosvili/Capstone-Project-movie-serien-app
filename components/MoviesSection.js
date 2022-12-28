import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

export default function MoviesSection({
  genre,
  imgSrc1,
  imgSrc2,
  href1,
  href2,
  name1,
  name2,
  year1,
  year2,
}) {
  return (
    <>
      <StyledSection>
        <H2>{genre}</H2>
        <hr />
        <StyledArticle>
          <div>
            <Link className="link" href={href1}>
              <Photo src={imgSrc1} width={100} height={100} alt="movie image" />
            </Link>
            <Link className="link" href={href1}>
              <h3>{name1}</h3>
            </Link>
            <span>{year1}</span>
          </div>
          <div>
            <Link className="link" href={href2}>
              <Photo src={imgSrc2} width={100} height={100} alt="movie image" />
            </Link>
            <Link className="link" href={href2}>
              <h3>{name2}</h3>
            </Link>
            <span>{year2}</span>
          </div>
        </StyledArticle>
        <hr />
      </StyledSection>
    </>
  );
}

export const StyledSection = styled.section`
  text-align: center;
  margin: 0 3.75rem;
  height: 50rem;

  @media screen and (max-width: 430px) {
    margin: 0;
    height: 35rem;
  }
`;

export const H2 = styled.h2`
  color: #ffffff;
  font-style: italic;
  @media screen and (max-width: 430px) {
    text-align: center;
  }
`;

export const Photo = styled(Image)`
  width: 28vw;
  height: 75%;
  left: 2rem;
  top: 35rem;
  background: #d9d9d9;
  border-radius: 15px;

  @media screen and (max-width: 430px) {
    width: 34vw;
    height: 26vh;
  }
`;

export const StyledArticle = styled.article`
  grid-column: 3 / 3;
  display: flex;
  justify-content: space-around;
  margin: 3.125em;

  @media screen and (max-width: 430px) {
    justify-content: space-between;
    text-align: center;
  }

  & div {
    color: #ffffff;
    font-style: italic;
  }

  & .link {
    color: #ffffff;
    text-decoration: none;
  }
`;
