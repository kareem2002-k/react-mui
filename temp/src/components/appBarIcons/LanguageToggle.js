import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

function LanguageToggle() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [currentLanguage, setCurrentLanguage] = useState('en'); // Default language is English

  const changeLanguage = (lng) => {
    setCurrentLanguage(lng); // Update the current language state
    setAnchorEl(null); // Close the menu after selecting a language
  };

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  // Determine the flag icon based on the current language state
  const flagIcon =
    currentLanguage === 'en' ? 'englishFlag.png' : currentLanguage === 'el' ? 'cyprusFlag.png' : '';

  return (
    <>
      <IconButton
        size="large"
        aria-controls="language-menu"
        aria-haspopup="true"
        onClick={handleMenuOpen}
        color="inherit"
        sx={{ alignItems: 'center' }}
      >
        {flagIcon && (
          <img
            src={`${flagIcon}`}
            alt={currentLanguage}
            style={{ width: '24px', height: '24px' }} // Adjust the size as needed
          />
        )}
      </IconButton>
      <Menu
        id="language-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={() => changeLanguage('en')}>English</MenuItem>
        <MenuItem onClick={() => changeLanguage('el')}>Ελληνικά</MenuItem>
      </Menu>
    </>
  );
}

export default LanguageToggle;
