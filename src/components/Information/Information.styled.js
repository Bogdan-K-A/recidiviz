import styled from 'styled-components'
import img4 from '../../assets/images/img4.png'

export const StyledImg = styled.div`
  position: relative;
  max-width: 1280px;
  min-height: 680px;

  margin: 0 auto 50px auto;
  background: ${(p) => p.theme.colors.light} url(${img4});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
export const TitleWrapper = styled.div`
  width: 424px;
`

export const StyledGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 36px;
`

export const StyledItem = styled.li`
  width: 265px;
  font-size: ${(p) => p.theme.fontSizes.fs15};
  line-height: ${(p) => p.theme.lineHeights.lh16};

  color: ${(p) => p.theme.colors.text};
`
export const StyledSmollTitle = styled.p`
  margin-bottom: 4px;

  color: ${(p) => p.theme.colors.prymary};
`
