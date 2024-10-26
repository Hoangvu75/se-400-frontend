import React, { useState } from 'react';

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export const NavItem: React.FC<NavItemProps> = ({ href, children, style }) => {
  const [isHovered, setIsHovered] = useState(false);

  const baseStyle: React.CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'ease-in-out 0.3s',
    padding: '12px 16px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
  };

  return (
    <a
      href={href}
      style={{ ...baseStyle, ...style }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {children}
    </a>
  );
};
