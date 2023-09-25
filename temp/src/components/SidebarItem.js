import React, { useState, useEffect } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { useTheme } from '@mui/material/styles'; // Import useTheme

// Helper function to check if an item has children
function hasChildren(item) {
  return item.items && item.items.length > 0;
}

// SingleLevel Component
const SingleLevel = ({ item, onItemClick }) => {
  const theme = useTheme(); // Get the current theme using useTheme hook

  const handleItemClick = () => {
    console.log(item.title); // Log the clicked item's title
  };

  return (
    <ListItem
      button
      onClick={handleItemClick} // Call handleItemClick on click
      style={{
        marginTop: '8px',
        marginBottom: '8px',
        paddingLeft: item.icon ? '16px' : '16px',
        borderLeft: item.icon ? 'none' : `2px solid ${theme.palette.primary.main}`, // Use theme's primary color for border
      }}
    >
      {item.icon && (
        <ListItemIcon sx={{ color: theme.palette.primary.main }}>{item.icon}</ListItemIcon>
      )}
      <ListItemText
        primary={item.title}
        sx={{
          color: theme.palette.primary.main,
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}
      />
    </ListItem>
  );
};

// MultiLevel Component
const MultiLevel = ({ item, openDrawer, onItemClick }) => {
  const theme = useTheme(); // Get the current theme using useTheme hook
  const [open, setOpen] = useState(item.isOpen); // Initialize the open state based on item.isOpen

  useEffect(() => {
    if (!openDrawer) {
      setOpen(false);
    } 
  }, [openDrawer]);

  const handleItemClick = () => {
    if (openDrawer) {
      setOpen(!open);
      console.log(item.title);
    } 
    else {
      console.log('good first issue');
      onItemClick(item);
    }
  };

  return (
    <>
      <ListItem
        button
        onClick={handleItemClick}
        style={{
          marginTop: '8px',
          marginBottom: '8px',
          paddingLeft: item.icon ? '16px' : '24px',
          borderLeft: item.icon ? 'none' : `2px solid ${theme.palette.primary.main}`, // Use theme's primary color for border
        }}
      >
        {item.icon && (
          <ListItemIcon sx={{ color: theme.palette.primary.main }}>{item.icon}</ListItemIcon>
        )}
        <ListItemText
          primary={item.title}
          sx={{
            color: theme.palette.primary.main,
            fontSize: '14px',
            lineHeight: '21px',
            textTransform: 'uppercase',
          }}
        />
        {open ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {item.items.map((child, key) => (
            <SidebarItem
              key={key}
              item={child}
              subItem
              open={open}
              onItemClick={onItemClick}
            />
          ))}
        </List>
      </Collapse>
    </>
  );
};

const SidebarItem = ({ item, subItem, open, onItemClick }) => {

  if (!hasChildren(item)) {
    return (
      <div style={{ marginLeft: subItem ? '16px' : '0', marginRight: '16px' }}>
        <SingleLevel item={item} onItemClick={onItemClick} /> {/* Pass onItemClick here */}
      </div>
    );
  }

  return (
    <div style={{ marginLeft: subItem ? '16px' : '0', marginRight: '16px' }}>
      <MultiLevel item={item} openDrawer={open} onItemClick={onItemClick} /> {/* Pass onItemClick here */}
    </div>
  );
};

export default SidebarItem;
