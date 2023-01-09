import React from 'react'
import { Section } from '../common/Section/Section'
import { Container } from '../common/Container/Container'
import { Button } from '../ui-component/Button/Button'
import { Title } from '../ui-component/Title/Title'

import partnerLogo0 from '../../assets/images/partnersLogo/IMAGE.png'
import partnerLogo1 from '../../assets/images/partnersLogo/IMAGE-1.png'
import partnerLogo6 from '../../assets/images/partnersLogo/IMAGE-6.png'
import partnerLogo7 from '../../assets/images/partnersLogo/IMAGE-7.png'
import partnerLogo8 from '../../assets/images/partnersLogo/IMAGE-8.png'
import partnerLogo9 from '../../assets/images/partnersLogo/IMAGE-9.png'
import { Flex } from '../ui-component/Flex/Flex'
import {
  StyledGrid,
  StyledItem,
  StyledDescription,
  StyledText,
} from './Press.styled'

export const Press = () => {
  const pressItem = [
    {
      img: partnerLogo0,
      name: 'TED TALKS',
      date: '2.22.22',
      title: 'Meet the 2022 class of TED Fellows.',
    },
    {
      img: partnerLogo6,
      name: 'CORRECTIONAL NEWS',
      date: '2.2.22',
      title: 'New Partnership Aims to Help Transform Prison Conditions.',
    },
    {
      img: partnerLogo7,
      name: 'DEPARTMENT OF JUSTICE',
      date: '1.26.22',
      title:
        'Justice Department Establishes Initiative to Strengthen States’ Use of Criminal Justice Data.',
    },
    {
      img: partnerLogo1,
      name: 'THE NEW YORK TIMES',
      date: '12.27.21',
      title: 'The 2021 Good Tech Awards.',
    },
    {
      img: partnerLogo8,
      name: 'CORRECTIONS1',
      date: '11.18.21',
      title:
        'Maine DOC to better harness correctional data to improve outcomes.',
    },
    {
      img: partnerLogo9,
      name: 'RIGHT ON CRIME',
      date: '9.9.21',
      title: 'Together, We Can Make Mississippi Safer and Reentry-Ready.',
    },
  ]
  return (
    <Section padding="87px 0 132px 0">
      <Container>
        <Flex justify="space-between">
          <Title>Recidiviz in the Press</Title>
          <Button
            margin="0 0 24px 0"
            bgColorNone
            padding="17px 33px"
            colorText={(p) => p.theme.colors.btnText}
          >
            See All
          </Button>
        </Flex>

        <StyledGrid>
          {pressItem.map(({ img, name, date, title }) => (
            <StyledItem key={name}>
              <Flex align="center">
                <img src={img} alt={name} />
                <StyledText>{name}</StyledText>
                <p>{date}</p>
              </Flex>
              <StyledDescription>{title}</StyledDescription>
            </StyledItem>
          ))}
        </StyledGrid>
      </Container>
    </Section>
  )
}
