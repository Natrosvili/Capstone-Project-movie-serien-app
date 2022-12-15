import {useState} from "react";
import Checkbox from "../components/Checkbox";
import {
  StyledSection,
  StyledForm,
  StyledLabel,
  StyledInput,
  StyledDiv,
  StyledButton,
  StyledLink,
} from "./login";
import styled from "styled-components";

export default function Register() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  const [input, setInput] = useState({
    email: "",
    createPassword: "",
    confirmPassword: "",
  });

  const [error, setError] = useState({
    email: "",
    createPassword: "",
    confirmPassword: "",
  });

  const onInputChange = event => {
    const {name, value} = event.target;
    setInput(prev => ({
      ...prev,
      [name]: value,
    }));
    validateInput(event);
  };

  const validateInput = event => {
    let {name, value} = event.target;
    setError(prev => {
      const stateObj = {...prev, [name]: ""};

      switch (name) {
        case "createPassword":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] =
              "Password and confirm password do not match";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword
              ? ""
              : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter confirm Password.";
          } else if (input.createPassword && value !== input.createPassword) {
            stateObj[name] = "Password and confirm Password do not match.";
          }
          break;

        default:
          break;
      }
      return stateObj;
    });
  };

  function handleSubmitRegister(event) {
    event.preventDefault();
  }

  return (
    <StyledSection>
      <StyledForm onSubmit={handleSubmitRegister} primary>
        <H1>Registration Form</H1>
        <StyledPar>
          Please fill out this form with the required information
        </StyledPar>
        <div style={{margin: "2rem 0"}}>
          <StyledLabel htmlFor="email">Email adress:</StyledLabel>
          <StyledInput
            onChange={onInputChange}
            onBlur={validateInput}
            value={input.email}
            primary
            type="email"
            id="email"
            name="email"
            placeholder="Your email"
            required
          />
          {error.email && <ErrorSpan>{error.email}</ErrorSpan>}
        </div>
        <div style={{margin: "1.4rem 0"}}>
          <StyledLabel htmlFor="createPassword">
            Create Your Password:
          </StyledLabel>

          <StyledInput
            onChange={onInputChange}
            onBlur={validateInput}
            value={input.createPassword}
            primary
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
          <StyledLabel htmlFor="passwordVisibility1">Show password</StyledLabel>
          {error.createPassword && (
            <ErrorSpan>{error.createPassword}</ErrorSpan>
          )}
        </div>
        <div style={{margin: "1.4rem 0"}}>
          <StyledLabel htmlFor="confirmPassword">Confirm Password:</StyledLabel>

          <StyledInput
            onChange={onInputChange}
            value={input.confirmPassword}
            onBlur={validateInput}
            primary
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
          <StyledLabel htmlFor="passwordVisibility2">Show password</StyledLabel>
          {error.confirmPassword && (
            <ErrorSpan>{error.confirmPassword}</ErrorSpan>
          )}
        </div>
        <StyledDiv>
          <StyledButton primary type="submit">
            Register
          </StyledButton>
        </StyledDiv>
        <StyledPar>
          Already have an account?
          <StyledLink href="/login"> Sign in.</StyledLink>
        </StyledPar>
      </StyledForm>
    </StyledSection>
  );
}

const ErrorSpan = styled.p`
  font-size: 0.8rem;
  color: #d11818;
  margin: 0;
`;

const H1 = styled.h1`
  text-align: center;
  font-style: italic;
`;

const StyledPar = styled.p`
  text-align: center;
  margin: 0 0 1rem;
  font-style: italic;
`;
