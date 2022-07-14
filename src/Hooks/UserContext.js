import Cookies from 'js-cookie'
import PropTypes from 'prop-types'
import React, { createContext, useContext, useState } from 'react'

const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [userData, setUserData] = useState({})

  const putUserData = async userInfo => {
    setUserData(userInfo)

    Cookies.set('dataHealthy', userInfo)
  }

  return (
    <UserContext.Provider value={{ putUserData, userData }}>
      {children}
    </UserContext.Provider>
  )
}

export const DataUser = () => {
  const context = useContext(UserContext)

  if (!context) {
    throw new Error('useUser rust be used with UserContent')
  }

  return context
}

UserProvider.propTypes = {
  children: PropTypes.node
}
