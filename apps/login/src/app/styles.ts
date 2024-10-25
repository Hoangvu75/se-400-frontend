import { CSSProperties } from 'react';
import * as Colors from '@react-monorepo/colors';

export const pageStyle: CSSProperties = {
  display: 'flex',
  height: '100vh',
  width: '100vw',
  background: 'linear-gradient(135deg, #4a1d68, #262d75)',
  fontFamily: 'Arial, Helvetica, sans-serif',
};

export const formContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '60vw',
  padding: '0 2rem',
};

export const loginForm: CSSProperties = {
  backgroundColor: 'white',
  padding: '2rem 10rem',
  borderRadius: '10px',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
};

export const formTitle: CSSProperties = {
  fontSize: '24px',
  marginBottom: '0.5rem',
  color: Colors.primary,
};

export const subText: CSSProperties = {
  fontSize: '14px',
  marginBottom: '1.5rem',
  color: Colors.grey,
};

export const inputContainer: CSSProperties = {
  marginBottom: '1rem',
};

export const inputLabel: CSSProperties = {
  display: 'block',
  marginBottom: '0.5rem',
  textAlign: 'left',
  fontSize: '14px',
};

export const inputField: CSSProperties = {
  padding: '12px 16px',
  fontSize: '14px',
  border: '1px solid #ddd',
  borderRadius: '12px',
  width: '100%',
  boxSizing: 'border-box',
  outline: 'none',
};

export const forgotPassword: CSSProperties = {
  textAlign: 'right',
  display: 'block',
  marginTop: '0.5rem',
}

export const loginButton: CSSProperties = {
  marginBottom: '1.5rem',
};

export const loginTitle: CSSProperties = {
  fontSize: '14px',
  color: Colors.grey,
}

export const googleButton: CSSProperties = {
  backgroundColor: '#db4437',
  color: '#fff',
  width: '100%',
  padding: '0.75rem',
  fontSize: '14px',
  marginBottom: '0.5rem',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
  marginTop: '0.5rem',
};

export const facebookButton: CSSProperties = {
  backgroundColor: '#4267b2',
  color: '#fff',
  width: '100%',
  padding: '0.75rem',
  fontSize: '14px',
  marginBottom: '0.5rem',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export const linkedinButton: CSSProperties = {
  backgroundColor: '#0077b5',
  color: '#fff',
  width: '100%',
  padding: '0.75rem',
  fontSize: '14px',
  marginBottom: '0.5rem',
  border: 'none',
  borderRadius: '5px',
  cursor: 'pointer',
};

export const termsText: CSSProperties = {
  fontSize: '12px',
  color: Colors.grey,
  marginTop: '1.5rem',
};

export const signUpText: CSSProperties = {
  marginTop: '1rem',
  fontSize: '14px',
  color: Colors.grey,
};

export const appSlogan: CSSProperties = {
  color: 'white',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  width: '40vw',
  justifyContent: 'center',
};

export const appSloganTitle: CSSProperties = {
  fontSize: '24px',
  marginTop: '24px',
};

export const appSloganSubtitle: CSSProperties = {
  fontSize: '20px',
  marginTop: '14px',
};

export const appLogo: CSSProperties = {
  height: '400px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '40px',
};
