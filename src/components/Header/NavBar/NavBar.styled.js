import styled from 'styled-components'

export const StyledNav = styled.nav`
  margin-right: 32px;
`
export const StyledList = styled.ul`
  display: flex;
`

export const StyledItem = styled.li`
  padding: 26px 0;
  color: ${(p) => p.theme.colors.white};

  cursor: pointer;

  :not(:last-child) {
    margin-right: 51px;
  }
`
