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
const SingleLevel = ({ item, onItemClick }) => {
  const handleItemClick = () => {
    console.log(item.title); // Log the clicked item's title
    if (onItemClick) {
      onItemClick(item); // Call the onItemClick function if provided
    }
  };

  return (
    <ListItem
      button
      onClick={handleItemClick} // Call handleItemClick on click
      style={{
        marginTop: '8px',
        marginBottom: '8px',
        paddingLeft: item.icon ? '16px' : '16px',
        borderLeft: item.icon ? 'none' : '2px solid #ccc',
      }}
    >
      {item.icon && (
        <ListItemIcon sx={{ color: '#23429C' }}>{item.icon}</ListItemIcon>
      )}
      <ListItemText
        primary={item.title}
        sx={{
          color: '#23429C',
          fontWeight: 'bold',
          textTransform: 'uppercase',
        }}
      />
    </ListItem>
  );
};

// MultiLevel Component
const MultiLevel = ({ item, openDrawer, onItemClick }) => {
  const [open, setOpen] = useState(item.isOpen); // Initialize the open state based on item.isOpen

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
          borderLeft: item.icon ? 'none' : '2px solid #ccc',
        }}
      >
        {item.icon && (
          <ListItemIcon sx={{ color: '#23429C' }}>{item.icon}</ListItemIcon>
        )}
        <ListItemText
          primary={item.title}
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
