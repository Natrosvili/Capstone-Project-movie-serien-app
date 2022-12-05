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
      <br />
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
      <br />
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
      <br />
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
      <br />
    </>
  );
}

const StyledSection = styled.section`
  margin: 60px 40px;
`;

const ParentDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 50px;

  @media screen and (max-width: 576px) {
    justify-content: space-between;
  }
`;

const ChildDiv = styled.div`
  font-size: 18px;
  color: #d9d9d9;
`;

const ToMovie = styled(Link)`
  text-decoration: none;
`;

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

const StyledSpan = styled.span`
  position: relative;
  left: 140px;

  @media screen and (max-width: 576px) {
    left: 88px;
  }
`;
