import {useState} from "react";
import Checkbox from "../components/Checkbox";
import {
  StyledSection,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledDiv3,
  StyledButton,
  StyledLink,
} from "./login";
import styled from "styled-components";

export default function Register() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <StyledSection>
      <StyledForm primary>
        <H1>Registration Form</H1>
        <StyledPar>
          Please fill out this form with the required information
        </StyledPar>
        <div style={{margin: "2rem 0"}}>
          <StyledLabel for="email">Email adress:</StyledLabel>
          <StyledInput
            primary
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
        </div>
        <div style={{margin: "1.4rem 0"}}>
          <StyledLabel for="createPassword">Create Your Password:</StyledLabel>

          <StyledInput
            type={visible1 ? "text" : "password"}
            id="createPassword"
            name="createPassword"
            placeholder="Your password"
            required
          />
          <Checkbox
            onChange={() => setVisible1(!visible1)}
            id={"passwordVisibility1"}
            name={"passwordVisibility1"}
          />
          <StyledLabel for="passwordVisibility1">Show password</StyledLabel>
        </div>
        <div style={{margin: "1.4rem 0"}}>
          <StyledLabel for="confirmPassword">Confirm Password:</StyledLabel>
          <StyledInput
            type={visible2 ? "text" : "password"}
            id="confirmPassword"
            name="confirmPassword"
            placeholder="Your password"
            required
          />
          <Checkbox
            onChange={() => setVisible2(!visible2)}
            id={"passwordVisibility2"}
            name={"passwordVisibility2"}
          />
          <StyledLabel for="passwordVisibility2">Show password</StyledLabel>
        </div>
        <StyledDiv3>
          <StyledButton primary type="submit">
            Register
          </StyledButton>
        </StyledDiv3>
        <StyledPar>
          Already have an account?
          <StyledLink href="/login"> Sign in</StyledLink>
        </StyledPar>
      </StyledForm>
    </StyledSection>
  );
}

const H1 = styled.h1`
  text-align: center;
  font-style: italic;
`;

const StyledPar = styled.p`
  text-align: center;
  margin: 0 0 1rem;
  font-style: italic;
`;
