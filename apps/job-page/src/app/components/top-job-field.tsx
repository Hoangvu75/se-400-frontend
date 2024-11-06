import React from 'react';
import { JobFieldGrid } from './job-field-grid';

export const TopJobField: React.FC = () => {
  return (
    <div style={{
      margin: '100px 250px 150px 250px',
    }}>
      <p style={{
        fontSize: '20px',
        fontWeight: 'bold',
      }}>Top các ngành nghề nổi bật</p>
      <JobFieldGrid />
    </div>
  );
}
