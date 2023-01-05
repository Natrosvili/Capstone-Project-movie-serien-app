import styled from "styled-components";
import {Icon} from "@iconify/react";

export default function SearchBar() {
  return (
    <form>
      <label>
        <SearchComponent>
          <Icon icon="ic:baseline-search" width="35" height="35" />
          <input type="text" id="search" placeholder="Search..." />
        </SearchComponent>
      </label>
    </form>
  );
}

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

    &:focus {
      outline: none;
    }

    @media screen and (max-width: 430px) {
      width: 17vw;
    }
  }
`;
