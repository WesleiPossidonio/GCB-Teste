import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { HiOutlineMenuAlt3 } from 'react-icons/hi'

import { Container, Logo, LinkNav, LinkRegister, Icon } from './style'

export const Navbar = ({ setMenuIsvisible }) => {
  const [color, setColor] = useState(false)

  const changeColor = () => {
    if (window.scrollY >= 90) {
      setColor(true)
    } else {
      setColor(false)
    }
  }

  window.addEventListener('scroll', changeColor)

  return (
    <Container colorchange={color}>
      <Logo to="SectionHome" spy={true} smooth={true} color={color}>
        Healthy Food
      </Logo>
      <nav>
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
      </nav>
      <Icon>
        <HiOutlineMenuAlt3 onClick={() => setMenuIsvisible(true)} />
      </Icon>
    </Container>
  )
}

Navbar.propTypes = {
  setMenuIsvisible: PropTypes.func
}
