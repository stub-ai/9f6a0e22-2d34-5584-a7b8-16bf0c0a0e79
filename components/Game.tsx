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
    <div
      style={{
        position: 'relative',
        height: '100vh',
        width: '100vw',
        backgroundColor: '#000',
      }}
    >
      <div
        style={{
          position: 'absolute',
          top: `${position.top}px`,
          left: `${position.left}px`,
          height: '50px',
          width: '50px',
          backgroundImage: 'url(/path/to/mario.png)', // Add the path to your Mario image
          backgroundSize: 'cover',
        }}
      />
    </div>
  );
};

export default Game;