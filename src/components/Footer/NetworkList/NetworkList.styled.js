import styled from "styled-components";

export const StyledNetwork = styled.div`
  margin-left: 0;

  @media (min-width: 640px) {
    margin-left: auto;
  }
`;
export const StyledTitle = styled.p`
  margin-bottom: 24px;

  font-size: ${(p) => p.theme.fontSizes.fs11};
  line-height: ${(p) => p.theme.lineHeights.lh14};

  letter-spacing: 1px;
  text-transform: uppercase;

  color: ${(p) => p.theme.colors.titleFooterColor};
`;

export const StyledList = styled.ul`
  ::before {
    content: "";
    display: inline-block;
    width: 16px;
    height: 1px;
    background: ${(p) => p.theme.colors.dividerColor};
    margin-bottom: 23px;
  }
`;
export const StyledItem = styled.li`
  font-size: ${(p) => p.theme.fontSizes.fs15};

  color: ${(p) => p.theme.colors.footerColorText};
  :not(:last-child) {
    margin-bottom: 16px;
  }
`;
