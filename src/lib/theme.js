import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  styles: {
    global: {
      body: {
        bgColor: '#F5F5F5',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#343434',
      },
    },
  },
  fonts: {
    body: "'campton-book', sans-serif",
    heading: "'campton-book', sans-serif",
  },
});
