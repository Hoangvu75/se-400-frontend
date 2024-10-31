import { StrictMode } from 'react';
import * as ReactDOM from 'react-dom/client';

import JobPage from './app/app';
export { JobPage };

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <StrictMode>
    <JobPage />
  </StrictMode>
);
