import styled from "styled-components";
// import Image from "next/image";
import {Icon} from "@iconify/react";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
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
  );
}

// footer element
const StyledFooter = styled.footer`
  background-color: #000000;
  text-align: center;
  padding: 20px;
  font-style: italic;
`;

const StyledIcon = styled(Icon)`
  color: #ffffff;
`;

const Par = styled.p`
  margin: 0;
`;
