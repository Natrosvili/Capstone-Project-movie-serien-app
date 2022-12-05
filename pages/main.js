import styled from "styled-components";
import Image from "next/image";
import seats from "../public/seats.png";
import twoBoysOneGirl from "../public/twoBoysOneGirl.jpg";
import coupleWatchingMovie1 from "../public/coupleWatchingMovie1.jpg";
import coupleWatchingMovie2 from "../public/coupleWatchingMovie2.jpg";
import neueFischePhoto from "../public/neuefische.jpeg";
import Link from "next/link";
import {Icon} from "@iconify/react";

export default function Main() {
  return (
    <>
      <StyledMain>
        <FirstSection>
          <BackgroundImage src={seats} alt="seats as background image" />
          <H1>Find Movies and Series</H1>
          <Info>
            searchfind.go - Just a better place to find Movies and Series for
            free. It allows you to find Movies and Series in high Quality. Just
            open searchfind.go, find your favorite Series and Movies, and have
            fun.
          </Info>
        </FirstSection>
        <SecondAndThirdSection>
          <h2>Recommended Movies</h2>
          <hr />
          <ParentDiv>
            <ChildDiv>
              <Photo src={neueFischePhoto} alt="recommended series" />
              <h3>Name</h3>
              <span>Year</span>
              <EditedSpanMin>no min</EditedSpanMin>
            </ChildDiv>
            <ChildDiv>
              <Photo src={neueFischePhoto} alt="recommended series" />
              <h3>Name</h3>
              <span>Year</span>
              <EditedSpanMin>no min</EditedSpanMin>
            </ChildDiv>
          </ParentDiv>
          <hr />
        </SecondAndThirdSection>
        <br />
        <SecondAndThirdSection>
          <h2>Recommended Series</h2>
          <hr />
          <ParentDiv>
            <ChildDiv>
              <Photo src={neueFischePhoto} alt="recommended series" />
              <h3>Name</h3>
              <span>SS Num</span>
              <EditedSpanEp>EP Num</EditedSpanEp>
            </ChildDiv>
            <ChildDiv>
              <Photo src={neueFischePhoto} alt="recommended series" />
              <h3>Name</h3>
              <span>SS Num</span>
              <EditedSpanEp>EP Num</EditedSpanEp>
            </ChildDiv>
          </ParentDiv>
          <hr />
        </SecondAndThirdSection>
        <br />
        <ForthSection>
          <div>
            <AnotherPhoto
              src={coupleWatchingMovie1}
              alt="photo of friends watching a movie/series"
            />
          </div>
          <div>
            <EditedImage
              src={coupleWatchingMovie2}
              alt="photo of friends watching a movie/series"
            />
          </div>
          <EditedDiv>
            <h3>Share With Your Friends</h3>
            <p>Help me grow by sharing my website with your friends!</p>
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
          <div>
            <AnotherPhoto
              src={twoBoysOneGirl}
              width="250"
              height="250"
              alt="photo of friends watching a movie/series"
            />
          </div>
        </ForthSection>
      </StyledMain>
    </>
  );
}

// main element
const StyledMain = styled.main`
  font-style: italic;
  background-color: #000000;
`;

// first section of the main page
const FirstSection = styled.section`
  text-align: center;
  height: 700px;
`;

// h1 element
const H1 = styled.h1`
  padding: 10px;
  z-index: 1;
  bottom: 490px;
  position: relative;
`;

// first Image element (it is used for background image)
const BackgroundImage = styled(Image)`
  width: 100vw;
  height: 650px;
  z-index: 0;
`;

// first p element
const Info = styled.p`
  position: relative;
  z-index: 1;
  bottom: 520px;
  line-height: 145.2%;
  padding: 50px;
  font-weight: 470px;
  font-size: 20px;
  margin: 0 100px;

  @media screen and (max-width: 576px) {
    margin: 0 30px;
  }
`;

// div (parent)
const ParentDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px;

  @media screen and (max-width: 576px) {
    justify-content: space-between;
  }
`;

// div (child)
const ChildDiv = styled.div`
  font-size: 18px;
  color: #d9d9d9;
`;

// Image element (for the movies and series)
const Photo = styled(Image)`
  width: 230px;
  height: 230px;
  left: 34px;
  top: 553px;
  background: #d9d9d9;
  border-radius: 15px;

  @media screen and (max-width: 576px) {
    width: 180px;
    height: 200px;
  }
`;

// second and third section of the main page
const SecondAndThirdSection = styled.section`
  margin: 60px 40px;
`;

// span element (for the number of minutes of a movie)
const EditedSpanMin = styled.span`
  position: relative;
  left: 140px;

  @media screen and (max-width: 576px) {
    left: 88px;
  }
`;

// span element (for the number of episodes in a series)
const EditedSpanEp = styled.span`
  position: relative;
  left: 100px;

  @media screen and (max-width: 576px) {
    left: 50px;
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
  grid-template-rows: 45% 50%;
  grid-template-columns: 20% 15% 60%;
  column-gap: 5px;
  padding: 10px 15px 0 15px;
  margin-left: 100px;

  @media screen and (max-width: 576px) {
    margin-left: 0;
    grid-template-columns: 20% 20% 60%;
  }
`;

const AnotherPhoto = styled(Image)`
  width: 250px;
  height: 220px;

  @media screen and (max-width: 576px) {
    width: 150px;
    height: 120px;
  }
`;

// Image element
const EditedImage = styled(Image)`
  position: relative;
  top: 80px;
  width: 250px;
  height: 300px;

  @media screen and (max-width: 576px) {
    top: 50px;
    width: 150px;
    height: 160px;
  }
`;

const EditedDiv = styled.div`
  font-size: 23px;
  align-self: end;
  position: relative;
  top: 60px;

  @media screen and (max-width: 576px) {
    font-size: 13px;
    top: 70px;
  }
`;

const StyledIcon = styled(Icon)`
  @media screen and (max-width: 576px) {
    width: 30px;
  }
`;
