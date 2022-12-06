import styled from "styled-components";
import Image from "next/image";
import logo from "../public/logo.png";
import {Icon} from "@iconify/react";
import Link from "next/link";

export default function Header({children}) {
  return (
    <>
      <StyledHeader>
        <StyledLink href="/">
          <Img src={logo} width="150" height="100" alt="search find go" />
        </StyledLink>
        <StyledLink href="/movies">
          <Span>Movies</Span>
        </StyledLink>
        <StyledLink href="/series">
          <Span>Series</Span>
        </StyledLink>

        <form>
          <label>
            <SearchComponent>
              <SearchIcon icon="ic:baseline-search" width="35" height="35" />
              <Input type="search" id="search" />
            </SearchComponent>
          </label>
        </form>

        <StyledLink href="">
          <LoginIcon icon="material-symbols:login" width="35" height="35" />
        </StyledLink>
        <StyledLink href="">
          <RegisterIcon icon="mdi:register" width="35" height="35" />
        </StyledLink>
      </StyledHeader>
      <Hr />
      {children}
    </>
  );
}

// header element
const StyledHeader = styled.header`
  width: 100%;
  height: 15vh;
  background-color: #000000;
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 26.875rem) {
  }
`;

const Img = styled(Image)`
  @media screen and (max-width: 26.875rem) {
    width: 80%;
    height: 70%;
  }
`;

// div behind input element
const SearchComponent = styled.div`
  display: flex;
  border: 2px solid white;
  padding-left: 0, 3125rem;
  box-shadow: inset 0 0 1px white;
  border-radius: 20px;
  background-color: #9a9595;
  align-items: center;

  @media screen and (max-width: 26.875rem) {
    width: 100%;
    height: 60%;
  }
`;

// Link element
const StyledLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  z-index: 1;
  color: #ffffff;
`;

// span element
const Span = styled.span`
  font-style: italic;

  @media screen and (max-width: 26.875rem) {
    font-size: 1rem;
  }
`;

// input element
const Input = styled.input`
  border-radius: 15px;
  height: 5%;
  width: 14%;
  background-color: #9a9595;
  color: #ffffff;
  border: none;
  outline: none;
`;

const SearchIcon = styled(Icon)`
  @media screen and (max-width: 26.875rem) {
    width: 40%;
  }
`;

const LoginIcon = styled(Icon)`
  @media screen and (max-width: 26.875rem) {
    width: 100%;
  }
`;

const RegisterIcon = styled(Icon)`
  @media screen and (max-width: 26.875rem) {
    width: 100%;
  }
`;

const Hr = styled.hr`
  margin: 0;
`;
