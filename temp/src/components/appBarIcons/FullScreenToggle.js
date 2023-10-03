import React, { useState } from 'react';
import IconButton from '@mui/material/IconButton';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';

function FullscreenToggleIcon({ isFullscreen, onClick }) {
  const [isFull, setIsFull] = useState(isFullscreen);

  const handleToggleClick = () => {
    setIsFull((prevIsFull) => !prevIsFull);
  };

  return (
    <IconButton
      size="large"
      edge="end"
      aria-label="fullscreen toggle"
      onClick={handleToggleClick}
      sx={{
        fontSize: '24px',
        marginRight:'8px' // Adjust the size as needed
      }}
    >
      {isFull ? <FullscreenExitIcon /> : <FullscreenIcon />}
    </IconButton>
  );
}

export default FullscreenToggleIcon;
