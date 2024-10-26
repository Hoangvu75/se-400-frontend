import React, { useState, CSSProperties } from 'react';

const SignUpButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const btnStyle: CSSProperties = {
    backgroundColor: 'transparent',
    color: 'white',
    padding: '10px 20px',
    border: '1px solid white',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 10px',
    transition: 'ease-in-out 0.3s',
  };

  const btnHoverStyle: CSSProperties = {
    scale: '1.1',
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  };

  return (
    <button
      style={{
        ...btnStyle,
        ...(isHovered ? btnHoverStyle : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Đăng ký
    </button>
  );
};

export default SignUpButton;
