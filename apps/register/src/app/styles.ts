import { CSSProperties } from "react";
import * as Colors from '@react-monorepo/colors';

export const pageStyle: CSSProperties = {
  height: '100vh',
  width: '100vw',
  background: Colors.backgroundGradient,
  fontFamily: 'Arial, Helvetica, sans-serif',
  overflowX: 'auto',
}

export const pageBody: CSSProperties = {
  display: 'flex',
}

export const formContainer: CSSProperties = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100vh',
  width: '60vw',
  padding: '0rem 2rem',
}

export const loginForm: CSSProperties = {
  backgroundColor: 'white',
  padding: '2rem 10rem',
  borderRadius: '10px',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  textAlign: 'center',
}

export const formTitle: CSSProperties = {
  fontSize: '24px',
  marginBottom: '0.5rem',
  color: Colors.primary,
}

export const formSubTitle: CSSProperties = {
  fontSize: '14px',
  marginBottom: '1.5rem',
  color: Colors.grey,
}

export const inputLabel: CSSProperties = {
  display: 'block',
  marginBottom: '0.5rem',
  textAlign: 'left',
  fontSize: '14px',
}

export const inputContainer: CSSProperties = {
  marginBottom: '1rem',
}

export const registerButton: CSSProperties = {
  marginTop: '1.5rem',
}

export const termsText: CSSProperties = {
  fontSize: '12px',
  color: Colors.grey,
  marginTop: '1.5rem',
}

export const signUpText: CSSProperties = {
  marginTop: '1rem',
  fontSize: '14px',
  color: Colors.grey,
}

export const appSlogan: CSSProperties = {
  color: 'white',
  textAlign: 'center',
  display: 'flex',
  alignItems: 'center',
  width: '40vw',
  justifyContent: 'center',
}

export const appSloganTitle: CSSProperties = {
  fontSize: '24px',
  marginTop: '24px',
}

export const appSloganSubtitle: CSSProperties = {
  fontSize: '20px',
  marginTop: '14px',
}

export const appLogo: CSSProperties = {
  height: '400px',
  backgroundColor: 'rgba(255, 255, 255, 0.8)',
  borderRadius: '40px',
}
