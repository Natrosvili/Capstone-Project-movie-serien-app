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
        <p style={{padding: "0.0625em 0", color: "#ffffff"}}>
          <em>Find the Onwer At:</em>
        </p>
        <Link href="mailto:georgenatro@gmail.com">
          <Icon
            style={{color: "#ffffff"}}
            icon="material-symbols:alternate-email"
            width="35"
            height="35"
          />
        </Link>
        <Link href="https://www.linkedin.com/in/natrosvili/">
          <Icon icon="mdi:linkedin" width="35" height="35" />
        </Link>
        <Link href="https://github.com/Natrosvili">
          <Icon
            style={{color: "#ffffff"}}
            icon="mdi:github"
            width="35"
            height="35"
          />
        </Link>
        <p style={{padding: "0.0625em 0", color: "#ffffff"}}>
          <em>
            ©{year} Search Find Go! --All external content remains the property
            of the righful owner.
          </em>
        </p>
      </StyledFooter>
    </>
  );
}

// footer element
const StyledFooter = styled.footer`
  background-color: #010101;
  text-align: center;
  padding: 0.9375em;
  border-top: 2px solid;
`;
