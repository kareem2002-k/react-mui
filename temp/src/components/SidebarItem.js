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
    <ListItem
      button
      style={{
        marginTop: '8px',
        marginBottom: '8px',
        paddingLeft: item.icon ? '16px' : '16px', // Adjust padding for levels without icons
        borderLeft: item.icon ? 'none' : '2px solid #ccc', // Add a border for levels without icons
      }}
    >
      {item.icon && <ListItemIcon sx={{
        color: '#23429C',
      }}>{item.icon}</ListItemIcon>}
      {/* Render ListItemIcon only if there's an icon */}
      <ListItemText primary={item.title} sx={{
        color: '#23429C',
        fontWeight: 'bold',

        textTransform: 'uppercase',
      
      }} />
    </ListItem>
  );
};

// MultiLevel Component
const MultiLevel = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleClick = () => {
    setOpen(!open);
    console.log(item.title); // Log the item's name to the console
  };

  return (
    <>
      <ListItem
        button
        onClick={handleClick}
        style={{
          marginTop: '8px',
          marginBottom: '8px',
          paddingLeft: item.icon ? '16px' : '24px', // Adjust padding for levels without icons
          borderLeft: item.icon ? 'none' : '2px solid #ccc', // Add a border for levels without icons
        }}
      >
        {item.icon && <ListItemIcon
          sx={{
            color: '#23429C',
          }}
        >{item.icon}</ListItemIcon>}
        {/* Render ListItemIcon only if there's an icon */}
        <ListItemText primary={item.title}
          sx={{
            color: '#23429C',
            fontSize: '14px',
            lineHeight: '21px',
            textTransform: 'uppercase',
          }}
        />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List 
         component="div" disablePadding>
          {item.items.map((child, key) => (
            <SidebarItem key={key} item={child} subItem
          
             />
          ))}
        </List>
      </Collapse>
    </>
  );
};


// MenuItem Component
const SidebarItem = ({ item, subItem }) => {
  if (!hasChildren(item)) {
    return (
      <div style={{ marginLeft: subItem ? '16px' : '0', marginRight: '16px' }}>
        <SingleLevel item={item} />
      </div>
    );
  }

  return (
    <div style={{ marginLeft: subItem ? '16px' : '0', marginRight: '16px' }}>
      <MultiLevel item={item} />
    </div>
  );
};

export default SidebarItem; // Export SidebarItem as the default export
