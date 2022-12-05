import styled from "styled-components";
import Image from "next/image";
import logo from "../../public/logo.png";
import {Icon} from "@iconify/react";
import Link from "next/link";

export default function Header({children}) {
  return (
    <>
      <StyledHeader>
        <StyledLink href="/main">
          <Img src={logo} width="200" height="100" alt="search find go" />
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
              <Icon icon="ic:baseline-search" width="35" height="35" />
              <Input type="search" id="search" placeholder="Search..." />
            </SearchComponent>
          </label>
        </form>

        <StyledLink href="">
          <Icon icon="material-symbols:login" width="35" height="35" />
        </StyledLink>
        <StyledLink href="">
          <Icon icon="mdi:register" width="35" height="35" />
        </StyledLink>
      </StyledHeader>
      <Hr />
      {children}
    </>
  );
}

// header element
const StyledHeader = styled.header`
  width: 100vw;
  height: 120px;
  background-color: #000000;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 576px) {
    font-size: 13px;
  }
`;

const Img = styled(Image)`
  @media screen and (max-width: 576px) {
    width: 150px;
    height: 80px;
  }
`;

// div behind input element
const SearchComponent = styled.div`
  display: flex;
  border: 2px solid white;
  padding-left: 5px;
  box-shadow: inset 0 0 1px white;
  border-radius: 20px;
  background-color: #9a9595;
  align-items: center;
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
`;

// input element
const Input = styled.input`
  border-radius: 15px;
  height: 40px;
  width: 200px;
  background-color: #9a9595;
  color: #ffffff;
  cursor: pointer;
  border: none;
  outline: none;

  @media screen and (max-width: 576px) {
    width: 170px;
  }
`;

const Hr = styled.hr`
  margin: 0;
  height: 2px;
  width: 100vw;
`;
