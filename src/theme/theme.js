import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#495F57', // Primary Green
    },
    secondary: {
      main: '#FACC14', // Secondary Yellow
    },
    background: {
      default: '#FACC14',
       // Warm Beige/White
    },
    text: {
        primary: '#333333', // Dark Green for text
      secondary: '#666666',
      heading:'#FACC14'// Light text option if needed
    },
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          color: '#FFFFFF',
          background:'#FACC14', // Set button text color to white
          '&:hover':{
            backgroundColor:'#e6b918',
            color:'#FFFFFF'
          }
        },
      },
    },
  },
});

export default theme;