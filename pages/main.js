import styled from "styled-components";
import Image from "next/image";
import seats from "../public/seats.png";
import neueFischePhoto from "../public/neuefische.jpeg";
import Link from "next/link";
import {Icon} from "@iconify/react";

export default function Main() {
  return (
    <>
      <main style={{backgroundColor: "#010101"}}>
        <StyledSection heightMedia={"40rem"}>
          <Image
            style={{width: "100%", height: "75vh"}}
            src={seats}
            alt="seats as background image"
          />
          <H1>Find Movies and Series</H1>
          <Info>
            searchfind.go - Just a better place to find Movies and Series for
            free. It allows you to find Movies and Series in high Quality. Just
            open searchfind.go, find your favorite Series and Movies, and have
            fun.
          </Info>
        </StyledSection>
        <StyledSection
          margin={"2rem 3.75rem"}
          marginMedia={"0"}
          heightMedia={"30rem"}
        >
          <H2>Recommended Movies</H2>
          <hr />
          <StyledDiv1>
            <div style={{color: "#d9d9d9", fontStyle: "italic"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>Name</h3>
              </Link>
              <span>Year</span>
              <MinSpan>no min</MinSpan>
            </div>
            <div style={{color: "#d9d9d9", fontStyle: "italic"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>Name</h3>
              </Link>
              <span>Year</span>
              <MinSpan>no min</MinSpan>
            </div>
          </StyledDiv1>
          <hr />
        </StyledSection>
        <StyledSection heightMedia={"25rem"}>
          <H2>Recommended Series</H2>
          <hr />
          <StyledDiv1>
            <div style={{color: "#d9d9d9"}}>
              <Link href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </Link>
              <span>
                <em>SS Num</em>
              </span>
              <EpSpan>EP Num</EpSpan>
            </div>
            <div style={{color: "#d9d9d9"}}>
              <Link href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </Link>
              <span>
                <em>SS Num</em>
              </span>
              <EpSpan>EP Num</EpSpan>
            </div>
          </StyledDiv1>
          <hr />
        </StyledSection>
        <GridSection>
          <ImageContainer1>
            <Img
              src="/coupleWatchingMovie1.jpg"
              alt="photo of friends watching a movie/series"
            />
          </ImageContainer1>
          <ImageContainer2>
            <Img
              src="/coupleWatchingMovie2.jpg"
              alt="photo of friends watching a movie/series"
            />
          </ImageContainer2>
          <ImageContainer3>
            <Img
              src="/twoBoysOneGirl.jpg"
              alt="photo of friends watching a movie/series"
            />
          </ImageContainer3>

          <StyledDiv2>
            <h3 style={{margin: 0, color: "#ffffff"}}>
              Share With Your Friends
            </h3>
            <p style={{color: "#ffffff"}}>
              Help me grow by sharing my website with your friends!
            </p>
            <Link
              style={{textDecoration: "none"}}
              href="https://www.facebook.com"
            >
              <StyledIcon icon="logos:facebook" width="35" />
            </Link>
            <Link
              style={{textDecoration: "none"}}
              href="https://www.instagram.com"
            >
              <StyledIcon icon="mdi:instagram" width="35" />
            </Link>
            <Link
              style={{textDecoration: "none"}}
              href="https://api.whatsapp.com"
            >
              <StyledIcon icon="logos:whatsapp-icon" width="35" />
            </Link>
            <Link
              style={{textDecoration: "none"}}
              href="https://www.pinterest.com/"
            >
              <StyledIcon icon="logos:pinterest" width="35" />
            </Link>
            <Link style={{textDecoration: "none"}} href="https://twitter.com">
              <StyledIcon icon="logos:twitter" width="35" />
            </Link>
          </StyledDiv2>
        </GridSection>
      </main>
    </>
  );
}

const H1 = styled.h1`
  padding: 0.5em;
  bottom: 30rem;
  position: relative;
  color: #ffffff;
  text-align: center;
  font-style: italic;
`;

export const H2 = styled.h2`
  color: #ffffff;
  font-style: italic;
  @media screen and (max-width: 430px) {
    text-align: center;
  }
`;

const Info = styled.p`
  position: relative;
  bottom: 32.5rem;
  line-height: 145.2%;
  padding: 3.125rem;
  font-weight: 30rem;
  font-size: 1, 25rem;
  margin: 0 6.25rem;
  color: #ffffff;
  font-style: italic;

  @media screen and (max-width: 430px) {
    margin: 0 2rem;
  }
`;

export const StyledSection = styled.section`
  text-align: center;
  margin: ${props => props.margin};
  height: 50rem;

  @media screen and (max-width: 430px) {
    margin: ${props => props.marginMedia};
    height: ${props => props.heightMedia};
  }
`;

export const Photo = styled(Image)`
  width: 100%;
  height: 75%;
  left: 2rem;
  top: 35rem;
  background: #d9d9d9;
  border-radius: 15px;

  @media screen and (max-width: 430px) {
    width: 90%;
    height: 80%;
  }
`;

export const StyledDiv1 = styled.div`
  grid-column: 3 / 3;
  display: flex;
  justify-content: space-around;
  margin: 3.125em;

  @media screen and (max-width: 430px) {
    justify-content: space-between;
    text-align: center;
  }
`;

export const StyledDiv2 = styled.div`
  grid-column: 3 / 3;
  grid-row: 2 / span 2;
  width: 100%;
  font-size: 1.21rem;

  @media screen and (max-width: 430px) {
    font-size: 0.666rem;
  }
`;

export const MinSpan = styled.span`
  position: relative;
  left: 9rem;

  @media screen and (max-width: 430px) {
    left: 1.2rem;
    font-size: 1rem;
  }
`;

export const EpSpan = styled.span`
  color: #ffffff;
  position: relative;
  left: 6.25rem;
  font-style: italic;

  @media screen and (max-width: 430px) {
    left: 0.4rem;
    font-size: 1rem;
  }
`;

export const Img = styled.img`
  width: 100%;
`;

export const StyledIcon = styled(Icon)`
  @media screen and (max-width: 430px) {
    width: 20%;
  }
`;

export const ImageContainer1 = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / 1;
  display: flex;
  align-items: start;
`;

export const ImageContainer2 = styled.div`
  display: flex;
align-items: center;
justify-content: center
height: auto;
grid-row: 2 / span 2;
grid-column: 2 / 3;
`;

export const ImageContainer3 = styled.div`
  display: flex;
  justify-content: end;
  grid-row: 3 / span 2;
`;
export const GridSection = styled.section`
  text-align: center;
  display: grid;
  place-content: center;
  grid-template-rows: repeat(4, 25%);
  grid-template-columns: repeat(3, 20%);
  column-gap: 10px;
  padding: 2em 2em;
  width: 100%;
  height: auto;

  @media screen and (max-width: 430px) {
    grid-template-rows: repeat(4, 20%);
    grid-template-columns: repeat(3, 35%);
    row-gap: 2px;
  }
`;
