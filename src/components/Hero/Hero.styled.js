import styled from 'styled-components'
import { motion } from 'framer-motion'
import heroImg from '../../assets/images/hero-img.png'

export const StyledHero = styled.section`
  position: relative;
  max-width: 1280px;
  min-height: 776px;

  margin: 0 auto;
  background: ${(p) => p.theme.colors.darkGreen} url(${heroImg});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const StyledContentWrapper = styled.div`
  position: absolute;
  top: 190px;

  width: 535px;
  height: 344px;
`

export const StyledTitle = styled(motion.h1)`
  margin-bottom: 29px;

  font-family: ${(p) => p.theme.fonts.heading};
  font-size: ${(p) => p.theme.fontSizes.fs38};
  line-height: ${(p) => p.theme.lineHeights.lh12};

  letter-spacing: 1.2px;
`

export const StyledText = styled.p`
  margin-bottom: 29px;
  font-size: ${(p) => p.theme.fontSizes.fs18};
  line-height: ${(p) => p.theme.lineHeights.lh16};
`

export const WrapperList = styled.div`
  position: absolute;
  bottom: 40px;
  width: 1152px;

  > p {
    margin-bottom: 15px;
  }
`

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    display: inline-block;

    width: 165px;
    height: 1px;
    margin-bottom: 17px;
    background-color: ${(p) => p.theme.colors.whiteTransparent};
  }
`
