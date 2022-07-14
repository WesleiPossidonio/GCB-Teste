import React from 'react'

import { Title, Text, IsCarousel } from '../../Components'
import { Container, ContainerText } from './style'

export const SectionBlog = () => {
  return (
    <Container id="SectionBlog">
      <ContainerText>
        <Title>Read Our Blog</Title>
        <Text>
          Far far away, behind the word mountains, far from the countries <br />
          Vokalia and Consonantia, there live the blind texts.
        </Text>
      </ContainerText>
      <IsCarousel />
    </Container>
  )
}
