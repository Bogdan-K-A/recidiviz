import styled from 'styled-components'

export const ContentWrapper = styled.div`
  width: 724px;
  height: 310px;

  margin: 0 auto;

  text-align: center;
`

export const TitleWrapper = styled.div`
  margin-bottom: 57px;
`

export const CatigoryList = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const CatigoryItem = styled.li`
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 126px;

  :not(:first-child)::before {
    position: absolute;
    top: 40px;
    right: 125px;

    content: '';
    display: inline-block;
    width: 176px;
    height: 1px;
    background: ${(p) => p.theme.colors.btnBorder};
  }
`

export const StyledCircle = styled.div`
  width: 48px;
  height: 48px;

  margin-bottom: 19px;

  display: flex;
  justify-content: center;
  align-items: center;

  font-size: ${(p) => p.theme.fontSizes.fs16};

  background: ${(p) => p.theme.colors.bgColor1};
  border-radius: ${(p) => p.theme.radii[2]};
`

export const StyledText = styled.p`
  font-size: ${(p) => p.theme.fontSizes.fs15};
  line-height: ${(p) => p.theme.lineHeights.lh16};
  color: ${(p) => p.theme.colors.text};
`
