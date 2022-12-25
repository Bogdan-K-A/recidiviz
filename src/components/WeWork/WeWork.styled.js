import styled from 'styled-components'

export const DescriptionText = styled.p`
  width: 300px;
  margin-bottom: 37px;

  font-size: ${(p) => p.theme.fontSizes.fs18};
  line-height: ${(p) => p.theme.lineHeights.lh16};
`

export const StyledContainer = styled.div`
  background: ${(p) => p.theme.colors.bgColor2};
`
