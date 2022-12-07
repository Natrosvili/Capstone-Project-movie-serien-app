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
        <FirstSection>
          <Image
            style={{width: "100%", height: "85vh"}}
            src={seats}
            alt="seats as background image"
          />
          <H1>
            <em>Find Movies and Series</em>
          </H1>
          <Info>
            <em>
              searchfind.go - Just a better place to find Movies and Series for
              free. It allows you to find Movies and Series in high Quality.
              Just open searchfind.go, find your favorite Series and Movies, and
              have fun.
            </em>
          </Info>
        </FirstSection>
        <SecondAndThirdSection>
          <H2>Recommended Movies</H2>
          <hr />
          <ParentDiv>
            <div style={{color: "#d9d9d9"}}>
              <StyledLink href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </StyledLink>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </Link>
              <span>
                <em>Name</em>
              </span>
              <EditedSpanMin>
                <em>no min</em>
              </EditedSpanMin>
            </div>
            <div style={{color: "#d9d9d9"}}>
              <StyledLink href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </StyledLink>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </Link>
              <span>
                <em>Year</em>
              </span>
              <EditedSpanMin>
                <em>no min</em>
              </EditedSpanMin>
            </div>
          </ParentDiv>
          <hr />
        </SecondAndThirdSection>
        <SecondAndThirdSection>
          <H2>Recommended Series</H2>
          <hr />
          <ParentDiv>
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
              <EditedSpanEp>
                <em>EP Num</em>
              </EditedSpanEp>
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
              <EditedSpanEp>
                <em>EP Num</em>
              </EditedSpanEp>
            </div>
          </ParentDiv>
          <hr />
        </SecondAndThirdSection>
        <ForthSection>
          <ImageContainer1>
            <Img1
              src="/coupleWatchingMovie1.jpg"
              alt="photo of friends watching a movie/series"
            />
          </ImageContainer1>
          <ImageContainer2>
            <Img2
              src="/coupleWatchingMovie2.jpg"
              alt="photo of friends watching a movie/series"
            />
          </ImageContainer2>
          <ImageContainer3>
            <Img3
              src="/twoBoysOneGirl.jpg"
              alt="photo of friends watching a movie/series"
            />
          </ImageContainer3>

          <EditedDiv>
            <h3 style={{margin: 0, color: "#ffffff"}}>
              Share With Your Friends
            </h3>
            <p style={{color: "#ffffff"}}>
              Help me grow by sharing my website with your friends!
            </p>
            <StyledLink href="https://www.facebook.com">
              <StyledIcon icon="logos:facebook" width="35" />
            </StyledLink>
            <StyledLink href="https://www.instagram.com">
              <StyledIcon icon="mdi:instagram" width="35" />
            </StyledLink>
            <StyledLink href="https://api.whatsapp.com">
              <StyledIcon icon="logos:whatsapp-icon" width="35" />
            </StyledLink>
            <StyledLink href="https://www.pinterest.com/">
              <StyledIcon icon="logos:pinterest" width="35" />
            </StyledLink>
            <StyledLink href="https://twitter.com">
              <StyledIcon icon="logos:twitter" width="35" />
            </StyledLink>
          </EditedDiv>
        </ForthSection>
      </main>
    </>
  );
}

// first section of the main page
const FirstSection = styled.section`
  text-align: center;
  height: 50rem;

  @media screen and (max-width: 430px) {
    height: 40rem;
  }
`;

// h1 element
const H1 = styled.h1`
  padding: 0.5em;
  bottom: 30rem;
  position: relative;
  color: #ffffff;
`;

// first p element
const Info = styled.p`
  position: relative;
  bottom: 32.5rem;
  line-height: 145.2%;
  padding: 3.125rem;
  font-weight: 30rem;
  font-size: 1, 25rem;
  margin: 0 6.25rem;
  color: #ffffff;

  @media screen and (max-width: 430px) {
    margin: 0 2rem;
  }
`;

// div (parent)
const ParentDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3.125em;

  @media screen and (max-width: 430px) {
    justify-content: space-between;
    text-align: center;
  }
`;

// Image element (for the movies and series)
const Photo = styled(Image)`
  width: 100%;
  height: 75%;
  left: 2rem;
  top: 35rem;
  background: #d9d9d9;
  border-radius: 15px;

  @media screen and (max-width: 430px) {
    width: 80%;
    height: 80%;
  }
`;

// second and third section of the main page
const SecondAndThirdSection = styled.section`
  margin: 3rem 3.75rem;

  @media screen and (max-width: 430px) {
    margin: 0 0 3rem;
  }
`;

const H2 = styled.h2`
  @media screen and (max-width: 430px) {
    text-align: center;
  }
`;

// span element (for the number of minutes of a movie)
const EditedSpanMin = styled.span`
  position: relative;
  left: 9rem;

  @media screen and (max-width: 430px) {
    left: 1.2rem;
    font-size: 1rem;
  }
`;

// span element (for the number of episodes in a series)
const EditedSpanEp = styled.span`
  color: #ffffff;
  position: relative;
  left: 6.25rem;

  @media screen and (max-width: 430px) {
    left: 1rem;
    font-size: 1rem;
  }
`;

// Link element (for removing the underline)
const StyledLink = styled(Link)`
  text-decoration: none;
`;

// forth section element of the main page
const ForthSection = styled.section`
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

const ImageContainer1 = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / 1;
  display: flex;
  align-items: start;
`;

const Img1 = styled.img`
  width: 100%;
`;

const ImageContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center
  height: auto;
  grid-row: 2 / span 2;
  grid-column: 2 / 3;
`;

const Img2 = styled.img`
  width: 100%;
`;

const ImageContainer3 = styled.div`
  display: flex;
  justify-content: end;
  grid-row: 3 / span 2;
`;

const Img3 = styled.img`
  width: 100%;
`;

const EditedDiv = styled.div`
  grid-column: 3 / 3;
  grid-row: 2 / span 2;
  width: 100%;
  font-size: 1.21rem;

  @media screen and (max-width: 430px) {
    font-size: 0.666rem;
  }
`;

const StyledIcon = styled(Icon)`
  @media screen and (max-width: 430px) {
    width: 20%;
  }
`;
