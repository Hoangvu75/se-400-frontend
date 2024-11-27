import { useState, CSSProperties, HTMLInputTypeAttribute } from 'react';
import * as Color from '@react-monorepo/colors';

interface InputFieldProps {
  placeholder?: string;
  type?: HTMLInputTypeAttribute;
  isRequired?: boolean;
  style?: CSSProperties;
  value?: string;  
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;  
}

export const InputField = (props: InputFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const inputField: CSSProperties = {
    padding: '12px 16px',
    fontSize: '14px',
    border: isFocused ? `1px solid ${Color.primary}` : `1px solid ${Color.lightGrey}`,
    borderRadius: '12px',
    width: '100%',
    boxSizing: 'border-box',
    outline: 'none',
  };

  return (
    <input
      type={props.type}  
      style={{ ...inputField, ...props.style }}  
      onFocus={() => setIsFocused(true)}  
      onBlur={() => setIsFocused(false)}  
      placeholder={props.placeholder}
      required={props.isRequired}  
      value={props.value}  
      onChange={props.onChange} 
    />
  );
};
