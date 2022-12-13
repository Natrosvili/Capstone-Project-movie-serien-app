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
  StyledSection,
} from "../components/FormSections";

export default function LogIn() {
  const [visible, setVisible] = useState(false);

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
          height={"50vh"}
          heightMedia={"43vh"}
          method="post"
          autoComplete="on"
        >
          <H1
            margin={"0"}
            color={"#000000"}
            marginBottom={"2rem"}
            fontStyle={"italic"}
          >
            Sign In
          </H1>
          <div style={{margin: "1rem 0"}}>
            <StyledLabel for="email">Your Account:</StyledLabel>
            <StyledInput
              width={"75vw"}
              height={"5vh"}
              border={"none"}
              backgroundColor={"#d9d9d9"}
              outline={"none"}
              paddingLeft={"0.8rem"}
              withMedia={"80vw"}
              type="email"
              id="email"
              name="email"
              placeholder="Your Email"
              required
            />
          </div>
          <div style={{margin: "1rem 0"}}>
            <StyledLabel color={"#000000"} cursor={"pointer"} for="password">
              Your password:
            </StyledLabel>
            <StyledInput
              width={"75vw"}
              height={"5vh"}
              border={"none"}
              backgroundColor={"#d9d9d9"}
              outline={"none"}
              paddingLeft={"0.8rem"}
              withMedia={"80vw"}
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
            <StyledLabel
              color={"#000000"}
              cursor={"pointer"}
              for="passwordVisibility"
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
              width={"40vw"}
              height={"5vh"}
              cursor={"pointer"}
              marginTop={"0.5rem"}
              fontStyle={"italic"}
              type="submit"
            >
              Login
            </Styledbutton>
          </StyledDiv3>
          <p style={{textAlign: "center", fontStyle: "italic"}}>
            Don`t have an Account?
            <StyledLink
              textDecoration={"none"}
              color={"#d11818"}
              href="/register"
            >
              {" "}
              Register.
            </StyledLink>
          </p>
        </StyledForm>
      </StyledSection>
    </>
  );
}
