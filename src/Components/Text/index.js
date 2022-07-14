import PropTypes from 'prop-types'
import React from 'react'

import { ContainerText } from './style'
export const Text = ({ children, ...rest }) => {
  return <ContainerText {...rest}>{children}</ContainerText>
}

Text.propTypes = {
  children: PropTypes.node
}
