import { useState, CSSProperties } from 'react';
import * as Color from '@react-monorepo/colors';

interface TextAreaFieldProps {
  placeholder?: string;
  isRequired?: boolean;
  rows?: number;
  style?: CSSProperties;
}

export const TextAreaField = (props: TextAreaFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputField: CSSProperties = {
    padding: '12px 16px',
    fontSize: '14px',
    border: isFocused ? `1px solid ${Color.primary}` : `1px solid ${Color.lightGrey}`,
    borderRadius: '12px',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
    resize: 'vertical',
  };

  return (
    <textarea
      style={{ ...inputField, ...props.style }}
      onFocus={() => setIsFocused(true)}
      onBlur={() => setIsFocused(false)}
      placeholder={props.placeholder}
      required={props.isRequired}
      rows={props.rows}
    />
  );
};
