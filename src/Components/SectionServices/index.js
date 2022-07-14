import React from 'react'

import { Title, Text, Button } from '../../Components'
import { Container, ContainerItens } from './style'

export const SectionServices = () => {
  return (
    <Container>
      <ContainerItens>
        <Title textFont={true}>
          The best services ready
          <br /> To serve you
        </Title>
        <Text textAlign={true}>
          Far far away, behind the word mountains, far from the countries
          Vokalia and Consonantia, there live the blind texts.
        </Text>
        <Text textAlign={true}>
          Separated they live in Bookmarksgrove right at the coast of the
          Semantics, a large language ocean.
        </Text>
        <Text textAlign={true}>
          A small river named Duden flows by their place and supplies it with
          the necessary regelialia.
        </Text>
        <Button style={{ marginTop: '1em' }}>Know More</Button>
      </ContainerItens>
    </Container>
  )
}
