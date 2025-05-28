import React from 'react';
import { Box, CircularProgress } from '@mui/material';

interface LoadingSpinnerProps {
  fullPage?: boolean;
  size?: number;
  color?: 'primary' | 'secondary' | 'inherit';
}

const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  fullPage = false,
  size = 40,
  color = 'primary',
}) => {
  const spinner = (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      minHeight={fullPage ? '80vh' : 'auto'}
      width={fullPage ? '100%' : 'auto'}
    >
      <CircularProgress size={size} color={color} />
    </Box>
  );

  if (fullPage) {
    return (
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        display="flex"
        justifyContent="center"
        alignItems="center"
        bgcolor="background.paper"
        zIndex={1400}
      >
        {spinner}
      </Box>
    );
  }

  return spinner;
};

export default LoadingSpinner;
