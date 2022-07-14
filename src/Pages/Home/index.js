import React, { useState } from 'react'

import {
  Footer,
  Navbar,
  NavbarMobile,
  SectionBlog,
  SectionHome,
  SectionJoin,
  SectionRecipes,
  SectionServices
} from '../../Components'
import { Container } from './style'

export function Home() {
  const [menuIsVisible, setMenuIsVisible] = useState(false)

  return (
    <Container>
      <NavbarMobile
        menuIsvisible={menuIsVisible}
        setMenuIsviseble={setMenuIsVisible}
      />
      <Navbar setMenuIsvisible={setMenuIsVisible} />
      <SectionHome />
      <SectionRecipes />
      <SectionServices />
      <SectionBlog />
      <SectionJoin />
      <Footer />
    </Container>
  )
}
