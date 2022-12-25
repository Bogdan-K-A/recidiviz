import React from 'react'
import { Container } from '../../common/Container/Container'
import { Flex } from '../../ui-component/Flex/Flex'

import partner0 from '../../../assets/svg/partnersImg/IMAGE.svg'
import partner1 from '../../../assets/svg/partnersImg/IMAGE-1.svg'
import partner2 from '../../../assets/svg/partnersImg/IMAGE-2.svg'
import partner3 from '../../../assets/svg/partnersImg/IMAGE-3.svg'
import partner4 from '../../../assets/svg/partnersImg/IMAGE-4.svg'
import partner5 from '../../../assets/svg/partnersImg/IMAGE-5.svg'
import { StyledItem, StyledList, StyledLink } from './PartnerNameList.styled'

export const PartnerNameList = () => {
  return (
    <>
      <Container>
        <Flex align="center">
          <StyledLink href="">Partners</StyledLink>
          <StyledList>
            <StyledItem>
              <img src={partner0} alt="" />
            </StyledItem>
            <StyledItem>
              <img src={partner1} alt="" />
            </StyledItem>
            <StyledItem>
              <img src={partner2} alt="" />
            </StyledItem>
            <StyledItem>
              <img src={partner3} alt="" />
            </StyledItem>
            <StyledItem>
              <img src={partner4} alt="" />
            </StyledItem>
            <StyledItem>
              <img src={partner5} alt="" />
            </StyledItem>
          </StyledList>

          <StyledLink href="">See All</StyledLink>
        </Flex>
      </Container>
    </>
  )
}
