import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { theme } from './lib/theme';
import { CountryForm } from './components/CountryForm';
import './styles/fonts.css';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box px={3}>
        <CountryForm />
      </Box>
    </ChakraProvider>
  );
}

export default App;
