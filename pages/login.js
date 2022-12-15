import Link from "next/link";
import {useState} from "react";
import styled from "styled-components";
import Checkbox from "../components/Checkbox";

export default function LogIn() {
  const [visible, setVisible] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
  }

  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmit}>
        <H1>Sign In</H1>
        <div style={{margin: "1rem 0"}}>
          <StyledLabel for="email">Your Account:</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div style={{margin: "1rem 0"}}>
          <StyledLabel for="password">Your password:</StyledLabel>
          <StyledInput
            type={visible ? "text" : "password"}
            id="password"
            name="password"
            placeholder="Password"
            required
          />
          <Checkbox
            onChange={() => {
              setVisible(!visible);
            }}
            id={"passwordVisibility"}
            name={"paswordVisibility"}
          />
          <StyledLabel for="passwordVisibility">Show password</StyledLabel>
        </div>
        <StyledDiv>
          <StyledButton type="submit">Login</StyledButton>
        </StyledDiv>
        <p style={{textAlign: "center", fontStyle: "italic"}}>
          Don&apos;t have an Account?
          <StyledLink href="/register"> Register.</StyledLink>
        </p>
      </StyledForm>
    </StyledSection>

  return (
    <>
      <StyledSection>
        <StyledForm method="post" autoComplete="on">
          <H1>Sign In</H1>
          <div style={{margin: "1rem 0"}}>
            <StyledLabel for="email">Your Account:</StyledLabel>
            <StyledInput
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div style={{margin: "1rem 0"}}>
            <StyledLabel for="password">Your password:</StyledLabel>
            <StyledInput
              type={visible ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <input
              onChange={() => setVisible(!visible)}
              type="checkbox"
              id="passwordVisibility"
              name="passwordVisibility"
            />
            <StyledLabel for="passwordVisibility">Show password</StyledLabel>
          </div>
          <StyledDiv3>
            <Styledbutton type="submit">Login</Styledbutton>
          </StyledDiv3>
          <p style={{textAlign: "center"}}>
            Don`t have an Account?
            <StyledLink href="/register"> Register.</StyledLink>
          </p>
        </StyledForm>
      </StyledSection>
    </>
  );
}

const H1 = styled.h1`
  margin: 0;
  color: #000000;
  margin-bottom: 2rem;
  font-style: italic;
`;

export const StyledSection = styled.section`
  background-color: #000000;
  padding: 2rem;
  display: grid;
  place-content: center;
  height: 100vh;
`;

export const StyledForm = styled.form`
  background-color: #9a9595;
  padding: 2rem 1rem 0;
  border-radius: 1.5rem;

  width: ${props => (props.primary ? "62vw" : "40vw")};
  height: ${props => (props.primary ? "75vh" : "50vh")};

  @media screen and (max-width: 430px) {
    width: ${props => (props.primary ? "75vw" : "70vw")};
    height: ${props => (props.primary ? "71vh" : "43vh")};
  }
`;

export const StyledInput = styled.input`
  width: ${props => (props.primary ? "60vw" : "37vw")};

  height: 50vh;

  @media screen and (max-width: 430px) {
    height: 50vh;
  }
`;

const H1 = styled.h1`
  margin: 0;
  color: #000000;
  margin-bottom: 2rem;
  font-style: italic;
`;

const StyledLabel = styled.label`
  color: #000000;
  cursor: pointer;
`;

const StyledInput = styled.input`
  width: 50vw;

  height: 5vh;
  border: none;
  background-color: #d9d9d9;
  outline: none;
  padding-left: 0.8rem;

  @media screen and (max-width: 430px) {

    width: ${props => (props.primary ? "65vw" : "60vw")};
  }
`;

export const StyledButton = styled.button`
    width: 80vw;
  }
`;

const StyledDiv3 = styled.div`
  display: flex;
  justify-content: center;
`;

const Styledbutton = styled.button`
  background-color: #d11818;
  color: #ffffff;
  border: none;
  border-radius: 0.8rem;
  width: ${props => (props.primary ? "45vw" : "28vw")};
  height: 5vh;
  cursor: pointer;
  margin: ${props => (props.primary ? "0.5rem 0 1.5rem" : props.margin)};
  margin-top: ${props => (props.primary ? "" : "0.5rem")};
  font-style: italic;
`;

export const StyledDiv = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledLabel = styled.label`
  color: #000000;
  cursor: pointer;
  width: 40vw;
  height: 5vh;
  cursor: pointer;
  margin-top: 0.5rem;
  font-style: italic;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #d11818;
  font-style: italic;
`;
