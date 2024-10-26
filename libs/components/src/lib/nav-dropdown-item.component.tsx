import React, { CSSProperties, useState } from 'react';
import { NavItem } from './nav-item.component';

interface NavDropdownItemsProps {
  title: string;
  items: { href: string; label: string }[];
}

export const NavDropdownItems: React.FC<NavDropdownItemsProps> = ({ title, items }) => {
  const [isHovered, setIsHovered] = useState(false);

  const navLiStyle: CSSProperties = {
    position: 'relative',
  };

  const navLinkStyle: CSSProperties = {
    color: 'white',
    textDecoration: 'none',
    fontWeight: 500,
    transition: 'ease-in-out 0.3s',
    padding: '12px 16px',
    borderRadius: '8px',
    backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.2)' : 'transparent',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  };

  const dropdownStyle: CSSProperties = {
    display: isHovered ? 'block' : 'none',
    position: 'absolute',
    top: '42px',
    left: '50%',
    transform: 'translateX(-50%)',
    backgroundColor: '#121837',
    padding: '10px 20px',
    borderRadius: '5px',
    zIndex: 100,
    width: 'max-content',
  };

  const navItemStyle: CSSProperties = {
    margin: '10px 0',
  };

  return (
    <li
      style={navLiStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <a href="#" style={navLinkStyle}>
        {title}
      </a>
      <ul style={dropdownStyle}>
        {items.map((item, index) => (
          <NavItem key={index} href={item.href} children={item.label} style={navItemStyle}/>
        ))}
      </ul>
    </li>
  );
};
