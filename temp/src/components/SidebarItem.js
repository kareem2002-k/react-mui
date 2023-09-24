import React, { useState } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

// Helper function to check if an item has children
function hasChildren(item) {
  return item.items && item.items.length > 0;
}

// SingleLevel Component
const SingleLevel = ({ item }) => {
  return (
    <ListItem button style={{ marginTop: '8px', marginBottom: '8px' }}>
      {/* Add top and bottom margins */}
      <ListItemIcon>{item.icon}</ListItemIcon>
      <ListItemText primary={item.title} />
    </ListItem>
  );
};

// MultiLevel Component
const MultiLevel = ({ item }) => {
  
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <ListItem button onClick={handleClick} style={{ marginTop: '8px', marginBottom: '8px' }}>
        {/* Add top and bottom margins */}
        <ListItemIcon>{item.icon}</ListItemIcon>
        <ListItemText primary={item.title} />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.items.map((child, key) => (
            <SidebarItem key={key} item={child} subItem />
          ))}
        </List>
      </Collapse>
    </>
  );
};

// MenuItem Component
const SidebarItem = ({ item, subItem }) => {
  const Component = hasChildren(item) ? MultiLevel : SingleLevel;

  return (
    <div style={{ marginLeft: subItem ? '16px' : '0', marginRight: '16px' }}>
      <Component item={item} />
    </div>
  );
};

export default SidebarItem; // Export SidebarItem as the default export
