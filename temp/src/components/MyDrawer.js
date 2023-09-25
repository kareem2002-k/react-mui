import React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import SearchIcon from '@mui/icons-material/Search';
import SidebarItem from './SidebarItem';
import { sidebarElements } from './sidebarElements';


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

const openedMixin = (theme) => ({
  width: drawerWidth, // Make the drawer slightly smaller
  height: '100vh',
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  borderRight: `0.5px solid ${theme.palette.mode === 'light' ? 'grey' : 'white'}`, // Set border color based on theme
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: theme.spacing(10),
  height: '100vh',
  [theme.breakpoints.up('sm')]: {
    width: theme.spacing(16) + 1,
  },
  '& .MuiList-root': {
    paddingLeft: theme.spacing(1),
  },
  borderRight: `0.5px solid ${theme.palette.mode === 'light' ? 'grey' : 'white'}`, // Set border color based on theme
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

const DrawerWrapper = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => {
    const drawerTheme = useTheme();

    return {
      width: drawerWidth,
      flexShrink: 0,
      whiteSpace: 'nowrap',
      boxSizing: 'border-box',
      backgroundColor: drawerTheme.palette.background.default,
      zIndex: open ? theme.zIndex.drawer : theme.zIndex.drawer - 1, // Increase zIndex when drawer is open
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
        width: drawerWidth,
        overflowX: 'hidden',
        backgroundColor: drawerTheme.palette.background.default,
        color: drawerTheme.palette.text.primary,
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    };
  },
);

function MyDrawer({ open, handleDrawerClose, handleSidebarItemClick }) {
  const theme = useTheme();

  const logoUrl =
    'https://static.wixstatic.com/media/a53960_056c44d88608445c812b80c40a3e9211~mv2.png/v1/fill/w_424,h_118,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/Promithia%20%20small%20opt.png';

  return (
    <DrawerWrapper variant="permanent" open={open}>
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
    </DrawerWrapper>
  );
}

export default MyDrawer;
