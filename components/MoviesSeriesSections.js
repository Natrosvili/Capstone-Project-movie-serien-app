import styled from "styled-components";
import {Icon} from "@iconify/react";
import Image from "next/image";

export const StyledSection = styled.section`
  text-align: ${props => props.textAlign};
  margin: ${props => props.margin};
  height: ${props => props.height};

  @media screen and (max-width: 430px) {
    margin: ${props => props.marginMedia};
    height: ${props => props.heightMedia};
  }
`;

export const MinSpan = styled.span`
  position: ${props => props.position};
  left: ${props => props.left};

  @media screen and (max-width: 430px) {
    left: ${props => props.leftMedia};
    font-size: ${props => props.fontSizeMedia};
  }
`;

export const Photo = styled(Image)`
  width: ${props => props.width};
  height: ${props => props.height};
  left: ${props => props.left};
  top: ${props => props.top};
  background: ${props => props.background};
  border-radius: ${props => props.borderRadius};

  @media screen and (max-width: 430px) {
    width: ${props => props.widthMedia};
    height: ${props => props.heightMedia};
  }
`;

export const H2 = styled.h2`
  @media screen and (max-width: 430px) {
    text-align: ${props => props.textAlignMedia};
  }
`;

export const GridSection = styled.section`
  text-align: ${props => props.textAlign};
  display: ${props => props.display};
  place-content: ${props => props.placeContent};
  grid-template-rows: ${props => props.templateRows};
  grid-template-columns: ${props => props.templateColumns};
  column-gap: ${props => props.columnGap};
  padding: ${props => props.padding};
  width: ${props => props.width};
  height: ${props => props.height};

  @media screen and (max-width: 430px) {
    grid-template-rows: ${props => props.templateRowsMedia};
    grid-template-columns: ${props => props.templateColumnsMedia};
    row-gap: ${props => props.rowGapMedia};
  }
`;

export const ImageContainer = styled.div`
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  grid-row: ${props => props.gridRow};
  grid-column: ${props => props.gridColumn};
  display: ${props => props.display};
  align-items: ${props => props.alignItems};
  height: ${props => props.height};
`;

export const Img = styled.img`
  width: ${props => props.width};
`;

export const StyledIcon = styled(Icon)`
  @media screen and (max-width: 430px) {
    width: ${props => props.widthMedia};
  }
`;

export const StyledDiv = styled.div`
  grid-column: ${props => props.gridColumn};
  grid-row: ${props => props.gridRow};
  width: ${props => props.width};
  font-size: ${props => props.fontSize};
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
  margin: ${props => props.margin};

  @media screen and (max-width: 430px) {
    font-size: ${props => props.fontSizeMedia};
    justify-content: ${props => props.justifyContentMedia};
    text-align: ${props => props.textAlignMedia};
  }
`;

export const EpSpan = styled.span`
  color: ${props => props.color};
  position: ${props => props.position};
  left: ${props => props.left};
  font-style: ${props => props.fontStyle};

  @media screen and (max-width: 430px) {
    left: ${props => props.leftMedia};
    font-size: ${props => props.fontSizeMedia};
  }
`;
