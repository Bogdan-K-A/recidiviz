import React from 'react'
import { Container } from '../common/Container/Container'
import { Section } from '../common/Section/Section'
import { Button } from '../ui-component/Button/Button'
import { Title } from '../ui-component/Title/Title'
import { Flex } from '../ui-component/Flex/Flex'

import imgMap from '../../assets/images/map.png'
import { DescriptionText } from './WeWork.styled'

export const WeWork = () => {
  return (
    <Section
      padding="146px 0 133px 0"
      background={(p) => p.theme.colors.bgColor2}
    >
      <Container>
        <Flex justify="space-between">
          <div>
            <Title margin="0 0 43px 0" color={(p) => p.theme.colors.white}>
              Where we work
            </Title>
            <DescriptionText>
              We're expanding. Get in touch and start turning your data into
              action.
            </DescriptionText>
            <Button padding="17px 33px">Get in touch</Button>
          </div>
          <div>
            <img src={imgMap} alt="" />
          </div>
        </Flex>
      </Container>
    </Section>
  )
}
