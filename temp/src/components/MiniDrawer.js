import React, { useState } from 'react';
import { styled, useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SidebarItem from './SidebarItem';
import { sidebarElements } from './sidebarElements';
import SearchIcon from '@mui/icons-material/Search';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Brightness4Icon from '@mui/icons-material/Brightness4'; // Dark theme icon
import Brightness7Icon from '@mui/icons-material/Brightness7'; // Light theme icon

const getMaxHierarchyDepth = (items, depth = 0) => {
  let maxDepth = depth;

  for (const item of items) {
    if (item.items) {
      const subDepth = getMaxHierarchyDepth(item.items, depth + 1);
      maxDepth = Math.max(maxDepth, subDepth);
    }
  }

  return maxDepth;
};

const maxHierarchyDepth = getMaxHierarchyDepth(sidebarElements);
const drawerWidth = 340 + maxHierarchyDepth * 16; // Adjust as needed

// Define your light and dark themes here (as shown in your previous code)

const logoUrl =
  'https://static.wixstatic.com/media/a53960_056c44d88608445c812b80c40a3e9211~mv2.png/v1/fill/w_424,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Promithia%20%20small%20opt.png';

const logoUrl2 =
  'https://static.wixstatic.com/media/a53960_2cb8b02e4fc740dab1217a7ad4a3cb06~mv2.png/v1/fill/w_214,h_214,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Logo%20PNG%20used%20on%20website.png';

  const openedMixin = (theme) => ({
    width: drawerWidth,
    height: '100%', // Set the height to 100% when the drawer is open
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
    borderRight: '1px solid grey', // Add border to the right side of the drawer when it's open
  });
  
  const closedMixin = (theme) => ({
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(10),
    height: '100%', // Set the height to 100% when the drawer is closed
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(16) + 1,
    },
    '& .MuiList-root': {
      paddingLeft: theme.spacing(1),
    },
    borderRight: '1px solid grey', // Add border to the right side of the closed drawer
  });

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => {
  const appBarTheme = useTheme();

  return {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      marginLeft: drawerWidth,
      width: `calc(100% - ${drawerWidth}px)`,
      transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxShadow: 'none',
      borderLeft: '1px solid grey', // Add border to the left side of the app bar when it's open
    }),
    backgroundColor: appBarTheme.palette.background.paper,
    color: appBarTheme.palette.text.primary,
    borderBottom: '1px solid grey', // Add border to the right side of the app bar when it's closed
  };
});

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => {
    const drawerTheme = useTheme(); // Get the theme using useTheme hook

    return {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      backgroundColor: drawerTheme.palette.background.default, // Set background color based on theme
      ...(open && {
        ...openedMixin(theme),
        '& .MuiDrawer-paper': openedMixin(theme),
      }),
      ...(!open && {
        ...closedMixin(theme),
        '& .MuiDrawer-paper': closedMixin(theme),
      }),

      '& .MuiDrawer-paper': {
        position: 'relative',
        whiteSpace: 'nowrap',
        width: drawerWidth,
        overflowX: 'hidden',
        backgroundColor: drawerTheme.palette.background.default, // Set background color based on theme
        color: drawerTheme.palette.text.primary, // Set text color based on theme
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    };
  },
);

export default function MiniDrawer({toggleTheme}) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [clickedItem, setClickedItem] = useState(null);



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

  const changeTheme = () => {

    toggleTheme();
 
  };

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        open={open}
        sx={{
          color: '#FFFFFF',
          width: open ? `calc(100% - ${drawerWidth}px)` : '100%',
          transition: 'width 0.3s ease-in-out',
          boxShadow: 'none',
        }}
      >
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
              sx={{ color: '#23429C' }}
            >
              {theme.palette.mode === 'light' ? <Brightness4Icon /> : <Brightness7Icon />}
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}  >
        <DrawerHeader>
          <div
            style={{
              display: 'flex',
              alignItems: 'left',
              justifyContent: 'center',
              width: '90%',
            }}
          >
            <img
              src={logoUrl}
              alt="Logo"
              style={{
                maxWidth: open ? '250px' : '60px',
                maxHeight: open ? '110px' : '60px',
                padding: '10px',
                display: 'block',
              }}
            />
          </div>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        {open ? (
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '90%',
              marginTop: '10px',
              marginBottom: '10px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                width: '100%',
                background: '#F9FAFC',
                borderRadius: '5px',
                border: '1px solid #ccc',
                overflow: 'hidden',
                marginLeft: '16px',
              }}
            >
              <input
                type="text"
                placeholder="Search"
                style={{
                  flex: 1,
                  padding: '10px',
                  border: 'none',
                  outline: 'none',
                  background: '#F9FAFC',
                }}
              />
              <button
                style={{
                  background: 'transparent',
                  border: 'none',
                  outline: 'none',
                  padding: '8px 10px',
                  cursor: 'pointer',
                }}
              >
                <SearchIcon />
              </button>
            </div>
            <Divider />
          </div>
        ) : null}

        <List>
          {sidebarElements.map((item) => (
            <SidebarItem
              key={item.text}
              item={item}
              open={open}
              onItemClick={handleSidebarItemClick}
            />
          ))}
        </List>
        <Divider />
      </Drawer>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          marginLeft: open ? 0 : `${drawerWidth}px`,
          transition: 'margin 0.3s ease-in-out',
        }}
      >
        <DrawerHeader />
      </Box>

      <Typography paragraph>content</Typography>


      <Menu
        open={Boolean(clickedItem)}
        onClose={() => setClickedItem(null)}
      >
        <MenuItem>{clickedItem && clickedItem.title}</MenuItem>
        {clickedItem &&
          clickedItem.items &&
          clickedItem.items.map((subItem, index) => (
            <MenuItem key={index} onClick={() => {/* Handle sub-item click */}}>
              {subItem.title}
            </MenuItem>
          ))}
      </Menu>
    </Box>
  );
}
