import Link from "next/link";
import {BackgroundImage} from "../pages/main";
import curtains from "../public/images/other/curtains.jpg";
import styled from "styled-components";
import {StyledIcon} from "./ShareSection";
import SocialMediaSection1 from "./SocialMediaSection1";

export default function Moviepage({data}) {
  function getIcon(provider) {
    if (provider.includes("apple")) {
      return "simple-icons:appletv";
    } else if (provider.includes("amazon")) {
      return "ri:amazon-fill";
    } else if (provider.includes("youtube")) {
      return "carbon:logo-youtube";
    } else if (provider.includes("google")) {
      return "mdi:google-play";
    } else if (provider.includes("netflix")) {
      return "mdi:netflix";
    } else if (provider.includes("rakuten")) {
      return "simple-icons:rakuten";
    } else if (provider.includes("sky")) {
      return "simple-icons:sky";
    } else if (provider.includes("disneyplus")) {
      return "tabler:brand-disney";
    } else {
      return "";
    }
  }

  return (
    <>
      <MainSection>
        <div>
          <BackgroundImage primary src={curtains} alt="curtains" />
          <StyledSection>
            <FlexContainer>
              <iframe src={data?.trailer} title="video"></iframe>
            </FlexContainer>
            <SocialMediaSection1 />
          </StyledSection>
        </div>
        <InfoSection>
          <Container1>
            <ImageMovie src={data?.image} alt="movie's Image" />
          </Container1>
          <Container2>
            <h1>
              {data?.title} ({data?.year})
            </h1>
            <p>{data?.plot}</p>
          </Container2>
          <Container3>
            <table>
              <tbody>
                <tr>
                  <th>Country:</th>
                  <td>{data?.country}</td>
                </tr>
                <tr>
                  <th>Genre:</th>
                  <td>{data?.genre}</td>
                </tr>
                <tr>
                  <th>Release:</th>
                  <td>{data?.release}</td>
                </tr>
                <tr>
                  <th>Director:</th>
                  <td>{data?.director}</td>
                </tr>
                <tr>
                  <th>Production:</th>
                  <td>{data?.production}</td>
                </tr>
              </tbody>
            </table>
          </Container3>
        </InfoSection>
        <StreamingSection>
          <H2>Watch Now</H2>
          <section>
            <GridContainer>
              <h3>Buy</h3>
              {data?.providerBuy?.map((link, index) => {
                return (
                  <StyledLink key={index} href={link}>
                    <StyledIcon primary icon={getIcon(link)} width="50" />
                  </StyledLink>
                );
              })}
            </GridContainer>
            <GridContainer>
              <h3>Stream</h3>
              {data?.providerRent?.map((link, index) => {
                return (
                  <StyledLink key={index} href={link}>
                    <StyledIcon primary icon={getIcon(link)} width="50" />
                  </StyledLink>
                );
              })}
            </GridContainer>
          </section>
        </StreamingSection>
      </MainSection>
    </>
  );
}

const MainSection = styled.section`
  background-color: #000000;
  padding-bottom: 1rem;
`;

const FlexContainer = styled.section`
  display: flex;
  justify-content: center;
`;

const StyledSection = styled.section`
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

const InfoSection = styled.section`
  display: grid;
  grid-template-rows: 60% 30%;
  grid-template-columns: repeat(2, 30%);
  place-content: center;
  height: 65vh;
  margin-top: 2rem;

  @media screen and (max-width: 430px) {
    grid-template-rows: 40% 38%;
    grid-template-columns: repeat(2, 50%);
    margin: 1rem;
    column-gap: 10px;
  }
`;

const Container1 = styled.section`
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

const Container2 = styled.section`
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

const Container3 = styled.section`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  line-height: 1rem;
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

const StreamingSection = styled.section`
  text-align: center;
  padding: 0;
  margin: 1.2rem;

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

const GridContainer = styled.article`
  border: 2px solid #ffe600;
  color: #ffe600;
`;

const StyledLink = styled(Link)`
  color: #ffe600;
`;
