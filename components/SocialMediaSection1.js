import styled from "styled-components";
import Link from "next/link";
import {StyledIcon} from "./ShareSection";

export default function SocialMediaSection1() {
  return (
    <>
      <ShareSection>
        <Link href="https://www.facebook.com">
          <StyledIcon primary icon="logos:facebook" width="35" />
        </Link>
        <Link href="https://api.whatsapp.com">
          <StyledIcon primary icon="logos:whatsapp-icon" width="35" />
        </Link>
        <Link href="https://www.pinterest.com/">
          <StyledIcon primary icon="logos:pinterest" width="35" />
        </Link>
        <Link href="https://twitter.com">
          <StyledIcon primary icon="logos:twitter" width="35" />
        </Link>
      </ShareSection>
    </>
  );
}

const ShareSection = styled.section`
  display: flex;
  justify-content: center;
  width: 100%;
  font-size: 1.21rem;

  @media screen and (max-width: 430px) {
    font-size: 0.666rem;
  }
`;
