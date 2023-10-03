import React from 'react'
import IconButton from '@mui/material/IconButton'   
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { useTheme } from '@mui/material/styles'




function DarkLightIcon ({changeTheme}) {
  const theme = useTheme()



  return (
    <IconButton
    size="large"
    edge="end"
    aria-label="theme changer"
    onClick={changeTheme}
    sx={{
      color: theme.palette.text.primary,
      fontSize: '24px',
      marginRight:'8px' // Adjust the size as needed
    }}
  >
    {theme.palette.mode === 'light' ? (
      <Brightness4Icon />
    ) : (
      <Brightness7Icon />
    )}
  </IconButton>
  )
}

export default DarkLightIcon