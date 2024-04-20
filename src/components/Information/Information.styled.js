import styled from "styled-components";
import img4 from "../../assets/images/img4.png";

export const StyledImg = styled.div`
  position: relative;
  width: 100%;
  height: 680px;

  margin: 0 auto 50px auto;
  background: ${(p) => p.theme.colors.light} url(${img4});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;
export const FlexBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 993px) {
    justify-content: space-between;
    flex-direction: row;
  }
`;

export const TitleWrapper = styled.div`
  text-align: center;
  width: 100%;
  margin-bottom: 30px;

  @media (min-width: 568px) {
    width: 424px;
  }
  @media (min-width: 993px) {
    text-align: start;
  }
`;

export const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap: 0;
  grid-row-gap: 36px;

  @media (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 40px;
    grid-row-gap: 36px;
  }
`;

export const StyledItem = styled.li`
  width: 100%;
  font-size: ${(p) => p.theme.fontSizes.fs15};
  line-height: ${(p) => p.theme.lineHeights.lh16};
  color: ${(p) => p.theme.colors.text};

  @media (min-width: 568px) {
    width: 265px;
  }
`;

export const StyledSmollTitle = styled.p`
  margin-bottom: 4px;
  color: ${(p) => p.theme.colors.prymary};
`;
