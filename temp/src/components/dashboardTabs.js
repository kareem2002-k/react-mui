import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { styled } from '@mui/material/styles';




export const sidebarElements = [
    {
      text: 'Excutive Dashboard',
      icon: <InboxIcon />,
      tabs: [],
    },
    {
      text: 'Bioland Promithia',
      icon: <MailIcon />,
      tabs: [
        {
          text: 'Customer Information',
          icon: <InboxIcon />,
          subTabs: [
            {
              text: 'Customer analysis',
              icon: <InboxIcon />,
              subTabs: [
               
              ],
            },
          ],
        },
      ],
    },
    {
      text: 'Bioland Energy-PV ',
      icon: <MailIcon />,
      tabs: [
        {
          text: 'Customer Information',
          icon: <InboxIcon />,
          subTabs: [
            {
              text: 'Customer analysis',
              icon: <InboxIcon />,
              subTabs: [
               
              ],
            },
          ],
        },
      ],
    }
  ];