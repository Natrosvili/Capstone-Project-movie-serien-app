import Link from "next/link";
import {useState} from "react";
import styled from "styled-components";

export default function LogIn() {
  const [visible, setVisible] = useState("password");
  const [isTrue, setIsTrue] = useState(false);

  function handleVisibility(event) {
    if (event.target.value == "on") {
      setVisible("text");
      setIsTrue(!isTrue);
    }

    {
      isTrue && setVisible("password");
    }
  }

  return (
    <>
      <StyledSection>
        <StyledForm method="post" autoComplete="on">
          <H1>
            <em>Sign In</em>
          </H1>
          <StyledDiv1>
            <StyledLabel for="account">Your Account:</StyledLabel>
            <br />
            <StyledInput1
              type="email"
              id="account"
              name="account"
              placeholder="Your Email"
              required
            />
            <br />
          </StyledDiv1>
          <StyledDiv2>
            <StyledLabel for="password">Your password:</StyledLabel>
            <br />
            <StyledInput2
              type={visible}
              id="password"
              name="password"
              placeholder="Password"
              required
            />
            <br />
            <input
              onChange={handleVisibility}
              type="checkbox"
              id="passwordVisibility"
              name="passwordVisibility"
            />
            <StyledLabel for="passwordVisibility">Show password</StyledLabel>
          </StyledDiv2>
          <StyledDiv3>
            <Styledbutton type="submit">
              <em>Login</em>
            </Styledbutton>
          </StyledDiv3>
          <br />
          <StyledPar>
            Don`t have an Account?{" "}
            <em>
              <StyledLink href="#">Register.</StyledLink>
            </em>
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
  height: 55vh;
`;

const H1 = styled.h1`
  margin: 0;
  color: #000000;
  margin-bottom: 2rem;
`;

const StyledLabel = styled.label`
  color: #000000;
  cursor: pointer;
`;

const StyledInput1 = styled.input`
  width: 38vw;
  height: 5vh;
  border: none;
  /* margin-bottom: 1.5rem; */
  background-color: #d9d9d9;
  outline: none;
  padding-left: 0.8rem;

  @media screen and (max-width: 430px) {
    width: 42vh;
  }
`;

const StyledInput2 = styled.input`
  width: 38vw;
  height: 5vh;
  border: none;
  background-color: #d9d9d9;
  outline: none;
  padding-left: 0.8rem;

  @media screen and (max-width: 430px) {
    width: 42vh;
  }
`;

const StyledDiv1 = styled.div`
  margin: 1rem 0;
`;

const StyledDiv2 = styled.div`
  margin: 1rem 0;
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
  width: 60vw;
  height: 5vh;
  cursor: pointer;
  margin-top: 0.5rem;
`;

const StyledPar = styled.p`
  text-align: center;
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  color: #d11818;
`;
