import styled from "styled-components";
import img3 from "../../assets/images/img3.png";

export const CenterWrapper = styled.div`
  position: relative;
`;

export const StyledImg = styled.div`
  position: relative;
  width: 100%;
  margin: 19px auto;
  background: ${(p) => p.theme.colors.FooterBgColor} url(${img3}) no-repeat
    center/cover;
`;

export const ContentWrapepr = styled.div`
  padding: 100px 25px;
  margin: 0 auto;
  width: 100%;

  @media (min-width: 568px) {
    width: 542px;
    padding: 246px 0;
  }
`;

export const StyledTitle = styled.h2`
  margin-bottom: 21px;
  text-align: center;
  font-size: ${(p) => p.theme.fontSizes.fs22};
  line-height: ${(p) => p.theme.lineHeights.lh10};

  @media (min-width: 568px) {
    text-align: start;
  }
`;

export const StyledText = styled.p`
  font-size: ${(p) => p.theme.fontSizes.fs15};
  line-height: ${(p) => p.theme.lineHeights.lh16};
`;
