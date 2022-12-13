import styled from "styled-components";
import Image from "next/image";
import seats from "../public/seats.png";
import {
  StyledSection,
  MinSpan,
  Photo,
  H2,
  GridSection,
  ImageContainer,
  Img,
  StyledIcon,
  StyledDiv,
  EpSpan,
} from "../components/MoviesSeriesSections";
import neueFischePhoto from "../public/neuefische.jpeg";
import Link from "next/link";

export default function Main() {
  return (
    <>
      <main style={{backgroundColor: "#010101"}}>
        <StyledSection
          textAlign={"center"}
          height={"50rem"}
          heightMedia={"40rem"}
        >
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
        <StyledSection margin={"3rem 3.75rem"} marginMedia={"0 0 3rem"}>
          <H2 textAlignMedia={"center"}>Recommended Movies</H2>
          <hr />
          <StyledDiv
            display={"flex"}
            justifyContent={"space-around"}
            margin={"3.125em"}
            justifyContentMedia={"space-between"}
            textAlignMedia={"center"}
          >
            <div style={{color: "#d9d9d9", fontStyle: "italic"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo
                  width={"100%"}
                  height={"75%"}
                  left={"2rem"}
                  top={"35rem"}
                  background={"#d9d9d9"}
                  borderRadius={"15px"}
                  widthMedia={"90%"}
                  heightMedia={"80%"}
                  src={neueFischePhoto}
                  alt="recommended series"
                />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>Name</h3>
              </Link>
              <span>Year</span>
              <MinSpan
                position={"relative"}
                left={"9rem"}
                leftMedia={"1.2rem"}
                fontSizeMedia={"1rem"}
              >
                no min
              </MinSpan>
            </div>
            <div style={{color: "#d9d9d9", fontStyle: "italic"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo
                  width={"100%"}
                  height={"75%"}
                  left={"2rem"}
                  top={"35rem"}
                  background={"#d9d9d9"}
                  borderRadius={"15px"}
                  widthMedia={"90%"}
                  heightMedia={"80%"}
                  src={neueFischePhoto}
                  alt="recommended series"
                />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>Name</h3>
              </Link>
              <span>Year</span>
              <MinSpan
                position={"relative"}
                left={"9rem"}
                leftMedia={"1.2rem"}
                fontSizeMedia={"1rem"}
              >
                no min
              </MinSpan>
            </div>
          </StyledDiv>
          <hr />
        </StyledSection>
        <StyledSection margin={"3rem 3.75rem"} marginMedia={"0 0 3rem"}>
          <H2 textAlignMedia={"center"}>Recommended Series</H2>
          <hr />
          <StyledDiv
            display={"flex"}
            justifyContent={"space-around"}
            margin={"3.125rem"}
            justifyContentMedia={"space-between"}
            textAlignMedia={"center"}
          >
            <div style={{color: "#d9d9d9"}}>
              <Link href="#">
                <Photo
                  width={"100%"}
                  height={"75%"}
                  left={"2rem"}
                  top={"35rem"}
                  background={"#d9d9d9"}
                  borderRadius={"15px"}
                  widthMedia={"90%"}
                  heightMedia={"80%"}
                  src={neueFischePhoto}
                  alt="recommended series"
                />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </Link>
              <span>
                <em>SS Num</em>
              </span>
              <EpSpan
                color={"#ffffff"}
                position={"relative"}
                left={"9rem"}
                leftMedia={".4rem"}
                fontStyle={"italic"}
              >
                EP Num
              </EpSpan>
            </div>
            <div style={{color: "#d9d9d9"}}>
              <Link href="#">
                <Photo
                  width={"100%"}
                  height={"75%"}
                  left={"2rem"}
                  top={"35rem"}
                  background={"#d9d9d9"}
                  borderRadius={"15px"}
                  widthMedia={"90%"}
                  heightMedia={"80%"}
                  src={neueFischePhoto}
                  alt="recommended series"
                />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </Link>
              <span>
                <em>SS Num</em>
              </span>
              <EpSpan
                color={"#ffffff"}
                position={"relative"}
                left={"9rem"}
                leftMedia={".4rem"}
                fontStyle={"italic"}
              >
                EP Num
              </EpSpan>
            </div>
          </StyledDiv>
          <hr />
        </StyledSection>

        <GridSection
          textAlign={"center"}
          display={"grid"}
          placeContent={"center"}
          templateRows={"repeat(4, 25%)"}
          templateColumns={"repeat(3, 20%)"}
          columnGap={"10px"}
          padding={"2em 2em"}
          width={"100%"}
          height={"auto"}
          templateRowsMedia={"repeat(4, 20%)"}
          templateColumnsMedia={"repeat(3, 35%)"}
          rowGapMedia={"2px"}
        >
          <ImageContainer
            gridRow={"1 / span 2"}
            gridColumn={"1 / 1"}
            display={"flex"}
            alignItems={"start"}
          >
            <Img
              width={"100%"}
              src="/coupleWatchingMovie1.jpg"
              alt="photo of friends watching a movie/series"
            />
          </ImageContainer>
          <ImageContainer
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            height={"auto"}
            gridRow={"2 / span 2"}
            gridColumn={"2/3"}
          >
            <Img
              width={"100%"}
              src="/coupleWatchingMovie2.jpg"
              alt="photo of friends watching a movie/series"
            />
          </ImageContainer>
          <ImageContainer
            display={"flex"}
            justifyContent={"end"}
            gridRow={"3 / span 2"}
          >
            <Img
              width={"100%"}
              src="/twoBoysOneGirl.jpg"
              alt="photo of friends watching a movie/series"
            />
          </ImageContainer>

          <StyledDiv
            gridColumn={"3 /3"}
            gridRow={"2 / span 2"}
            width={"100%"}
            fontSize={"1.21rem"}
            fontSizeMedia={"0.666rem"}
          >
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
              <StyledIcon widthMedia={"20%"} icon="logos:facebook" width="35" />
            </Link>
            <Link
              style={{textDecoration: "none"}}
              href="https://www.instagram.com"
            >
              <StyledIcon widthMedia={"20%"} icon="mdi:instagram" width="35" />
            </Link>
            <Link
              style={{textDecoration: "none"}}
              href="https://api.whatsapp.com"
            >
              <StyledIcon
                widthMedia={"20%"}
                icon="logos:whatsapp-icon"
                width="35"
              />
            </Link>
            <Link
              style={{textDecoration: "none"}}
              href="https://www.pinterest.com/"
            >
              <StyledIcon
                widthMedia={"20%"}
                icon="logos:pinterest"
                width="35"
              />
            </Link>
            <Link style={{textDecoration: "none"}} href="https://twitter.com">
              <StyledIcon widthMedia={"20%"} icon="logos:twitter" width="35" />
            </Link>
          </StyledDiv>
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
