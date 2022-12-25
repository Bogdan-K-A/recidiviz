import styled from 'styled-components'
import img3 from '../../../assets/images/img3.png'

export const StyledSection = styled.section`
  padding: ${({ padding }) => padding || '0'};
  background-color: ${(p) => p.background || `${p.theme.colors.white}`};
`
export const PartnersSection = styled(StyledSection)`
  position: relative;
  max-width: 1280px;
  min-height: 680px;

  margin: 19px auto;
  background: ${(p) => p.theme.colors.FooterBgColor} url(${img3});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`
