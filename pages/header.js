import styled from "styled-components";
import {Icon} from "@iconify/react";
import Link from "next/link";
import SearchBar from "../components/SearchBar";

export default function Header({children}) {
  return (
    <>
      <StyledHeader>
        <StyledLink href="/">
          <Image src="/images/other/logo.png" alt="search find go" />
        </StyledLink>
        <StyledLink href="/movies">
          <span>Movies</span>
        </StyledLink>
        <StyledLink href="/series">
          <span>Series</span>
        </StyledLink>
        <SearchBar />
        <StyledLink href="/login">
          <Icon icon="material-symbols:login" width="25" height="25" />
        </StyledLink>
        <StyledLink href="/register">
          <Icon icon="mdi:register" width="25" height="25" />
        </StyledLink>
      </StyledHeader>
      {children}
    </>
  );
}

const StyledHeader = styled.header`
  width: 100%;
  height: 15%;
  background-color: #010101;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  align-items: center;
  text-align: center;
  border-bottom: 2px solid;
  position: fixed;
  top: 0;
  z-index: 1;

  @media screen and (max-width: 430px) {
    justify-content: space-between;
  }
`;

const StyledLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  color: #ffffff;

  & span {
    font-style: italic;
    font-size: 1.5rem;
    transition: all 0.3s ease-in-out;

    &:hover {
      font-size: 1.7rem;
    }

    @media screen and (max-width: 430px) {
      font-size: 0.9rem;

      &:hover {
        font-size: 1.2rem;
      }
    }
  }
`;

const Image = styled.img`
  width: 20vw;

  @media screen and (max-width: 430px) {
    width: 27vw;
    height: 10vh;
    border-radius: 15px;
  }
`;
