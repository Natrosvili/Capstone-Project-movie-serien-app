import {Photo, H2} from "./main";
import neueFischePhoto from "../public/neuefische.jpeg";
import Link from "next/link";
import {
  StyledSection,
  H1,
  StyledDiv,
  StyledNameLink,
  StlyedSpan,
} from "./movies";

export default function Series() {
  return (
    <>
      <section style={{backgroundColor: "#010101"}}>
        <H1>Series</H1>
        <StyledSection>
          <H2>Action</H2>
          <hr />
          <StyledDiv>
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>SS 2</em>
              </span>
              <StlyedSpan>
                <em>EP 10</em>
              </StlyedSpan>
            </div>
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>SS 2</em>
              </span>
              <StlyedSpan>
                <em>EP 10</em>
              </StlyedSpan>
            </div>
          </StyledDiv>
          <hr />
        </StyledSection>
        <StyledSection>
          <H2>
            <em>Adventure</em>
          </H2>
          <hr />
          <StyledDiv>
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>SS 2</em>
              </span>
              <StlyedSpan>
                <em>EP 10</em>
              </StlyedSpan>
            </div>
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>SS 2</em>
              </span>
              <StlyedSpan>
                <em>EP 10</em>
              </StlyedSpan>
            </div>
          </StyledDiv>
          <hr />
        </StyledSection>
        <StyledSection>
          <H2>
            <em>Comendy</em>
          </H2>
          <hr />
          <StyledDiv>
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>SS 2</em>
              </span>
              <StlyedSpan>
                <em>EP 10</em>
              </StlyedSpan>
            </div>
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>SS 2</em>
              </span>
              <StlyedSpan>
                <em>EP 10</em>
              </StlyedSpan>
            </div>
          </StyledDiv>
          <hr />
        </StyledSection>
        <StyledSection>
          <H2>
            <em>Drama</em>
          </H2>
          <hr />
          <StyledDiv>
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>SS 2</em>
              </span>
              <StlyedSpan>
                <em>EP 10</em>
              </StlyedSpan>
            </div>
            <div style={{color: "#d9d9d9"}}>
              <Link style={{textDecoration: "none"}} href="#">
                <Photo src={neueFischePhoto} alt="recommended series" />
              </Link>
              <StyledNameLink href="#">
                <h3>
                  <em>Name</em>
                </h3>
              </StyledNameLink>
              <span>
                <em>SS 2</em>
              </span>
              <StlyedSpan>
                <em>EP 10</em>
              </StlyedSpan>
            </div>
          </StyledDiv>
          <hr />
        </StyledSection>
      </section>
    </>
  );
}
