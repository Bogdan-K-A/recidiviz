import styled from 'styled-components'

export const StyledFlex = styled.div`
  display: flex;
  flex-direction: ${({ direction }) => direction || 'row'};
  align-items: ${({ align }) => align || 'stretch'};
  justify-content: ${({ justify }) => justify || 'stretch'};
  margin: ${({ margin }) => margin || '0'};
`
