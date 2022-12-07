import styled from "styled-components";
import {Icon} from "@iconify/react";
import Link from "next/link";
import {useEffect, useState} from "react";

export default function Footer() {
  const [year, setYear] = useState(null);

  useEffect(() => {
    setYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <StyledFooter>
        <Par>
          <em>Find the Onwer At:</em>
        </Par>
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
          <em>
            ©{year} Search Find Go! --All external content remains the property
            of the righful owner.
          </em>
        </Par>
      </StyledFooter>
    </>
  );
}

// footer element
const StyledFooter = styled.footer`
  background-color: #000000;
  text-align: center;
  padding: 0.9375em;
  border-top: 2px solid;
`;

const StyledIcon = styled(Icon)`
  color: #ffffff;
`;

const Par = styled.p`
  padding: 0.0625em 0;
`;
