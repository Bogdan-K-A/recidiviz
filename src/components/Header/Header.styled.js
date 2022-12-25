import styled from 'styled-components'

export const StyledHeader = styled.header`
  width: 100%;
  position: absolute;
  top: 0;
  right: 0;
  z-index: 1;
`
export const StyledButton = styled.a`
  color: ${(p) => p.theme.colors.white};
  font-size: ${(p) => p.theme.fontSizes.fs12};
  line-height: ${(p) => p.theme.lineHeights.fh13};
`
