import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import RegisterPage from './app/app';
export { RegisterPage };

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <RegisterPage />
  </StrictMode>
);
