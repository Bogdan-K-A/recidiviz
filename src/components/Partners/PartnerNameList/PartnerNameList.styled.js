import styled from 'styled-components'

export const StyledList = styled.ul`
  display: flex;
  margin: 0 7px;
`
export const StyledItem = styled.li`
  :not(:last-child) {
    margin-right: 13px;
  }
`
export const StyledLink = styled.a`
  font-size: 11px;
  line-height: 1.4;
  /* identical to box height, or 145% */

  letter-spacing: 0.5px;
  text-transform: uppercase;

  color: rgba(53, 83, 98, 0.6);
`
