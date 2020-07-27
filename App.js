import React from 'react'
import AppNavigation from '@navigation/AppNavigation'
import { UsuarioProvider } from '@context/UsuarioContext'

// import MpDrawer from './app/MpDrawer'


function App() {
  return (
    <UsuarioProvider>
      <AppNavigation /> 
    </UsuarioProvider>
  )
}

export default App