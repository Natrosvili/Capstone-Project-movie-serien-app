import styled from "styled-components";
import neueFischePhoto from "../public/neuefische.jpeg";
import Image from "next/image";
import Link from "next/link";

export default function Series() {
  return (
    <>
      <h1>Series</h1>
      <br />
      <StyledSection>
        <h2>Action</h2>
        <hr />
        <ParentDiv>
          <ChildDiv>
            <Link href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
          <ChildDiv>
            <Link href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
        </ParentDiv>
        <hr />
      </StyledSection>
      <StyledSection>
        <h2>Adventure</h2>
        <hr />
        <ParentDiv>
          <ChildDiv>
            <Link href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
          <ChildDiv>
            <Link href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
        </ParentDiv>
        <hr />
      </StyledSection>
      <StyledSection>
        <h2>Comedy</h2>
        <hr />
        <ParentDiv>
          <ChildDiv>
            <Link href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
          <ChildDiv>
            <Link href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
        </ParentDiv>
        <hr />
      </StyledSection>
      <StyledSection>
        <h2>Drama</h2>
        <hr />
        <ParentDiv>
          <ChildDiv>
            <Photo src={neueFischePhoto} alt="recommended series" />
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
          <ChildDiv>
            <Photo src={neueFischePhoto} alt="recommended series" />
            <Link href="">
              <h3>Name</h3>
            </Link>
            <span>SS Num</span>
            <StyledSpan>EP Num</StyledSpan>
          </ChildDiv>
        </ParentDiv>
        <hr />
      </StyledSection>
    </>
  );
}

const Photo = styled(Image)`
  width: 34vw;
  height: 30vh;
  left: 2.125rem;
  top: 34.5rem;
  background: #d9d9d9;
  border-radius: 15px;

  @media screen and (max-width: 36rem) {
    width: 28vw;
    height: 26vh;
  }
`;

const StyledSection = styled.section`
  margin: 3.75em 2.5em;
`;

const ParentDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3.125em;

  @media screen and (max-width: 36em) {
    justify-content: space-between;
  }
`;

const ChildDiv = styled.div`
  font-size: 1.25rem;
  color: #d9d9d9;
`;

const StyledSpan = styled.span`
  position: relative;
  left: 6.25rem;

  @media screen and (max-width: 36rem) {
    left: 3.125rem;
  }
`;
