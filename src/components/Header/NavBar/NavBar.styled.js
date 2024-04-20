import styled from "styled-components";

export const StyledNav = styled.nav`
  margin-right: 0;

  @media (min-width: 993px) {
    margin-right: 32px;
  }
`;
export const StyledList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-top: 100px;

  @media (min-width: 993px) {
    padding-top: 0;
    flex-direction: row;
  }
`;

export const StyledItem = styled.li`
  margin-bottom: 26px;
  padding: 0;
  font-size: ${(p) => p.theme.fontSizes.fs22};
  color: ${(p) => p.theme.colors.white};
  cursor: pointer;

  @media (min-width: 993px) {
    padding: 26px 0;
    margin-bottom: 0;
    :not(:last-child) {
      margin-right: 51px;
    }
  }
`;
