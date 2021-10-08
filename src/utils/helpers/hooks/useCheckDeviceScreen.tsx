import { useEffect, useState } from 'react';
import { sizes } from 'styles/media';

const useCheckIsMediumScreen = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const handleWindowSizeChange = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  return width >= sizes.medium;
};

export { useCheckIsMediumScreen };
