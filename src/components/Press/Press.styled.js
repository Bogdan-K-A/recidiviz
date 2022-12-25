import styled from 'styled-components'

export const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-column-gap: 31px;
  grid-row-gap: 47px;
`

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;

  height: 130px;

  font-size: ${(p) => p.theme.fontSizes.fs11};
  line-height: ${(p) => p.theme.lineHeights.lh14};
  letter-spacing: 0.5px;

  color: ${(p) => p.theme.colors.textDate};

  img {
    width: 24px;
    height: 24px;

    margin-right: 16px;
  }

  &::before {
    content: '';
    display: inline-block;

    width: 363px;
    height: 1px;
    margin-bottom: 16px;
    background-color: ${(p) => p.theme.colors.btnBorder};
  }
`

export const StyledText = styled.p`
  margin-right: 16px;
`

export const StyledDescription = styled.p`
  margin-top: 7px;

  width: 350px;

  font-size: ${(p) => p.theme.fontSizes.fs17};
  line-height: ${(p) => p.theme.lineHeights.lh14};

  color: ${(p) => p.theme.colors.btnText};
`
