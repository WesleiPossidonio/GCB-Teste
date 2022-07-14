import React from 'react'
import ReactDOM from 'react-dom/client'

import { UserProvider } from './Hooks/UserContext'
import IsRoute from './Routes/route'
import GlobalStyles from './Styles/GlobalStyles'

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(
  <>
    <GlobalStyles />
    <UserProvider>
      <IsRoute />
    </UserProvider>
  </>
)
