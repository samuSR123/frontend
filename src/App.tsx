import React from 'react';
import { Box, CssBaseline, Paper, Typography } from "@mui/material";
import {ThemeProvider, createTheme} from "@mui/material/styles";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {routes as appRoutes} from "./routes";
import { Key } from '@mui/icons-material';
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
    const theme = createTheme({
      palette: {
        primary: {
          light: "#63b8ff",
          main: "#0989e3",
          dark: "#005db0",
          contrastText: "#000",
        },
        secondary: {
          main: "#4db6ac",
          light: "#82e9de",
          dark: "#00867d",
          contrastText: "#000",
        },
      },
    });
  return (
      <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        height="100vh"
        display="flex"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
      >
        <Router>
          <Navbar></Navbar>
          <Routes>
            <Route>
              {appRoutes.map((route) => 
                ( <Route 
                key={route.key}
                path={route.path}
                element={<route.component/>}
                />))}
            </Route>
          </Routes>
          <Footer/>
          </Router>
      </Box>
    
    </ThemeProvider>
  );
}

export default App;