import styled from "styled-components";
// import { Link } from 'react-scroll';

//если использовать react-scroll тогда в ставить вместо а (Link)

export const StyledButton = styled.a`
  display: inline-block;
  white-space: nowrap;
  margin: ${({ margin }) => margin || "0"};
  padding: ${({ padding }) => padding || "0"};

  background-color: ${(p) =>
    p.bgColorNone ? "none" : p.theme.colors.btnColor};
  color: ${(p) => p.colorText || p.theme.colors.white};
  border: 1px solid ${(p) => p.theme.colors.btnBorder};
  /* font-size: ${(p) => p.theme.fontSizes.fs18}; */
  /* font-weight: ${(p) => p.theme.fontWeights.extraBold}; */

  border-radius: ${(p) => p.theme.radii[1]};

  cursor: pointer;
  transition: 0.5s ease;

  :hover,
  :focus {
    background-color: ${(p) => p.theme.colors.btnColor};
    color: ${(p) => p.theme.colors.white};
    transition: 0.5s ease;
  }
`;
