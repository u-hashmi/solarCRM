import * as React from 'react';
import AppNavigator from './AppNavigator';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import darkScrollbar from '@mui/material/darkScrollbar';

var darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: (themeParam) => ({
        body: themeParam.palette.mode === 'dark' ? darkScrollbar() : null,
      }),
    },
  },
});

darkTheme = responsiveFontSizes(darkTheme);

export default function App() {
  return (
    <Router>
       <ThemeProvider theme={darkTheme}>
      <CssBaseline enableColorScheme />
      <AppNavigator />
      </ThemeProvider>
    </Router>
  );
}
