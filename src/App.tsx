import React from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import DirectMessage from './pages/DirectMessage';
import { SettingProvider } from './contexts/SettingContext';
import { DirectProvider } from './contexts/DirectContext';

function App() {
  return (
    <ChakraProvider>
      <SettingProvider>
        <DirectProvider>
          <DirectMessage />
        </DirectProvider>
      </SettingProvider>
    </ChakraProvider>
  );
}

export default App;
