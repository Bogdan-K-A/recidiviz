import styled from "styled-components";
import { motion } from "framer-motion";
import heroImg from "../../assets/images/hero-img.png";

export const StyledHero = styled.section`
  position: relative;
  width: 100%;
  height: 776px;
  background: ${(p) => p.theme.colors.darkGreen} url(${heroImg}) no-repeat
    center/cover;
`;

export const StyledContentWrapper = styled.div`
  padding-top: 100px;
  height: 344px;

  @media (min-width: 768px) {
    width: 535px;
    padding-top: 200px;
  }
`;

export const StyledTitle = styled(motion.h1)`
  margin-bottom: 29px;
  font-family: ${(p) => p.theme.fonts.heading};
  font-size: ${(p) => p.theme.fontSizes.fs20};
  line-height: ${(p) => p.theme.lineHeights.lh12};
  letter-spacing: 1.2px;

  @media (min-width: 568px) {
    font-size: ${(p) => p.theme.fontSizes.fs38};
  }
`;

export const StyledText = styled.p`
  margin-bottom: 29px;
  font-size: ${(p) => p.theme.fontSizes.fs16};
  line-height: ${(p) => p.theme.lineHeights.lh16};

  @media (min-width: 568px) {
    font-size: ${(p) => p.theme.fontSizes.fs18};
  }
`;

export const WrapperList = styled.div`
  margin-top: 29px;
`;

export const StyledList = styled.ul`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-template-rows: 1fr;
  grid-row-gap: 15px;

  @media (min-width: 568px) {
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: 3fr;
    grid-column-gap: 30px;
    grid-row-gap: 30px;
  }

  @media (min-width: 767px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 2fr;
    grid-column-gap: 30px;
  }

  @media (min-width: 1280px) {
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 1fr;
    grid-column-gap: 30px;
    grid-row-gap: 0;
  }
`;

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;

  &::before {
    content: "";
    display: inline-block;
    width: 100%;
    height: 1px;
    margin-bottom: 17px;
    background-color: ${(p) => p.theme.colors.whiteTransparent};
  }

  @media (min-width: 568px) {
    &::before {
      width: 165px;
    }
  }
`;
