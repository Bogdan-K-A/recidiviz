import styled from "styled-components";

export const StyledHeader = styled.header`
  width: 100%;
  height: 67px;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`;
export const StyledLogo = styled.a`
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
