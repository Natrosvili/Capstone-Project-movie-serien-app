import styled from "styled-components";
import {Icon} from "@iconify/react";
import Link from "next/link";

export default function ShareSection() {
  return (
    <>
      <GridSection>
        <ImageContainer1>
          <Img
            src="/images/other/coupleWatchingMovie1.jpg"
            alt="photo of friends watching a movie/series"
          />
        </ImageContainer1>
        <ImageContainer2>
          <Img
            src="/images/other/coupleWatchingMovie2.jpg"
            alt="photo of friends watching a movie/series"
          />
        </ImageContainer2>
        <ImageContainer3>
          <Img
            src="/images/other/twoBoysOneGirl.jpg"
            alt="photo of friends watching a movie/series"
          />
        </ImageContainer3>

        <StyledDiv>
          <h3>Share With Your Friends</h3>
          <p>Help me grow by sharing my website with your friends!</p>
          <Link href="https://www.facebook.com">
            <StyledIcon icon="logos:facebook" width="35" />
          </Link>
          <Link href="https://api.whatsapp.com">
            <StyledIcon icon="logos:whatsapp-icon" width="35" />
          </Link>
          <Link href="https://www.pinterest.com/">
            <StyledIcon icon="logos:pinterest" width="35" />
          </Link>
          <Link href="https://twitter.com">
            <StyledIcon icon="logos:twitter" width="35" />
          </Link>
        </StyledDiv>
      </GridSection>
    </>
  );
}

const GridSection = styled.section`
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

const StyledDiv = styled.div`
  grid-column: 3 / 3;
  grid-row: 2 / span 2;
  width: 100%;
  font-size: 1.21rem;

  @media screen and (max-width: 430px) {
    font-size: 0.666rem;
  }

  & h3 {
    margin: 0;
    color: #ffffff;
  }

  & p {
    color: #ffffff;
  }

  & Link {
    text-decoration: none;
  }
`;

const ImageContainer1 = styled.div`
  grid-row: 1 / span 2;
  grid-column: 1 / 1;
  display: flex;
  align-items: start;
`;

const ImageContainer2 = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: auto;
  grid-row: 2 / span 2;
  grid-column: 2 / 3;
`;

const ImageContainer3 = styled.div`
  display: flex;
  justify-content: end;
  grid-row: 3 / span 2;
`;

const Img = styled.img`
  width: 100%;
`;

export const StyledIcon = styled(Icon)`
  @media screen and (max-width: 430px) {
    width: ${props => (props.primary ? "10vw" : "5vw")};
  }
`;
