import React, { useState, CSSProperties } from 'react';

const SignInButton: React.FC = () => {
  const [isHovered, setIsHovered] = useState(false);

  const signInBtnStyle: CSSProperties = {
    backgroundColor: '#626df7',
    color: 'white',
    padding: '10px 20px',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    margin: '0 10px',
    transition: 'ease-in-out 0.3s',
  };

  const signInBtnHoverStyle: CSSProperties = {
    backgroundColor: '#4854c7',
    scale: '1.1',
  };

  return (
    <button
      style={{
        ...signInBtnStyle,
        ...(isHovered ? signInBtnHoverStyle : {}),
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      Đăng nhập
    </button>
  );
};

export default SignInButton;
