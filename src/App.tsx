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
          light: "#FF3232",
          main: "#FF2D08",
          dark: "#CF240A",
          contrastText: "#fff",
        },
        secondary: {
          main: "#FFF10A",
          light: "#FFF160",
          dark: "#FEC208",
          contrastText: "#fff",
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
          <Box sx={{marginBottom: '300px'}}><Navbar></Navbar></Box>
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
          <Footer></Footer>
        </Router>
      </Box>
    
    </ThemeProvider>
  );
}

export default App;
