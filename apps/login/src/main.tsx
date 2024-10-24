import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import LoginPage from './app/app';
export { LoginPage };

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <LoginPage />
  </StrictMode>
);
