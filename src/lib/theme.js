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
  components: {
    Switch: {
      baseStyle: {
        track: {
          bg: 'rgba(0, 28, 61, 0.08)',
          width: '33px',
          height: '18px',
          _checked: {
            bg: '#457DF1',
          },
        },
        thumb: {
          width: '19px',
          height: '18px',
        },
      },
    },
  },
});
