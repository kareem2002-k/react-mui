import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useTheme } from '@mui/material/styles';

function ProfileIcon() {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const handleMyAccountClick = () => {
    // Implement the logic for "My Account" here
    handleMenuClose();
  };

  const handleLogoutClick = () => {
    // Implement the logout logic here
    handleMenuClose();
  };

  return (
    <>
   <IconButton
  size="large"
  edge="end"
  aria-label="theme changer"
  onClick={handleMenuOpen}
  sx={{
    color: theme.palette.text.primary,
    fontSize: '24px',
    marginRight:'8px' // Adjust the size as needed
  }}
>
  <AccountCircleIcon />
</IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        <MenuItem onClick={handleMyAccountClick}>My Account</MenuItem>
        <MenuItem onClick={handleLogoutClick}>Logout</MenuItem>
      </Menu>
    </>
  );
}

export default ProfileIcon;
