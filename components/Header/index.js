import styled from "styled-components";
import Image from "next/image";
import logo from "./logo.png";
import {Icon} from "@iconify/react";

export default function Header() {
  return (
    <StyledHeader>
      <Image src={logo} width="150" height="100" alt="search find go" />
      <Link href="">
        <Span>Movies</Span>
      </Link>
      <Link href="">
        <Span>Series</Span>
      </Link>
      <form>
        <label>
          <Search>
            <Icon icon="ic:baseline-search" width="35" height="35" />
          </Search>
        </label>
        <Input type="search" id="search" placeholder="Search..." />
      </form>

      <Link href="">
        <Icon icon="material-symbols:login" width="35" height="35" />
      </Link>
      <Link href="">
        <Icon icon="mdi:register" width="35" height="35" />
      </Link>
    </StyledHeader>
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
  border-bottom: 5px solid #ffffff;

  @media screen and (max-width: 622px) {
    font-size: 13px;
  }
`;

// Link element
const Link = styled.a`
  text-decoration: none;
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
  padding-left: 40px;
  cursor: pointer;

  @media screen and (max-width: 622px) {
    width: 170px;
  }
`;

// search Icon
const Search = styled.i`
  position: absolute;
  right: 615px;
  top: 40px;

  @media screen, (max-width: 622px) and (min-width: 622px) {
    left: 320px;
    top: 40px;
  }
`;
