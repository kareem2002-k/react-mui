import React, { useState } from 'react';
import {  ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MyAppBar from './components/MyAppBar';
import MyDrawer from './components/MyDrawer';
import MainContent from './components/MainContent';
import { lightTheme, darkTheme } from './themes/myTheme';

function App() {
  const [open, setOpen] = React.useState(false);
  const [clickedItem, setClickedItem] = useState(null);

  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  const handleSidebarItemClick = (clickedItem) => {
    setClickedItem(clickedItem);
  };
  

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
    setClickedItem(null);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MyAppBar open={open} handleDrawerOpen={handleDrawerOpen} changeTheme={toggleTheme} />
      <MyDrawer open={open} handleDrawerClose={handleDrawerClose} handleSidebarItemClick={handleSidebarItemClick}  />
      <MainContent theme={theme} />
    </ThemeProvider>
  );
}

export default App;
