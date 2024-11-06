import React, { CSSProperties } from 'react';
import { LinkText } from '@react-monorepo/components';

export const Footer: React.FC = () => {
  return (
    <footer style={footerStyle}>
      <p>© 2023 JOB SEEKERS.</p>
      <p>
        <LinkText href="#privacy-policy" style={linkTextStyle}>
          Chính sách bảo mật
        </LinkText>
        <LinkText href="#terms-of-services" style={linkTextStyle}>
          Điều khoản dịch vụ
        </LinkText>
      </p>
    </footer>
  );
};

export const footerStyle: CSSProperties = {
  backgroundColor: '#0b0f22',
  color: 'white',
  textAlign: 'center',
  padding: '20px 0',
};

export const linkTextStyle: CSSProperties = {
  color: 'white',
  textDecoration: 'none',
  margin: '0 10px',
};
