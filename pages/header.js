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
          <StyledSpan>
            <em>Movies</em>
          </StyledSpan>
        </StyledLink>
        <StyledLink href="/series">
          <StyledSpan>
            <em>Series</em>
          </StyledSpan>
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
      {children}
    </>
  );
}

// header element
const StyledHeader = styled.header`
  height: 15%;
  background-color: #000000;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  text-align: center;
  border-bottom: 2px solid;

  @media screen and (max-width: 430px) {
    padding-top: 17%;
    justify-content: space-between;
  }
`;

const Img = styled(Image)`
  @media screen and (max-width: 430px) {
    width: 80%;
    height: 70%;
  }
`;

// div behind input element
const SearchComponent = styled.div`
  display: flex;
  border: 2px solid white;
  padding-left: 0.15rem;
  box-shadow: inset 0 0 1px white;
  border-radius: 20px;
  background-color: #9a9595;
  align-items: center;
`;

// Link element
const StyledLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  color: #ffffff;
`;

// span element
const StyledSpan = styled.span`
  @media screen and (max-width: 430px) {
    font-size: 0.85rem;
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
  @media screen and (max-width: 430px) {
    width: 40%;
  }
`;

const LoginIcon = styled(Icon)`
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;

const RegisterIcon = styled(Icon)`
  @media screen and (max-width: 430px) {
    width: 100%;
  }
`;
