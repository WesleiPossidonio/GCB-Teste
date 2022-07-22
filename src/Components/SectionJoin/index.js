import React, { useRef } from 'react'

import ImageSectionJoin from '../../Assets/ImageSectionJoin.svg'
import { DataUser } from '../../Hooks/UserContext'
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
  const { putUserData } = DataUser()
  const inputEmail = useRef()

  const addEmail = async () => {
    const emailClient = inputEmail.current.value

    await localStorage.setItem('email:dataUser', JSON.stringify(emailClient))

    const emailClientInfo = await localStorage.getItem('email:dataUser')

    if (emailClientInfo) {
      putUserData(JSON.parse(emailClientInfo))
    }
  }

  return (
    <Container id="SectionJoin">
      <ContainerItens>
        <Title>
          Join our membership <br />
          to get special offer
        </Title>
        <ContainerInput>
          <Input ref={inputEmail} placeholder="Enter your email address" />
          <Button
            type="submit"
            onClick={addEmail}
            isButton={true}
            style={{ width: '90px' }}
          >
            Join
          </Button>
        </ContainerInput>
      </ContainerItens>
      <Image src={ImageSectionJoin} alt="imagem-avatar" />
    </Container>
  )
}
