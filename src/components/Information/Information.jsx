import React from 'react'
import { Container } from '../common/Container/Container'
import { Flex } from '../ui-component/Flex/Flex'
import { Section } from '../common/Section/Section'
import { Title } from '../ui-component/Title/Title'
import {
  StyledGrid,
  StyledImg,
  StyledItem,
  StyledSmollTitle,
  TitleWrapper,
} from './Information.styled'

export const Information = () => {
  const informationItem = [
    {
      title: 'For Leaders',
      text:
        'Set goals, forecast the impact of policy or practice changes, and track their outcomes across your agency.',
    },
    {
      title: 'For Line Staff',
      text:
        'Track probation and parole outcomes, see what’s leading to success, and reduce recidivism with our case management system.',
    },
    {
      title: 'For the Public',
      text:
        'Use open source code, public data, interactive tools, and data visualizations to understand the state of incarceration, promote accountability, and conduct research.',
    },
    {
      title: 'For Policymakers and Advocates',
      text:
        'Project the impact of policies on carceral, fiscal, and community outcomes. Understand where disparities begin, where they grow, and whether a policy is likely to increase or reduce them.',
    },
  ]

  return (
    <Section background={(p) => p.theme.colors.light} padding="88px 0 141px 0">
      <StyledImg />
      <Container>
        <Flex justify="space-between">
          <TitleWrapper>
            <Title>
              Get the right
              <br /> information to the right person at the right time.
            </Title>
          </TitleWrapper>

          <StyledGrid>
            {informationItem.map(({ title, text }) => (
              <StyledItem key={title}>
                <StyledSmollTitle>{title}</StyledSmollTitle>
                <p>{text}</p>
              </StyledItem>
            ))}
          </StyledGrid>
        </Flex>
      </Container>
    </Section>
  )
}
