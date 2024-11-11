import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import JobDetailsPage from './app/app';
export { JobDetailsPage } from './app/app';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <JobDetailsPage />
  </StrictMode>
);
