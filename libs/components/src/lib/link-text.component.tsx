import React, { CSSProperties } from 'react';

interface LinkTextProps {
  href: string;
  children: React.ReactNode;
  style?: CSSProperties;
}

export const LinkText: React.FC<LinkTextProps> = ({ href, children, style }) => {
  const linkStyle: CSSProperties = {
    fontSize: '12px',
    color: '#626df7',
    textDecoration: 'none',
    cursor: 'pointer',
  };

  return (
    <a
      href={href}
      style={{ ...linkStyle, ...style }}
      onMouseOver={(e) => (e.currentTarget.style.textDecoration = 'underline')}
      onMouseOut={(e) => (e.currentTarget.style.textDecoration = 'none')}
    >
      {children}
    </a>
  );
};
