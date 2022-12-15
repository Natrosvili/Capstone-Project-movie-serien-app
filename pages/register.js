
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
import styled from "styled-components";
import {useState} from "react";
import Link from "next/link";


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

  return (
    <>
      <StyledSection>
        <StyledForm>
          <H1>Registration Form</H1>
          <StyledPar>
            Please fill out this form with the required information
          </StyledPar>
          <StyledDiv1>
            <StyledLabel for="email">Email adress:</StyledLabel>
            <StyledInput
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </StyledDiv1>
          <StyledDiv2>
            <StyledLabel for="createPassword">
              Create Your Password:
            </StyledLabel>
            <StyledInput
              type={visible1 ? "text" : "password"}
              id="createPassword"
              name="createPassword"
              placeholder="Your password"
              required
            />
            <input
              onChange={() => setVisible1(!visible1)}
              type="checkbox"
              id="passwordVisibility1"
              name="passwordVisibility1"
            />
            <StyledLabel for="passwordVisibility1">Show password</StyledLabel>
          </StyledDiv2>
          <StyledDiv2>
            <label for="confirmPassword">Confirm Password:</label>
            <StyledInput
              type={visible2 ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              placeholder="Your password"
              required
            />
            <input
              onChange={() => setVisible2(!visible2)}
              type="checkbox"
              id="passwordVisibility2"
              name="passwordVisibility2"
            />
            <StyledLabel for="passwordVisibility2">Show password</StyledLabel>
          </StyledDiv2>
          <StyledDiv3>
            <Styledbutton type="submit">Register</Styledbutton>
          </StyledDiv3>
          <StyledPar>
            Already have an account?
            <StyledLink href="/login"> Sign in</StyledLink>
          </StyledPar>
        </StyledForm>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  background-color: #000000;
  padding: 2rem;
  display: grid;
  place-content: center;
  height: 100vh;
`;

const StyledForm = styled.form`
  background-color: #9a9595;
  padding: 2rem 1rem 0;
  border-radius: 1.5rem;
  height: 75vh;

  @media screen and (max-width: 430px) {
    height: 80vh;
  }
`;

const H1 = styled.h1`
  text-align: center;
  font-style: italic;
`;

const StyledPar = styled.p`
  text-align: center;
  margin: 0;
  font-style: italic;
`;

const StyledLabel = styled.label`
  color: #000000;
  cursor: pointer;
`;

const StyledInput = styled.input`
  width: 60vw;
  height: 5vh;
  border: none;
  background-color: #d9d9d9;
  outline: none;
  padding-left: 0.8rem;

  @media screen and (max-width: 430px) {
    width: 80vw;
  }
`;

const StyledDiv1 = styled.div`
  margin: 2rem 0;
`;

const StyledDiv2 = styled.div`
  margin: 1.4rem 0;
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
  width: 45vw;
  height: 5vh;
  cursor: pointer;
  margin: 0.5rem 0 1.5rem;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #d11818;

`;
