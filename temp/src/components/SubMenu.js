import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

const SubMenu = ({ tab }) => {
  return (
    <ListItem disablePadding sx={{ display: 'block' }}>
      <ListItemButton
        sx={{
          minHeight: 48,
          justifyContent: 'initial',
          px: 4,
        }}
      >
        <ListItemIcon>{tab.icon}</ListItemIcon>
        <ListItemText primary={tab.text} />
      </ListItemButton>
    </ListItem>
  );
};

export default SubMenu;
