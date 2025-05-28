import { useEffect, useRef } from 'react';
import { Box, Button, keyframes } from '@mui/material';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(-20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

interface SkipToContentProps {
  mainContentId?: string;
}

const SkipToContent: React.FC<SkipToContentProps> = ({ mainContentId = 'main-content' }) => {
  const skipLinkRef = useRef<HTMLAnchorElement>(null);

  // Focus the skip link on mount
  useEffect(() => {
    if (skipLinkRef.current) {
      skipLinkRef.current.focus();
    }
  }, []);

  // Handle click to focus the main content
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const mainContent = document.getElementById(mainContentId);
    if (mainContent) {
      mainContent.setAttribute('tabindex', '-1');
      mainContent.focus();
      // Remove the tabindex after focus to avoid focus trap
      setTimeout(() => mainContent.removeAttribute('tabindex'), 1000);
    }
  };

  return (
    <Box
      component="nav"
      aria-label="Skip to main content"
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1400,
        display: 'flex',
        justifyContent: 'center',
        padding: 1,
      }}
    >
      <Button
        ref={skipLinkRef}
        component="a"
        href={`#${mainContentId}`}
        onClick={handleClick}
        sx={{
          position: 'absolute',
          top: 8,
          left: '50%',
          transform: 'translateX(-50%)',
          zIndex: 1,
          backgroundColor: 'background.paper',
          color: 'primary.main',
          padding: '8px 24px',
          borderRadius: 2,
          boxShadow: 3,
          opacity: 0,
          pointerEvents: 'none',
          '&:focus': {
            opacity: 1,
            pointerEvents: 'auto',
            animation: `${fadeIn} 0.3s ease-out`,
          },
          '&:hover': {
            backgroundColor: 'primary.light',
            color: 'primary.contrastText',
          },
        }}
      >
        Skip to main content
      </Button>
    </Box>
  );
};

export default SkipToContent;
