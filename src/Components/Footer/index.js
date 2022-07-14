import React from 'react'

import { Container, Copyrights, Text } from './style'

export const Footer = () => {
  return (
    <Container>
      <Copyrights>© 2019 Stack. All Rights Reserved.</Copyrights>
      <div>
        <Text>Privacy Policy </Text>
        <Text>Terms and Conditions</Text>
      </div>
    </Container>
  )
}
