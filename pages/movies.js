import styled from "styled-components";
import Image from "next/image";
import neueFischePhoto from "../public/neuefische.jpeg";
import Link from "next/link";

export default function Movies() {
  return (
    <>
      <h1>Movies</h1>
      <StyledSection>
        <H2>Action</H2>
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
        <H2>Adventure</H2>
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
        <H2>Comedy</H2>
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
        <H2>Drama</H2>
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
    </>
  );
}

// second and third section of the main page
const StyledSection = styled.section`
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
