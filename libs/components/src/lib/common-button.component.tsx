import React, { CSSProperties, useState } from 'react';
import * as Color from '@react-monorepo/colors';
import { lightPrimary, primary } from '@react-monorepo/colors';

interface CommonButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  style?: CSSProperties;
  isOutlineButton?: boolean;
}

export const CommonButton: React.FC<CommonButtonProps> = (
  props: CommonButtonProps
) => {
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

  const outlineButtonStyle: CSSProperties = {
    width: '100%',
    padding: '0.75rem',
    fontSize: '16px',
    color: primary,
    border: isHovered
      ? `1px solid ${primary}`
      : `1px solid ${lightPrimary}`,
    backgroundColor: 'transparent',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease',
  };

  let style = props.isOutlineButton ? outlineButtonStyle : defaultButtonStyle;

  return (
    <button
      type={props.type}
      style={{ ...style, ...props.style }}
      onClick={props.onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {props.children}
    </button>
  );
};
