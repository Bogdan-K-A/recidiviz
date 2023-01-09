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
  const partnersItem = [
    {
      img: partnerLogo0,
      text: 'TED Talks',
    },
    {
      img: partnerLogo1,
      text: 'The New York Times',
    },
    {
      img: partnerLogo2,
      text: 'StateScoop',
    },
    {
      img: partnerLogo3,
      text: 'Associated Press',
    },
    {
      img: partnerLogo4,
      text: 'Time',
    },
    {
      img: partnerLogo5,
      text: 'Freethink',
    },
  ]
  return (
    <>
      <Container>
        <StyledList>
          {partnersItem.map(({ img, text }) => (
            <StyledItem>
              <Flex align="center">
                <img src={img} alt={text} />
                <p>{text}</p>
              </Flex>
            </StyledItem>
          ))}
        </StyledList>
      </Container>
    </>
  )
}
