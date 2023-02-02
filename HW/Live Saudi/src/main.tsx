import { ChakraProvider } from '@chakra-ui/react'
import React, { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
    <ChakraProvider>
    <App/>
    </ChakraProvider>
    </StrictMode>
  
)
