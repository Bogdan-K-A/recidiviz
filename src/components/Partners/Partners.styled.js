import styled from 'styled-components'
import img3 from '../../assets/images/img3.png'

export const CenterWrapper = styled.div`
  position: relative;
`

export const StyledImg = styled.div`
  position: relative;
  max-width: 1280px;
  min-height: 680px;

  margin: 19px auto;
  background: ${(p) => p.theme.colors.FooterBgColor} url(${img3});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`

export const ContentWrapepr = styled.div`
  padding: 246px 0;
  margin: 0 auto;

  width: 542px;
`

export const StyledTitle = styled.h2`
  margin-bottom: 21px;

  font-size: ${(p) => p.theme.fontSizes.fs22};
  line-height: ${(p) => p.theme.lineHeights.lh10};
`

export const StyledText = styled.p`
  font-size: ${(p) => p.theme.fontSizes.fs15};
  line-height: ${(p) => p.theme.lineHeights.lh16};
`
