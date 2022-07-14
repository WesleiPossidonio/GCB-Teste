import PropTypes from 'prop-types'
import React from 'react'

import { ContainerTitle } from './style'

export const Title = ({ children, ...rest }) => {
  return <ContainerTitle {...rest}>{children}</ContainerTitle>
}

Title.propTypes = {
  children: PropTypes.node
}
