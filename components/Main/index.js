import styled from "styled-components";

export default function Main() {
  return (
    <>
      <StyledMain>
        <div>
          <H1>Find Movies and Series</H1>
          <p>
            searchfind.go - Just a better place to find Movies and Series for
            free. It allows you to find Movies and Series in high Quality. Just
            open searchfind.go, find your favorite Series and Movies, and have
            fun.
          </p>
        </div>
      </StyledMain>
    </>
  );
}

const StyledMain = styled.main`
  text-align: center;
  font-style: italic;
`;

const H1 = styled.h1`
  padding: 10px;
`;
