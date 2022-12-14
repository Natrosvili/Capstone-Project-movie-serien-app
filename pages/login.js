import Link from "next/link";
import {useState} from "react";
import styled from "styled-components";
import Checkbox from "../components/Checkbox";

export default function LogIn() {
  const [visible, setVisible] = useState(false);

  return (
    <StyledSection>
      <StyledForm>
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
            onChange={() => setVisible(!visible)}
            id={"passwordVisibility"}
            name={"paswordVisibility"}
          />
          <StyledLabel for="passwordVisibility">Show password</StyledLabel>
        </div>
        <StyledDiv3>
          <StyledButton type="submit">Login</StyledButton>
        </StyledDiv3>
        <p style={{textAlign: "center", fontStyle: "italic"}}>
          Don`t have an Account?
          <StyledLink href="/register"> Register.</StyledLink>
        </p>
      </StyledForm>
    </StyledSection>
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
  height: ${props => (props.primary ? "75vh" : "50vh")} @media screen and
    (max-width: 430px) {
    height: ${props => (props.primary ? "75vh" : "43vh")};
  }
`;

export const StyledDiv3 = styled.div`
  display: flex;
  justify-content: center;
`;

export const StyledLabel = styled.label`
  color: #000000;
  cursor: pointer;
`;

export const StyledInput = styled.input`
  width: ${props => (props.primary ? "80vw" : "75vw")};
  height: 5vh;
  border: none;
  background-color: #d9d9d9;
  outline: none;
  padding-left: 0.8rem;

  @media screen and (max-width: 430px) {
    width: ${props => (props.primary ? "" : "80vw")};
  }
`;

export const StyledButton = styled.button`
  background-color: #d11818;
  color: #ffffff;
  border: none;
  border-radius: 0.8rem;
  width: ${props => (props.primary ? "45vw" : "40vw")};
  height: 5vh;
  cursor: pointer;
  margin: ${props => (props.primary ? "0.5rem 0 1.5rem" : props.margin)};
  margin-top: ${props => (props.primary ? "" : "0.5rem")};
  font-style: italic;
`;

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: #d11818;
  font-style: italic;
`;
