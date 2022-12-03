import styled from "styled-components";
import {Icon} from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Hr />
      <StyledFooter>
        <Par>Find the Onwer At:</Par>
        <Link href="mailto:georgenatro@gmail.com">
          <StyledIcon
            icon="material-symbols:alternate-email"
            width="35"
            height="35"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/natrosvili/">
          <Icon icon="mdi:linkedin" width="35" height="35" />
        </Link>
        <Link href="https://github.com/Natrosvili">
          <StyledIcon icon="mdi:github" width="35" height="35" />
        </Link>
        <Par>
          ©{currentYear} Search Find Go! --All external content remains the
          property of the righful owner.
        </Par>
      </StyledFooter>
    </>
  );
}

const Hr = styled.hr`
  width: 100vw;
  margin: 0;
  height: 2px;
`;

// footer element
const StyledFooter = styled.footer`
  background-color: #000000;
  text-align: center;
  padding: 15px;
  font-style: italic;
`;

const StyledIcon = styled(Icon)`
  color: #ffffff;
`;

const Par = styled.p`
  padding: 0;
  padding: 1px 0 1px 0;
`;
