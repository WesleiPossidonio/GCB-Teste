import PropTypes from 'prop-types'
import React, { useEffect } from 'react'
import { IoClose } from 'react-icons/io5'

import { Container, ContainerHeader, LinkNav, LinkRegister } from './style'

export const NavbarMobile = ({ menuIsvisible, setMenuIsviseble }) => {
  useEffect(() => {
    document.body.style.overflowY = menuIsvisible ? 'hidden' : 'auto'
  }, [menuIsvisible])

  return (
    <Container isVisible={menuIsvisible}>
      <IoClose size={35} onClick={() => setMenuIsviseble(false)} />
      <ContainerHeader>
        <LinkNav to="SectionRecipes" spy={true} smooth={true}>
          HEALTHY RECIPES
        </LinkNav>
        <LinkNav to="SectionBlog" spy={true} smooth={true}>
          BLOG
        </LinkNav>
        <LinkNav to="SectionJoin" spy={true} smooth={true}>
          JOIN
        </LinkNav>
        <LinkRegister to="/cadastro">REGISTER</LinkRegister>
      </ContainerHeader>
    </Container>
  )
}

NavbarMobile.propTypes = {
  setMenuIsviseble: PropTypes.func,
  menuIsvisible: PropTypes.bool
}
