import styled from 'styled-components'

export const ContentWrapper = styled.div`
  width: 450px;
`
export const StyledTitle = styled.h2`
  font-size: ${(p) => p.theme.fontSizes.fs22};
  line-height: ${(p) => p.theme.lineHeights.lh10};
  margin-bottom: 13px;

  color: ${(p) => p.theme.colors.prymary};
`
export const StyledText = styled.p`
  font-size: ${(p) => p.theme.fontSizes.fs15};
  line-height: ${(p) => p.theme.lineHeights.lh16};
  margin-bottom: 37px;

  color: ${(p) => p.theme.colors.text};
`

export const ImgWrapper = styled.div`
  display: flex;

  > img:first-child {
    margin-right: 8px;
  }
`
