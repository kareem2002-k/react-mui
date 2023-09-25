import React, { useState } from 'react';
import { ThemeProvider, CssBaseline } from '@mui/material';
import MiniDrawer from './components/MiniDrawer';
import { lightTheme, darkTheme } from './themes/myTheme';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = isDarkMode ? darkTheme : lightTheme;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <div className="App">
        <MiniDrawer toggleTheme={toggleTheme} />
       
      </div>
    </ThemeProvider>
  );
}

export default App;
