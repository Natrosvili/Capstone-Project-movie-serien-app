import Link from "next/link";
import {useState} from "react";
import styled from "styled-components";

export default function LogIn() {
  const [visible, setVisible] = useState(false);

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
              checked={visible}
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
  width: 40vw;
  height: 5vh;
  cursor: pointer;
  margin-top: 0.5rem;
  font-style: italic;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #d11818;
  font-style: italic;
`;
