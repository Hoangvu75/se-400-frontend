import { CSSProperties } from 'react';
import { black } from '@react-monorepo/colors';

export const pageStyles: CSSProperties = {
  fontFamily: 'Arial, sans-serif',
  background: 'linear-gradient(135deg, #4a1d68, #262d75)',
  color: 'white',
}

export const formsContainer: CSSProperties = {
  display: 'flex',
  height: '100vh',
  width: '100%',
  marginTop: 20,
  color: black,
  marginLeft: 200,
  marginRight: 200,
};

export const jobForm: CSSProperties = {
  backgroundColor: 'white',
  borderRadius: '10px',
  boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.1)',
  padding: 20,
};

export const jobTitle: CSSProperties = {
  fontSize: 18,
  fontWeight: 600,
  color: black,
};
