import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import logo from './logo.svg';
import './App.css';
import DirectMessage from './pages/DirectMessage';

function App() {
  return (
    <ChakraProvider>
      <DirectMessage />
    </ChakraProvider>
  );
}

export default App;
