import styled from 'styled-components'

export const StyledList = styled.ul`
  display: flex;
  justify-content: space-between;
`

export const StyledItem = styled.li`
  display: flex;
  flex-direction: column;
  color: ${(p) => p.theme.colors.text};

  img {
    width: 24px;
    height: 24px;

    margin-right: 8px;
  }

  &::before {
    content: '';
    display: inline-block;

    width: 165px;
    height: 1px;
    margin-bottom: 17px;
    background-color: ${(p) => p.theme.colors.btnBorder};
  }
`
