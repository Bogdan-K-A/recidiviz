import styled from "styled-components";

export const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 47px;

  @media (min-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 31px;
    grid-row-gap: 47px;
    justify-items: center;
  }

  @media (min-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 31px;
    grid-row-gap: 47px;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  height: 130px;
  font-size: ${(p) => p.theme.fontSizes.fs11};
  line-height: ${(p) => p.theme.lineHeights.lh14};
  letter-spacing: 0.5px;
  color: ${(p) => p.theme.colors.textDate};

  img {
    width: 24px;
    height: 24px;
    margin-right: 16px;
  }

  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    margin-bottom: 16px;
    background-color: ${(p) => p.theme.colors.btnBorder};

    @media (min-width: 768px) {
      width: 363px;
    }
  }
`;

export const StyledText = styled.p`
  margin-right: 16px;
`;

export const StyledDescription = styled.p`
  margin-top: 7px;
  width: 100%;
  font-size: ${(p) => p.theme.fontSizes.fs17};
  line-height: ${(p) => p.theme.lineHeights.lh14};
  color: ${(p) => p.theme.colors.btnText};

  @media (min-width: 568px) {
    width: 350px;
  }
`;
