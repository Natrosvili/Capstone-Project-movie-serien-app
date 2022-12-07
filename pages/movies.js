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
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </Link>
              <span>
                <em>Name</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </div>
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </Link>
              <span>
                <em>Year</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </div>
          </ParentDiv>
          <hr />
        </StyledSection>
        <StyledSection>
          <H2>
            <em>Adventure</em>
          </H2>
          <hr />
          <ParentDiv>
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </Link>
              <span>
                <em>Name</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </div>
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </Link>
              <span>
                <em>Year</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </div>
          </ParentDiv>
          <hr />
        </StyledSection>
        <StyledSection>
          <H2>
            <em>Comedy</em>
          </H2>
          <hr />
          <ParentDiv>
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </Link>
              <span>
                <em>Name</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </div>
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </Link>
              <span>
                <em>Year</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </div>
          </ParentDiv>
          <hr />
        </StyledSection>
        <StyledSection>
          <H2>
            <em>Drama</em>
          </H2>
          <hr />
          <ParentDiv>
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </Link>
              <span>
                <em>Name</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </div>
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <Link style={{color: "grey", textDecoration: "none"}} href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </Link>
              <span>
                <em>Year</em>
              </span>
              <StyledMain>
                <em>no min</em>
              </StyledMain>
            </div>
          </ParentDiv>
          <hr />
        </StyledSection>
      </section>
    </>
  );
}

// second and third section of the main page
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

// span element (for the number of minutes of a movie)
const StyledMain = styled.span`
  position: relative;
  left: 9rem;

  @media screen and (max-width: 430px) {
    left: 1.2rem;
    font-size: 1rem;
  }
`;
