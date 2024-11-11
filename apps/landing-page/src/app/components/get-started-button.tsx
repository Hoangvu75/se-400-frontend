import React, { useState, CSSProperties } from 'react';

const GetStartedButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const getStartedBtnStyle: CSSProperties = {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '20px 40px',
    border: '1px solid white',
    borderRadius: '40px',
    cursor: 'pointer',
    margin: '20px 0 0 0',
    transition: 'ease-in-out 0.3s',
    fontSize: 'large',
    position: 'relative',
    overflow: 'hidden',
  };

  const getStartedBtnHoverStyle: CSSProperties = {
    transform: 'scale(1.1)',
    backgroundColor: '#626df7',
  };

  return (
    <button
      style={{
        ...getStartedBtnStyle,
        ...(isHovered ? getStartedBtnHoverStyle : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => window.location.href = '/job'}
    >
      Bắt đầu ngay
    </button>
  );
};

export default GetStartedButton;
