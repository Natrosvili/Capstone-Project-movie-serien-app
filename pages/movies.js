import styled from "styled-components";
import Image from "next/image";
import neueFischePhoto from "../public/neuefische.jpeg";
import Link from "next/link";

export default function Movies() {
  return (
    <>
      <h1>Movies</h1>
      <br />
      <StyledSection>
        <h2>Action</h2>
        <hr />
        <ParentDiv>
          <ChildDiv>
            <ToMovie href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </ToMovie>
            <ToMovie href="">
              <h3>Name</h3>
            </ToMovie>
            <span>Year</span>
            <StyledSpan>no min</StyledSpan>
          </ChildDiv>
          <ChildDiv>
            <ToMovie href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </ToMovie>
            <ToMovie href="">
              <h3>Name</h3>
            </ToMovie>
            <span>Year</span>
            <StyledSpan>no min</StyledSpan>
          </ChildDiv>
        </ParentDiv>
        <hr />
      </StyledSection>
      {/* <br /> */}
      <StyledSection>
        <h2>Adventure</h2>
        <hr />
        <ParentDiv>
          <ChildDiv>
            <ToMovie href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </ToMovie>
            <ToMovie href="">
              <h3>Name</h3>
            </ToMovie>
            <span>Year</span>
            <StyledSpan>no min</StyledSpan>
          </ChildDiv>
          <ChildDiv>
            <ToMovie href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </ToMovie>
            <ToMovie href="">
              <h3>Name</h3>
            </ToMovie>
            <span>Year</span>
            <StyledSpan>no min</StyledSpan>
          </ChildDiv>
        </ParentDiv>
        <hr />
      </StyledSection>
      <StyledSection>
        <h2>Comedy</h2>
        <hr />
        <ParentDiv>
          <ChildDiv>
            <ToMovie href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </ToMovie>
            <ToMovie href="">
              <h3>Name</h3>
            </ToMovie>
            <span>Year</span>
            <StyledSpan>no min</StyledSpan>
          </ChildDiv>
          <ChildDiv>
            <ToMovie href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </ToMovie>
            <ToMovie href="">
              <h3>Name</h3>
            </ToMovie>
            <span>Year</span>
            <StyledSpan>no min</StyledSpan>
          </ChildDiv>
        </ParentDiv>
        <hr />
      </StyledSection>
      <StyledSection>
        <h2>Drama</h2>
        <hr />
        <ParentDiv>
          <ChildDiv>
            <ToMovie href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </ToMovie>
            <ToMovie href="">
              <h3>Name</h3>
            </ToMovie>
            <span>Year</span>
            <StyledSpan>no min</StyledSpan>
          </ChildDiv>
          <ChildDiv>
            <ToMovie href="">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </ToMovie>
            <ToMovie href="">
              <h3>Name</h3>
            </ToMovie>
            <span>Year</span>
            <StyledSpan>no min</StyledSpan>
          </ChildDiv>
        </ParentDiv>
        <hr />
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  margin: 3.75rem 2.5rem;
`;

const ParentDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3.125rem;

  @media screen and (max-width: 36rem) {
    justify-content: space-between;
  }
`;

const ChildDiv = styled.div`
  font-size: 1.25rem;
  color: #d9d9d9;
`;

const ToMovie = styled(Link)`
  text-decoration: none;
`;

const Photo = styled(Image)`
  width: 26.5vw;
  height: 30vh;
  left: 2.125rem;
  top: 34.5rem;
  background: #d9d9d9;

  border-radius: 15px;

  @media screen and (max-width: 36rem) {
    width: 26vw;
    height: 21vh;
  }
`;

const StyledSpan = styled.span`
  position: relative;
  left: 8.75rem;

  @media screen and (max-width: 36rem) {
    left: 5.5rem;
  }
`;
