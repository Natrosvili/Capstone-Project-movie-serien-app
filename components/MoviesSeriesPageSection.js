import styled, {keyframes} from "styled-components";
import {BackgroundImage} from "../pages/main";
import Link from "next/link";
import curtains from "../public/images/other/curtains.jpg";
import {StyledIcon} from "./ShareSection";
import SocialMediaSection1 from "./SocialMediaSection1";

export default function MoviesSeriesPageSection({data, altImage, text}) {
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
            <ImageMovie src={data?.image} alt={altImage} />
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
          <H2>{text}</H2>
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

const iframeAnimation = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
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
    top: 11.5rem;
  }

  & iframe {
    width: 60vw;
    height: 55vh;
    border-radius: 12px;
    border: none;
    z-index: 2;
    overflow: hidden;
    animation: ${iframeAnimation};
    animatin-duration: 1s;

    @media screen and (max-width: 430px) {
      width: 85vw;
      height: 30vh;
    }
  }
`;

const InfoSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 30%);
  grid-template-rows: 55% 80%;
  place-content: center;
  height: 70vh;
  margin: 10rem 0;

  @media screen and (max-width: 430px) {
    grid-template-rows: 50% 40%;
    grid-template-columns: repeat(2, 50%);
    margin: 6rem 1rem;
    column-gap: 1rem;
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
  border-radius: 12px;
  object-fit: cover;

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
  justify-content: end;
  align-items: end;
  flex-direction: column;
  line-height: 2rem;
  color: #808080;
  font-style: italic;
  font-size: 0.95rem;
  margin-top: 2.2rem;

  @media screen and (max-width: 430px) {
    font-size: 0.6rem;
    line-height: 1.2rem;
    justify-content: center;
  }

  & td {
    padding-left: 1rem;
  }
`;

const StreamingSection = styled.section`
  text-align: center;
  padding: 0;
  margin: 8rem;

  & section {
    display: grid;
    grid-template-columns: repeat(2, 50%);
    border: 2px solid #ffe600;
    height: 12rem;
  }

  @media screen and (max-width: 430px) {
    margin: 3rem 1.5rem;
  }
`;

const H2 = styled.h2`
  color: #ffe600;
  font-size: 1.8rem;
  font-style: italic;
  font-weight: 2rem;
  margin: 0.5rem 0;
  padding: 0;
`;

const GridContainer = styled.article`
  border: 2px solid #ffe600;
  color: #ffe600;

  /* @media screen and (max-width: 430px){
    margin-top: 2rem;
  } */
`;

const StyledLink = styled(Link)`
  color: #ffe600;
`;
