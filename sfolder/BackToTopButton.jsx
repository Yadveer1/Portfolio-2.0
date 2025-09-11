import Fab from '@mui/material/Fab';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import { useEffect, useState } from 'react';

function BackToTopButton() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShow(window.scrollY > 200);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  if (!show) return null;

  return (
    <Fab
      size="medium"
      onClick={handleToTop}
      sx={{
        position: 'fixed',
        bottom: 32,
        right: 32,
        zIndex: 1200,
      }}
    >
      <ArrowUpwardIcon/>
    </Fab>
  );
}

export default BackToTopButton;
