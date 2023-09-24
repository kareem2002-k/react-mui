import React from 'react';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

// Define your sidebar elements
export const sidebarElements = [
  {
    title: 'Executive Dashboard',
    icon: <InboxIcon />,
  },
  {
    title: 'Bioland Promithia',
    icon: <MailIcon />,
    items: [
      {
        title: 'Customer Information',
        icon: <InboxIcon />,
        items: [
          {
            title: 'Customer Analysis',
            icon: <InboxIcon />,
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
        icon: <InboxIcon />,
        items: [
          {
            title: 'Customer Analysis',
            icon: <InboxIcon />,
          },
        ],
      },
    ],
  },
];
