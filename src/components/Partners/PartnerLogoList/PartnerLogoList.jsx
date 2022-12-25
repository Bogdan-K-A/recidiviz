import React from 'react'
import { Flex } from '../../ui-component/Flex/Flex'
import { Container } from '../../common/Container/Container'

import { StyledItem, StyledList } from './PartnerLogoList.styled'

import partnerLogo0 from '../../../assets/images/partnersLogo/IMAGE.png'
import partnerLogo1 from '../../../assets/images/partnersLogo/IMAGE-1.png'
import partnerLogo2 from '../../../assets/images/partnersLogo/IMAGE-2.png'
import partnerLogo3 from '../../../assets/images/partnersLogo/IMAGE-3.png'
import partnerLogo4 from '../../../assets/images/partnersLogo/IMAGE-4.png'
import partnerLogo5 from '../../../assets/images/partnersLogo/IMAGE-5.png'

export const PartnerLogoList = () => {
  return (
    <>
      <Container>
        <StyledList>
          <StyledItem>
            <Flex align="center">
              <img src={partnerLogo0} alt="" />
              <p>TED Talks</p>
            </Flex>
          </StyledItem>
          <StyledItem>
            <Flex align="center">
              <img src={partnerLogo1} alt="" />
              <p>The New York Times</p>
            </Flex>
          </StyledItem>
          <StyledItem>
            <Flex align="center">
              <img src={partnerLogo2} alt="" />
              <p>StateScoop</p>
            </Flex>
          </StyledItem>
          <StyledItem>
            <Flex align="center">
              <img src={partnerLogo3} alt="" />
              <p>Associated Press</p>
            </Flex>
          </StyledItem>
          <StyledItem>
            <Flex align="center">
              <img src={partnerLogo4} alt="" />
              <p>Time</p>
            </Flex>
          </StyledItem>
          <StyledItem>
            <Flex align="center">
              <img src={partnerLogo5} alt="" />
              <p>Freethink</p>
            </Flex>
          </StyledItem>
        </StyledList>
      </Container>
    </>
  )
}
