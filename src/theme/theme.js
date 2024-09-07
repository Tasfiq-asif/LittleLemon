import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#4CAF50', // Primary Green
    },
    secondary: {
      main: '#FFEB3B', // Secondary Yellow
    },
    background: {
      default: '#FFFDE7', // Warm Beige/White
    },
    text: {
      primary: '#388E3C', // Dark Green for text
      secondary: '#4CAF50', // Light text option if needed
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#FFFFFF', // Set button text color to white
        },
      },
    },
  },
});

export default theme;