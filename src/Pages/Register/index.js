import React from 'react'

import ImageRegister from '../../Assets/ImageRegister.svg'
import { Form } from '../../Components'
import {
  Container,
  ContainerImage,
  Title,
  Text,
  Image,
  ContainerItens,
  TitleForm,
  TextTitle
} from './style'

export const Register = () => {
  return (
    <Container>
      <ContainerImage>
        <Title>Healthy Food</Title>
        <Text>Cadastro</Text>
        <Image src={ImageRegister} />
      </ContainerImage>
      <ContainerItens>
        <TitleForm>Seja Bem Vindo(a) ao Healthy Food</TitleForm>
        <TextTitle>
          Preencha os Dados corretamente para prosseguir com <br />o Cadastro.
        </TextTitle>
        <Form />
      </ContainerItens>
    </Container>
  )
}
