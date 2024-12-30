import * as React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { lime, purple } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    primary: {
        main: '#FF4500'
    },
    secondary: purple,
  },
});

export default function ColorPaletter({children}) {
  return (
    <ThemeProvider theme={theme}>
      {children} 
    </ThemeProvider>
  );
}
