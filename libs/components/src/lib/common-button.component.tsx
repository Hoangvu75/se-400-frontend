import React, { CSSProperties, useState } from 'react';
import * as Color from '@react-monorepo/colors';

interface CommonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  style?: CSSProperties; // Allow additional styles via props
}

export const CommonButton: React.FC<CommonButtonProps> = ({ children, onClick, type = 'button', style }) => {
  const [isHovered, setIsHovered] = useState(false);

  const defaultButtonStyle: CSSProperties = {
    width: '100%',
    padding: '0.75rem',
    fontSize: '16px',
    color: '#fff',
    backgroundColor: isHovered ? Color.lightPrimary : Color.primary,
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  return (
    <button
      type={type}
      style={{ ...defaultButtonStyle, ...style }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </button>
  );
};
