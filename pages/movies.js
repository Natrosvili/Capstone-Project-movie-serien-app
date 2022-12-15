import styled from "styled-components";
import {Photo} from "./main";
import neueFischePhoto from "../public/neuefische.jpeg";
import Link from "next/link";

export default function Movies() {
  return (
    <section style={{backgroundColor: "#010101"}}>
      <H1>Movies</H1>
      <StyledSection>
        <H2>Action</H2>
        <hr />
        <StyledDiv>
          <ChildDiv>
            <Link style={{textDecoration: "none"}} href="#">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <StyledNameLink href="#">
              <h3>
                <em>Name</em>
              </h3>
            </StyledNameLink>
            <span>
              <em>Year</em>
            </span>
            <StlyedSpan>
              <em>no min</em>
            </StlyedSpan>
          </ChildDiv>
          <ChildDiv>
            <Link style={{textDecoration: "none"}} href="#">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <StyledNameLink href="#">
              <h3>
                <em>Name</em>
              </h3>
            </StyledNameLink>
            <span>
              <em>Year</em>
            </span>
            <StlyedSpan>
              <em>no min</em>
            </StlyedSpan>
          </ChildDiv>
        </StyledDiv>
        <hr />
      </StyledSection>
      <StyledSection>
        <H2>
          <em>Adventure</em>
        </H2>
        <hr />
        <StyledDiv>
          <ChildDiv>
            <Link style={{textDecoration: "none"}} href="#">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <StyledNameLink href="#">
              <h3>
                <em>Name</em>
              </h3>
            </StyledNameLink>
            <span>
              <em>Year</em>
            </span>
            <StlyedSpan>
              <em>no min</em>
            </StlyedSpan>
          </ChildDiv>
          <ChildDiv>
            <Link style={{textDecoration: "none"}} href="#">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <StyledNameLink href="#">
              <h3>
                <em>Name</em>
              </h3>
            </StyledNameLink>
            <span>
              <em>Year</em>
            </span>
            <StlyedSpan>
              <em>no min</em>
            </StlyedSpan>
          </ChildDiv>
        </StyledDiv>
        <hr />
      </StyledSection>
      <StyledSection>
        <H2>
          <em>Comendy</em>
        </H2>
        <hr />
        <StyledDiv>
          <ChildDiv>
            <Link style={{textDecoration: "none"}} href="#">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <StyledNameLink href="#">
              <h3>
                <em>Name</em>
              </h3>
            </StyledNameLink>
            <span>
              <em>Year</em>
            </span>
            <StlyedSpan>
              <em>no min</em>
            </StlyedSpan>
          </ChildDiv>
          <ChildDiv>
            <Link style={{textDecoration: "none"}} href="#">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <StyledNameLink href="#">
              <h3>
                <em>Name</em>
              </h3>
            </StyledNameLink>
            <span>
              <em>Year</em>
            </span>
            <StlyedSpan>
              <em>no min</em>
            </StlyedSpan>
          </ChildDiv>
        </StyledDiv>
        <hr />
      </StyledSection>
      <StyledSection>
        <H2>
          <em>Drama</em>
        </H2>
        <hr />
        <StyledDiv>
          <ChildDiv>
            <Link style={{textDecoration: "none"}} href="#">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <StyledNameLink href="#">
              <h3>
                <em>Name</em>
              </h3>
            </StyledNameLink>
            <span>
              <em>Year</em>
            </span>
            <StlyedSpan>
              <em>no min</em>
            </StlyedSpan>
          </ChildDiv>
          <ChildDiv>
            <Link style={{textDecoration: "none"}} href="#">
              <Photo src={neueFischePhoto} alt="recommended series" />
            </Link>
            <StyledNameLink href="#">
              <h3>
                <em>Name</em>
              </h3>
            </StyledNameLink>
            <span>
              <em>Year</em>
            </span>
            <StlyedSpan>
              <em>no min</em>
            </StlyedSpan>
          </ChildDiv>
        </StyledDiv>
        <hr />
      </StyledSection>
    </section>
  );
}

export const StyledSection = styled.section`
  padding: 3rem 3.75rem;

  @media screen and (max-width: 430px) {
    padding: 0 0 3rem;
  }
`;

export const H1 = styled.h1`
  padding: 4rem 0 3rem 4rem;
  margin: 0;
  font-style: italic;

  @media screen and (max-width: 430px) {
    text-align: center;
    padding: 2rem;
  }
`;

export const H2 = styled.h2`
  font-style: italic;
  @media screen and (max-width: 430px) {
    text-align: center;
  }
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  margin: 3.125em;
  color: #d9d9d9;

  @media screen and (max-width: 430px) {
    justify-content: space-between;
    text-align: center;
  }
`;

export const StyledNameLink = styled(Link)`
  color: grey;
  text-decoration: none;
`;

const ChildDiv = styled.div`
  color: #d9d9d9;
`;

export const StlyedSpan = styled.span`
  position: relative;
  left: 9rem;

  @media screen and (max-width: 430px) {
    left: 1.2rem;
    font-size: 1rem;
  }
`;
