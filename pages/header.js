import styled from "styled-components";
import logo from "../public/images/other/logo.png";
import {Icon} from "@iconify/react";
import Link from "next/link";
import Image from "next/image";

export default function Header({children}) {
  return (
    <>
      <StyledHeader>
        <StyledLink href="/">
          <Image src={logo} width="150" height="100" alt="search find go" />
        </StyledLink>
        <StyledLink href="/movies">
          <span>Movies</span>
        </StyledLink>
        <StyledLink href="/series">
          <span>Series</span>
        </StyledLink>

        <form>
          <label>
            <SearchComponent>
              <Icon icon="ic:baseline-search" width="35" height="35" />
              <input type="search" id="search" />
            </SearchComponent>
          </label>
        </form>

        <StyledLink href="/login">
          <Icon icon="material-symbols:login" width="30" height="30" />
        </StyledLink>
        <StyledLink href="/register">
          <Icon icon="mdi:register" width="30" height="30" />
        </StyledLink>
      </StyledHeader>
      {children}
    </>
  );
}

const StyledHeader = styled.header`
  height: 15%;
  background-color: #010101;
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

const SearchComponent = styled.div`
  display: flex;
  border: 2px solid white;
  padding-left: 0.15rem;
  box-shadow: inset 0 0 1px white;
  border-radius: 20px;
  background-color: #9a9595;
  align-items: center;

  & Icon {
    @media screen and (max-width: 430px) {
      width: 40%;
    }
  }

  & input {
    border-radius: 15px;
    height: 5%;
    width: 14%;
    background-color: #9a9595;
    color: #ffffff;
    border: none;
    outline: none;

    @media screen and (max-width: 430px) {
      width: 15vw;
    }
  }
`;

const StyledLink = styled(Link)`
  list-style: none;
  text-decoration: none;
  color: #ffffff;

  & Image {
    @media screen and (max-width: 430px) {
      width: 20vw;
      height: 12vh;
      border-radius: 15px;
    }
  }

  & span {
    font-style: italic;
    @media screen and (max-width: 430px) {
      font-size: 0.85rem;
    }

    & Icon {
      @media screen and (max-width: 430px) {
        width: 8vw;
      }
    }
  }
`;
