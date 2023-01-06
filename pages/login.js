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
        <h1>Sign In</h1>
        <div>
          <StyledLabel htmlFor="email">Your Account:</StyledLabel>
          <StyledInput
            type="email"
            id="email"
            name="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div>
          <StyledLabel htmlFor="password">Your password:</StyledLabel>
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
          <StyledLabel htmlFor="passwordVisibility">Show password</StyledLabel>
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
  );
}

export const StyledSection = styled.section`
  background-color: #000000;
  padding: ${props => (props.primary ? "30% 2rem 10%" : "20% 2rem 0")};
  display: grid;
  place-content: center;
  height: 100%;
`;

export const StyledForm = styled.form`
  background-color: #9a9595;
  padding: 2rem 1rem 0;
  border-radius: 1.5rem;
  width: ${props => (props.primary ? "62vw" : "40vw")};
  height: ${props => (props.primary ? "75vh" : "50vh")};

  @media screen and (max-width: 430px) {
    width: ${props => (props.primary ? "75vw" : "70vw")};
    height: ${props => (props.primary ? "88vh" : "55vh")};
  }

  & h1 {
    margin: 0;
    color: #000000;
    margin-bottom: 2rem;
    font-style: italic;
  }

  & div {
    margin: 1rem 0;
  }
`;

export const StyledInput = styled.input`
  width: ${props => (props.primary ? "60vw" : "37vw")};
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
  background-color: #d11818;
  color: #ffffff;
  border: none;
  border-radius: 0.8rem;
  width: ${props => (props.primary ? "52vw" : "50vw")};
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
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #d11818;
  font-style: italic;
`;
