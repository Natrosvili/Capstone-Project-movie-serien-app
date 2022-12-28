import styled from "styled-components";
import {StyledIcon} from "./ShareSection";
import Link from "next/link";

export default function SocialMediaSection2() {
  return (
    <>
      <StyledSection>
        <h3>Share With Your Friends</h3>
        <p>Help me grow by sharing my website with your friends!</p>
        <Link href="https://www.facebook.com">
          <StyledIcon icon="logos:facebook" width="35" />
        </Link>
        <Link href="https://api.whatsapp.com">
          <StyledIcon icon="logos:whatsapp-icon" width="35" />
        </Link>
        <Link href="https://www.pinterest.com/">
          <StyledIcon icon="logos:pinterest" width="35" />
        </Link>
        <Link href="https://twitter.com">
          <StyledIcon icon="logos:twitter" width="35" />
        </Link>
      </StyledSection>
    </>
  );
}

const StyledSection = styled.section`
  grid-column: 3 / 3;
  grid-row: 2 / span 2;
  width: 100%;
  font-size: 1.21rem;

  @media screen and (max-width: 430px) {
    font-size: 0.666rem;
  }

  & h3 {
    margin: 0;
    color: #ffffff;
  }

  & p {
    color: #ffffff;
  }

  & Link {
    text-decoration: none;
  }
`;
