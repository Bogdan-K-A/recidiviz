import styled from 'styled-components'

export const StyledMenu = styled.div`
  padding: 112px 0 137px 0;
  background-color: ${(p) => p.theme.colors.darkGreen};
`

export const StyledFooter = styled.div`
  padding: 40px 0 63px 0;
  background-color: ${(p) => p.theme.colors.FooterBgColor};
`

export const DescriptionText = styled.p`
  width: 257px;

  text-align: right;
  font-size: ${(p) => p.theme.fontSizes.fs10};
  line-height: ${(p) => p.theme.lineHeights.lh15};

  color: ${(p) => p.theme.colors.white};
`
