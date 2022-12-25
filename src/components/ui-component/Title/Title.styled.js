import styled from 'styled-components'

export const StyledTitle = styled.h2`
  padding: ${({ padding }) => padding || '0'};
  margin: ${({ margin }) => margin || '0'};

  color: ${(p) => p.color || p.theme.colors.prymary};

  font-family: ${(p) => p.theme.fonts.heading};
  font-weight: ${(p) => p.theme.fontWeights.regular};
  font-size: ${(p) => p.theme.fontSizes.fs30};
  line-height: ${(p) => p.theme.lineHeights.lh13};
  letter-spacing: 1.2px;
`
