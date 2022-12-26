import Link from "next/link";
import {BackgroundImage} from "../pages/main";
import curtains from "../public/images/other/curtains.jpg";
import styled from "styled-components";
import {StyledIcon} from "./ShareSection";

export default function Moviepage({
  trailerUrl,
  img,
  title,
  year,
  plot,
  country,
  genre,
  release,
  director,
  production,
  buy1,
  buy2,
  buy3,
  buy4,
  buy5,
  buyIcon1,
  buyIcon2,
  buyIcon3,
  buyIcon4,
  buyIcon5,
  stream1,
  stream2,
  stream3,
  stream4,
  stream5,
  streamIcon1,
  streamIcon2,
  streamIcon3,
  streamIcon4,
  streamIcon5,
}) {
  return (
    <>
      <MainSection>
        <div>
          <BackgroundImage primary src={curtains} alt="curtains" />
          <StyledDiv>
            <FlexContainer>
              <iframe src={trailerUrl} title="video"></iframe>
            </FlexContainer>
            <ShareDiv>
              <Link href="https://www.facebook.com">
                <StyledIcon primary icon="logos:facebook" width="35" />
              </Link>
              <Link href="https://api.whatsapp.com">
                <StyledIcon primary icon="logos:whatsapp-icon" width="35" />
              </Link>
              <Link href="https://www.pinterest.com/">
                <StyledIcon primary icon="logos:pinterest" width="35" />
              </Link>
              <Link href="https://twitter.com">
                <StyledIcon primary icon="logos:twitter" width="35" />
              </Link>
            </ShareDiv>
          </StyledDiv>
        </div>
        <InfoDiv>
          <Container1>
            <ImageMovie src={img} alt="movie's Image" />
          </Container1>
          <Container2>
            <h1>
              {title} ({year})
            </h1>
            <p>{plot}</p>
          </Container2>
          <Container3>
            <table>
              <tbody>
                <tr>
                  <th>Country:</th>
                  <td>{country}</td>
                </tr>
                <tr>
                  <th>Genre:</th>
                  <td>{genre}</td>
                </tr>
                <tr>
                  <th>Release:</th>
                  <td>{release}</td>
                </tr>
                <tr>
                  <th>Director:</th>
                  <td>{director}</td>
                </tr>
                <tr>
                  <th>Production:</th>
                  <td>{production}</td>
                </tr>
              </tbody>
            </table>
          </Container3>
        </InfoDiv>
        <StreamingDiv>
          <H2>Watch Now</H2>
          <section>
            <GridContainer>
              <h3>Buy</h3>
              <StyledLink href={buy1}>
                <StyledIcon primary icon={buyIcon1} width="45" />
              </StyledLink>
              <StyledLink href={buy2}>
                <StyledIcon primary icon={buyIcon2} width="45" />
              </StyledLink>
              <StyledLink href={buy3}>
                <StyledIcon primary icon={buyIcon3} width="45" />
              </StyledLink>
              <StyledLink href={buy4}>
                <StyledIcon primary icon={buyIcon4} width="45" />
              </StyledLink>
              <StyledLink href={buy5}>
                <StyledIcon primary icon={buyIcon5} width="45" />
              </StyledLink>
            </GridContainer>
            <GridContainer>
              <h3>Stream</h3>
              <StyledLink href={stream1}>
                <StyledIcon primary icon={streamIcon1} width="45" />
              </StyledLink>
              <StyledLink href={stream2}>
                <StyledIcon primary icon={streamIcon2} width="45" />
              </StyledLink>
              <StyledLink href={stream3}>
                <StyledIcon primary icon={streamIcon3} width="45" />
              </StyledLink>
              <StyledLink href={stream4}>
                <StyledIcon primary icon={streamIcon4} width="45" />
              </StyledLink>
              <StyledLink href={stream5}>
                <StyledIcon primary icon={streamIcon5} width="45" />
              </StyledLink>
            </GridContainer>
          </section>
        </StreamingDiv>
      </MainSection>
    </>
  );
}

const MainSection = styled.section`
  background-color: #000000;
  padding-bottom: 1rem;
`;

const FlexContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledDiv = styled.div`
  width: 100vw;
  position: absolute;
  top: 12rem;
  display: grid;
  place-content: center;
  grid-template-columns: 100%;
  grid-template-row: 100%;
  row-gap: 5px;

  @media screen and (max-width: 430px) {
    top: 15rem;
  }

  & iframe {
    width: 60vw;
    height: 55vh;
    border-radius: 12px;
    border: none;
    z-index: 2;
    overflow: hidden;

    @media screen and (max-width: 430px) {
      width: 85vw;
      height: 30vh;
    }
  }
`;

const ShareDiv = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.21rem;

  @media screen and (max-width: 430px) {
    font-size: 0.666rem;
  }
`;

const InfoDiv = styled.div`
  display: grid;
  grid-template-rows: 60% 30%;
  grid-template-columns: repeat(2, 30%);
  place-content: center;
  height: 65vh;
  margin-top: 2rem;

  @media screen and (max-width: 430px) {
    grid-template-rows: 50% 32%;
    grid-template-columns: repeat(2, 50%);
  }
`;

const Container1 = styled.div`
  border-radius: 10px;
  display: grid;
  place-content: center;
`;

const ImageMovie = styled.img`
  width: 20rem;
  position: relative;
  top: 5rem;
  height: auto;
  z-index: 1;
  border-radius: 12px;

  @media screen and (max-width: 430px) {
    width: 12rem;
    height: 15rem;
    top: 0;
  }
`;

const Container2 = styled.div`
  & p {
    margin: 0;
    color: #808080;
    font-style: italic;
    font-size: 0.95rem;

    @media screen and (max-width: 430px) {
      font-size: 0.7rem;
    }
  }

  & H1 {
    margin: 0.8rem 0;
    font-style: italic;
    color: #808080;
    font-size: 1.35rem;

    @media screen and (max-width: 430px) {
      font-size: 1.25rem;
    }
  }
`;

const Container3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  grid-column: 2 / -1;
  color: #808080;
  font-style: italic;
  font-size: 0.95rem;

  @media screen and (max-width: 430px) {
    font-size: 0.7rem;
  }

  & td {
    padding-left: 4rem;

    @media screen and (max-width: 430px) {
      padding-left: 2rem;
    }
  }
`;

const StreamingDiv = styled.div`
  text-align: center;
  padding: 0;
  margin: 4rem;

  & section {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    border: 2px solid #ffe600;
    height: 12rem;
  }
`;

const H2 = styled.h2`
  color: #ffe600;
  font-size: 2rem;
  font-style: italic;
  font-weight: 2rem;
  margin: 2rem 0;
  padding: 0;
`;

const GridContainer = styled.div`
  border: 2px solid #ffe600;
  color: #ffe600;
`;

const StyledLink = styled(Link)`
  color: #ffe600;
`;
