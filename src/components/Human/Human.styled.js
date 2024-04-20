import styled from "styled-components";

export const FlexContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 1110px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const ContentWrapper = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 25px;

  @media (min-width: 568px) {
    width: 450px;
  }
  @media (min-width: 1110px) {
    text-align: start;
    margin-bottom: 0;
  }
`;

export const StyledTitle = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.fs22};
  line-height: ${(p) => p.theme.lineHeights.lh10};
  margin-bottom: 13px;

  color: ${(p) => p.theme.colors.prymary};
`;
export const StyledText = styled.p`
  font-size: ${(p) => p.theme.fontSizes.fs15};
  line-height: ${(p) => p.theme.lineHeights.lh16};
  margin-bottom: 37px;

  color: ${(p) => p.theme.colors.text};
`;

export const ImgWrapper = styled.div`
  display: flex;
  flex-direction: column;

  > img:first-child {
    margin-bottom: 8px;
    margin-right: 0;
  }

  @media (min-width: 1110px) {
    flex-direction: row;

    > img:first-child {
      margin-right: 8px;
      margin-bottom: 0;
    }
  }
`;
