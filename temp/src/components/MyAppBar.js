import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

// Define the missing variables
const drawerWidth = 340; // You should adjust this value based on your design

const AppBarWrapper = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => {
  // Use the theme variable from props
  const appBarTheme = useTheme();

  return {
    zIndex: theme.zIndex.drawer + (open ? 0 : 1), // Increase zIndex when drawer is open
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth - 20,
      width: `calc(100% - ${drawerWidth - 20}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxShadow: 'none',
    }),
    backgroundColor: appBarTheme.palette.background.paper,
    color: appBarTheme.palette.text.primary,
    borderBottom: `0.5px solid ${
      appBarTheme.palette.mode === 'light' ? 'grey' : 'white'
    }`,
  };
});

function MyAppBar({ open, handleDrawerOpen, changeTheme }) {
  // Use the theme variable from props
  const theme = useTheme();
  const logoUrl2 =
  'https://static.wixstatic.com/media/a53960_2cb8b02e4fc740dab1217a7ad4a3cb06~mv2.png/v1/fill/w_214,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20PNG%20used%20on%20website.png';

  return (
    <AppBarWrapper position="fixed" open={open}>
      <Toolbar>
        <IconButton
          color="inherit"
          aria-label="open drawer"
          onClick={handleDrawerOpen}
          edge="start"
          sx={{
            marginRight: 5,
            ...(open && { display: 'none' }),
          }}
        >
          <img
              src={logoUrl2}
              alt="Logo"
              style={{ maxWidth: '50px', maxHeight: '50px' }}
            />
        </IconButton>
        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.primary,
            display: open ? 'none' : 'block',
          }}
        >
          Bioland Energy - Utility Management portal
        </Typography>
        <Box sx={{ marginLeft: 'auto' }}>
          <IconButton
            size="large"
            edge="end"
            aria-label="theme changer"
            onClick={changeTheme}
            sx={{ color: theme.palette.text.primary }}
          >
            {theme.palette.mode === 'light' ? (
              <Brightness4Icon />
            ) : (
              <Brightness7Icon />
            )}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBarWrapper>
  );
}

export default MyAppBar;
