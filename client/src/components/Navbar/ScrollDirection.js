import { useEffect, useState } from 'react';
export default function useScrollDirection() {
  const [direction, setDirection] = useState('');
  const [initialY, setInitialY] = useState(0);

  const scrollDirection = () => {
    const current = window.scrollY;
    if (current > initialY) {
      setDirection('hide');
    } else {
      setDirection('show');
    }
    setInitialY(current);
  };
  useEffect(() => {
    window.addEventListener('scroll', scrollDirection);
    return () => window.removeEventListener('scroll', scrollDirection);
  });
  return direction;
}
