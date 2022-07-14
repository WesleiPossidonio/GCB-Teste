import React from 'react'
import { FiSearch } from 'react-icons/fi'

import HomeImage from '../../Assets/Home-Image.svg'
import { Button } from '../Button'
import {
  Container,
  ContainerText,
  Input,
  ContainerImage,
  Image,
  Text,
  ContainerItens
} from './style'

export const SectionHome = () => {
  return (
    <Container id="SectionHome">
      <ContainerText>
        <Text>
          Ready for <br />
          Trying a new <br />
          recipe?
        </Text>
        <ContainerItens>
          <Input placeholder="Search healthy recipes" />
          <Button isButton={true}>
            <FiSearch style={{ fontSize: '20px' }} />
          </Button>
        </ContainerItens>
      </ContainerText>
      <ContainerImage>
        <Image src={HomeImage} />
      </ContainerImage>
    </Container>
  )
}
