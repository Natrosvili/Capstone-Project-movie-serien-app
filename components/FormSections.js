import Link from "next/link";
import styled from "styled-components";

export const StyledSection = styled.section`
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding};
  display: ${props => props.display};
  place-content: ${props => props.placeContent};
  height: ${props => props.height};
`;

export const StyledForm = styled.form`
  background-color: ${props => props.backgroundColor};
  padding: ${props => props.padding};
  border-radius: ${props => props.borderRadius};
  height: ${props => props.height};

  @media screen and (max-width: 430px) {
    height: ${props => props.heightMedia};
  }
`;

export const H1 = styled.h1`
  text-align: ${props => props.textAlign};
  font-style: ${props => props.fontStyle};
  margin: ${props => props.margin};
  font-style: ${props => props.fontStyle};
  color: ${props => props.color};
  margin-bottom: ${props => props.marginBottom};
`;

export const StyledPar = styled.p`
  text-align: ${props => props.textAlign};
  margin: ${props => props.margin};
  font-style: ${props => props.fontStyle};
`;

export const StyledLabel = styled.label`
  color: ${props => props.color};
  cursor: ${props => props.cursor};
`;

export const StyledInput = styled.input`
  width: ${props => props.width};
  height: ${props => props.height};
  border: ${props => props.border};
  background-color: ${props => props.backgroundColor};
  outline: ${props => props.outline};
  padding-left: ${props => props.paddingLeft};

  @media screen and (max-width: 430px) {
    width: ${props => props.widthMedia};
  }
`;

export const StyledDiv3 = styled.div`
  display: ${props => props.display};
  justify-content: ${props => props.justifyContent};
`;

export const Styledbutton = styled.button`
  background-color: ${props => props.backgroundColor};
  color: ${props => props.color};
  border: ${props => props.border};
  border-radius: ${props => props.borderRadius};
  width: ${props => props.width};
  height: ${props => props.height};
  cursor: ${props => props.cursor};
  margin: ${props => props.margin};
  margin-top: ${props => props.marginTop};
  font-style: ${props => props.fontStyle};
`;

export const StyledLink = styled(Link)`
  text-decoration: ${props => props.textDecoration};
  color: ${props => props.color};
  font-style: ${props => props.fontStyle};
`;
