import styled from "styled-components";
import { Link } from "react-scroll";

export const StyledHeader = styled.header`
  width: 100%;

  position: sticky;
  top: 0;
  background: ${({ scroll, theme }) => {
    return scroll >= 80 ? theme.colors.bgHeader : "transparent";
  }};

  z-index: 99;
`;
export const StyledLogo = styled(Link)`
  padding: 20px 0;
`;

export const HiddenStiled = styled.div`
  display: none;

  @media (min-width: 993px) {
    display: block;
  }
`;

export const StyledIcon = styled.div`
  display: block;

  @media (min-width: 993px) {
    display: none;
  }
`;

export const StyledButton = styled.a`
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fontSizes.fs12};
  line-height: ${(p) => p.theme.lineHeights.fh13};
`;
