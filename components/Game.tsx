import React, { useEffect, useState } from 'react';

const Game = () => {
  const [position, setPosition] = useState({ top: 0, left: 0 });

  const handleKeyDown = (event: KeyboardEvent) => {
    switch (event.key) {
      case 'ArrowUp':
        setPosition((prev) => ({ ...prev, top: prev.top - 5 }));
        break;
      case 'ArrowDown':
        setPosition((prev) => ({ ...prev, top: prev.top + 5 }));
        break;
      case 'ArrowLeft':
        setPosition((prev) => ({ ...prev, left: prev.left - 5 }));
        break;
      case 'ArrowRight':
        setPosition((prev) => ({ ...prev, left: prev.left + 5 }));
        break;
      default:
        break;
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <div className="relative h-80 w-80 bg-black m-auto rounded-lg overflow-hidden">
      <div
        className="absolute"
        style={{
          top: `${position.top}px`,
          left: `${position.left}px`,
          height: '50px',
          width: '50px',
          backgroundImage: 'url(/mario.png)', // Ensure the Mario image is present in the public directory
          backgroundSize: 'cover',
        }}
      />
    </div>
  );
};

export default Game;