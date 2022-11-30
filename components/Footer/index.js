import styled from "styled-components";
import {Icon} from "@iconify/react";

export default function Footer() {
  return (
    <TheFooter>
      <ThePar>Find the Onwer At:</ThePar>
      <TheIcon href="">
        <TheIcon
          icon="material-symbols:alternate-email"
          width="35"
          height="35"
        />
      </TheIcon>
      <TheIcon href="">
        <LinkedIn icon="mdi:linkedin" width="35" height="35" />
      </TheIcon>
      <TheIcon href="">
        <Icon icon="mdi:github" width="35" height="35" />
      </TheIcon>
      <ThePar>
        ©2022 Search Find Go! --All external content remains the property of the
        righful owner.
      </ThePar>
    </TheFooter>
  );
}

const TheFooter = styled.footer`
  background-color: #000000;
  text-align: center;
  padding: 20px;
`;

const ThePar = styled.p`
  margin: 0;
`;

const TheIcon = styled.a`
  text-decoration: none;
`;

const LinkedIn = styled.img`
  color: #0072b1;
`;
