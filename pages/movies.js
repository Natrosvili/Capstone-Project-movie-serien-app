import styled from "styled-components";
import Image from "next/image";
import neueFischePhoto from "../public/neuefische.jpeg";
import Link from "next/link";

export default function Movies() {
  return (
    <>
      <section style={{backgroundColor: "#010101"}}>
        <H1>
          <em>Movies</em>
        </H1>
        <StyledSection>
          <H2>
            <em>Action</em>
          </H2>
          <hr />
          <ParentDiv>
            <ChildDiv>
              <StyledLink href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </StyledLink>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>Year</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </ChildDiv>
            <ChildDiv>
              <StyledLink href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </StyledLink>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>Year</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </ChildDiv>
          </ParentDiv>
          <hr />
        </StyledSection>
        <StyledSection>
          <H2>
            <em>Adventure</em>
          </H2>
          <hr />
          <ParentDiv>
            <ChildDiv>
              <StyledLink href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </StyledLink>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>Year</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </ChildDiv>
            <ChildDiv>
              <StyledLink href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </StyledLink>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>Year</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </ChildDiv>
          </ParentDiv>
          <hr />
        </StyledSection>
        <StyledSection>
          <H2>
            <em>Comendy</em>
          </H2>
          <hr />
          <ParentDiv>
            <ChildDiv>
              <StyledLink href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </StyledLink>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>Year</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </ChildDiv>
            <ChildDiv>
              <StyledLink href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </StyledLink>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>Year</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </ChildDiv>
          </ParentDiv>
          <hr />
        </StyledSection>
        <StyledSection>
          <H2>
            <em>Drama</em>
          </H2>
          <hr />
          <ParentDiv>
            <ChildDiv>
              <StyledLink href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </StyledLink>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>Year</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </ChildDiv>
            <ChildDiv>
              <StyledLink href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </StyledLink>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>Year</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </ChildDiv>
          </ParentDiv>
          <hr />
        </StyledSection>
      </section>
    </>
  );
}

const StyledSection = styled.section`
  padding: 3rem 3.75rem;

  @media screen and (max-width: 430px) {
    padding: 0 0 3rem;
  }
`;

const H1 = styled.h1`
  padding: 4rem 0 3rem 4rem;
  margin: 0;

  @media screen and (max-width: 430px) {
    text-align: center;
    padding: 2rem;
  }
`;

const H2 = styled.h2`
  @media screen and (max-width: 430px) {
    text-align: center;
  }
`;

const ParentDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3.125em;
  color: #d9d9d9;

  @media screen and (max-width: 430px) {
    justify-content: space-between;
    text-align: center;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const StyledNameLink = styled(Link)`
  color: grey;
  text-decoration: none;
`;

const ChildDiv = styled.div`
  color: #d9d9d9;
`;

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

const StyledMain = styled.span`
  position: relative;
  left: 9rem;

  @media screen and (max-width: 430px) {
    left: 1.2rem;
    font-size: 1rem;
  }
`;
