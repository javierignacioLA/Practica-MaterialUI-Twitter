import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createTheme, ThemeProvider } from '@mui/material/styles';
const theme = createTheme({
  palette: {
    mode: 'dark', // o 'dark'
    primary: {
      main: '#000',
    },
    secondary: {
      main: '#0e76a8',
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
     <App />
  </ThemeProvider>

  </React.StrictMode>,
)
