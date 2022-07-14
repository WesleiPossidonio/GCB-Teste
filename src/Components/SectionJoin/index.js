import React from 'react'

import ImageSectionJoin from '../../Assets/ImageSectionJoin.svg'
import { Button } from '../Button'
import {
  Container,
  ContainerItens,
  Title,
  ContainerInput,
  Input,
  Image
} from './style'
export const SectionJoin = () => {
  return (
    <Container id="SectionJoin">
      <ContainerItens>
        <Title>
          Join our membership <br />
          to get special offer
        </Title>
        <ContainerInput>
          <Input placeholder="Enter your email address" />
          <Button type="submit" isButton={true} style={{ width: '90px' }}>
            Join
          </Button>
        </ContainerInput>
      </ContainerItens>
      <Image src={ImageSectionJoin} />
    </Container>
  )
}
