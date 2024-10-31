import React, { CSSProperties } from 'react';
import { AppLogo } from '@react-monorepo/asset-lib';
import { NavDropdownItems, NavItem } from '@react-monorepo/components';
import SignUpButton from './sign-up-button';
import SignInButton from './sign-in-button';

interface NavBarProps {
  showSignButtons?: boolean;
}

export const NavBar: React.FC<NavBarProps> = (props: NavBarProps) => {
  const { showSignButtons = true } = props;

  const headerStyle: CSSProperties = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '0 50px',
    backgroundColor: '#0b0f22',
  };

  const navLogoStyle: CSSProperties = {
    display: 'flex',
    alignItems: 'center',
  }

  const logoStyle: CSSProperties = {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    fontFamily: 'Arial, sans-serif',
    color: 'white',
  };

  const imageLogoStyle: CSSProperties = {
    width: '100px',
  }

  const navUlStyle: CSSProperties = {
    listStyleType: 'none',
    display: 'flex',
    gap: '100px',
    position: 'relative',
  };

  const signButtonsStyle: CSSProperties = {
    visibility: showSignButtons ? 'visible' : 'hidden',
    pointerEvents: showSignButtons ? 'auto' : 'none',
  };

  return <header style={headerStyle}>
    <div style={navLogoStyle}>
      <img src={AppLogo} alt="App logo" style={imageLogoStyle} />
      <div style={logoStyle}>JOB SEEKERS</div>
    </div>
    <nav>
      <ul style={navUlStyle}>
        <NavDropdownItems
          title="Tìm việc làm"
          items={[
            { href: '#job1', label: 'Toàn thời gian' },
            { href: '#job2', label: 'Bán thời gian' },
            { href: '#job3', label: 'Việc làm từ xa' },
          ]}
        />
        <NavDropdownItems
          title="Các công ty"
          items={[
            { href: '#company1', label: 'Doanh nghiệp trong nước' },
            { href: '#company2', label: 'Doanh nghiệp nước ngoài' },
          ]}
        />
        <NavItem href="#recruitment">Đăng tin tuyển dụng</NavItem>
      </ul>
    </nav>
    <div style={signButtonsStyle}>
      <a href="/register">
        <SignUpButton />
      </a>
      <a href="/login">
        <SignInButton />
      </a>
    </div>
  </header>;
}
