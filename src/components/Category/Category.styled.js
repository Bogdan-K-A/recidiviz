import styled from "styled-components";

export const ContentWrapper = styled.div`
  /* width: 724px;
  height: 310px;
  margin: 0 auto;
  text-align: center; */
`;

export const TitleWrapper = styled.div`
  margin-bottom: 57px;
  text-align: center;
`;

export const CatigoryList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin: 0 auto;
  text-align: center;
  height: 500px;

  @media (min-width: 1200px) {
    flex-direction: row;
    justify-content: space-between;
    width: 724px;
  }
`;

export const CatigoryItem = styled.li`
  position: relative;
  display: flex;
  flex-direction: row;
  align-items: center;

  @media (min-width: 1200px) {
    width: 126px;
    flex-direction: column;

    :last-child {
      width: 152px;
    }
  }

  :not(:first-child)::before {
    position: absolute;
    top: -80px;
    right: 96px;
    transform: rotate(90deg);
    content: "";
    display: inline-block;
    width: 176px;
    height: 1px;
    background: ${(p) => p.theme.colors.btnBorder};

    @media (min-width: 1200px) {
      top: 40px;
      right: 125px;
      transform: rotate(0deg);
    }
  }
`;

export const StyledCircle = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 0;
  margin-right: 19px;

  display: flex;
  justify-content: center;
  align-items: center;
  font-size: ${(p) => p.theme.fontSizes.fs16};
  background: ${(p) => p.theme.colors.bgColor1};
  border-radius: ${(p) => p.theme.radii[2]};

  @media (min-width: 1200px) {
    margin-bottom: 19px;
    margin-right: 0;
  }
`;

export const StyledText = styled.p`
  width: 142px;
  font-size: ${(p) => p.theme.fontSizes.fs15};
  line-height: ${(p) => p.theme.lineHeights.lh16};
  color: ${(p) => p.theme.colors.text};

  @media (min-width: 1200px) {
    width: 100%;
  }
`;
