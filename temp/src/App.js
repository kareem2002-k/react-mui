import React, { useState } from 'react';
import { ThemeProvider, CssBaseline, Box } from '@mui/material';
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
      <Box sx={{ display: 'flex' }}>
      <MyAppBar open={open} handleDrawerOpen={handleDrawerOpen} changeTheme={toggleTheme} />

        <MyDrawer open={open} handleDrawerClose={handleDrawerClose} handleSidebarItemClick={handleSidebarItemClick} />
        <Box
          component="main"
          sx={{
            flexGrow: 1,
            p: 3,
            paddingTop: '64px',
            paddingBottom: '64px',
            marginLeft: open ? '340px' : '50px', // Adjust the margin to match your drawer width
            transition: 'margin-left 225ms cubic-bezier(0.4, 0, 0.6, 1) 0ms',
          }}
        >
          <MainContent theme={theme} />
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default App;
