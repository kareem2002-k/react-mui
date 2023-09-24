import React from 'react';
import MailIcon from '@mui/icons-material/Mail';
import HomeIcon from '@mui/icons-material/Home';

// Define your sidebar elements
export const sidebarElements = [
  {
    title: 'Executive Dashboard',
    icon: <HomeIcon />,
  },
  {
    title: 'Bioland Promithia',
    icon: <MailIcon />,
    items: [
      {
        title: 'Customer Information',
        isOpen: false, // Add an isOpen property to track the open state
        items: [
          {
            title: 'Customer Analysis',
          },
        ],
      },
    ],
  },
  {
    title: 'Bioland Energy-PV',
    icon: <MailIcon />,
    items: [
      {
        title: 'Customer Information',
        isOpen: false, // Add an isOpen property to track the open state
        items: [
          {
            title: 'Customer Analysis',
          },
          {
            title: 'Customer Department',
          },
        ],
      },
    ],
  },
];