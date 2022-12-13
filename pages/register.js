import {useState} from "react";
import Checkbox from "../components/Checkbox";
import {
  H1,
  Styledbutton,
  StyledDiv3,
  StyledForm,
  StyledInput,
  StyledLabel,
  StyledLink,
  StyledPar,
  StyledSection,
} from "../components/FormSections";

export default function Register() {
  const [visible1, setVisible1] = useState(false);
  const [visible2, setVisible2] = useState(false);

  return (
    <>
      <StyledSection
        backgroundcolor={"#000000"}
        padding={"2rem"}
        display={"grid"}
        placeContent={"center"}
        height={"100vh"}
      >
        <StyledForm
          backgroundColor={"#9a9595"}
          padding={"2rem 1rem 0"}
          borderRadius={"1.5rem"}
          height={"75vh"}
          heightMedia={"68vh"}
        >
          <H1 textAlign={"center"} fontStyle={"italic"}>
            Registration Form
          </H1>
          <StyledPar textAlign={"center"} margin={"0"} fontStyle={"italic"}>
            Please fill out this form with the required information
          </StyledPar>
          <div style={{margin: "2rem 0"}}>
            <StyledLabel color={"#000000"} cursor={"pointer"} for="email">
              Email adress:
            </StyledLabel>
            <StyledInput
              width={"80vw"}
              height={"5vh"}
              border={"none"}
              backgroundColor={"#d9d9d9"}
              outline={"none"}
              paddingLeft={"0.8rem"}
              type="email"
              id="email"
              name="email"
              placeholder="Your email"
              required
            />
          </div>
          <div style={{margin: "1.4rem 0"}}>
            <StyledLabel
              color={"#000000"}
              cursor={"pointer"}
              for="createPassword"
            >
              Create Your Password:
            </StyledLabel>

            <StyledInput
              width={"80vw"}
              height={"5vh"}
              border={"none"}
              backgroundColor={"#d9d9d9"}
              outline={"none"}
              paddingLeft={"0.8rem"}
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
            <StyledLabel
              color={"#000000"}
              cursor={"pointer"}
              for="passwordVisibility1"
            >
              Show password
            </StyledLabel>
          </div>
          <div style={{margin: "1.4rem 0"}}>
            <StyledLabel for="confirmPassword">Confirm Password:</StyledLabel>

            <StyledInput
              width={"80vw"}
              height={"5vh"}
              border={"none"}
              backgroundColor={"#d9d9d9"}
              outline={"none"}
              paddingLeft={"0.8rem"}
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
            <StyledLabel
              color={"#000000"}
              cursor={"pointer"}
              for="passwordVisibility2"
            >
              Show password
            </StyledLabel>
          </div>
          <StyledDiv3 display={"flex"} justifyContent={"center"}>
            <Styledbutton
              backgroundColor={"#d11818"}
              color={"#ffffff"}
              border={"none"}
              borderRadius={"0.8rem"}
              width={"45vw"}
              height={"5vh"}
              cursor={"pointer"}
              margin={"0.5rem 0 1.5rem"}
              type="submit"
            >
              Register
            </Styledbutton>
          </StyledDiv3>
          <StyledPar textAlign={"center"} margin={"0"} fontStyle={"italic"}>
            Already have an account?
            <StyledLink textDecoration={"none"} color={"#d11818"} href="/login">
              {" "}
              Sign in
            </StyledLink>
          </StyledPar>
        </StyledForm>
      </StyledSection>
    </>
  );
}
