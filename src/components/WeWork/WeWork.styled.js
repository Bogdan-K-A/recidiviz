import styled from "styled-components";

export const FlexBox = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  div:not(:last-child) {
    margin-bottom: 37px;
  }

  @media (min-width: 768px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const DescriptionText = styled.p`
  width: 100%;
  margin-bottom: 37px;

  font-size: ${(p) => p.theme.fontSizes.fs18};
  line-height: ${(p) => p.theme.lineHeights.lh16};

  @media (min-width: 768px) {
    width: 300px;
  }
`;

export const StyledContainer = styled.div`
  background: ${(p) => p.theme.colors.bgColor2};
`;
