import React from 'react';
import { FilterBar } from './filter-bar';
import JobGrid from './job-grid';

export const RecommendJob: React.FC = () => {
  return (
    <div style={{
      margin: '100px 250px 200px 250px',
    }}>
      <p style={{
        fontSize: '20px',
        fontWeight: 'bold',
      }}>Gợi ý việc làm</p>
      <FilterBar />
      <JobGrid />
    </div>
  );
}
