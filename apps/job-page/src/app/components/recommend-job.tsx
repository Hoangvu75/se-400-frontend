import React from 'react';
import { FilterBar } from './filter-bar';

export const RecommendJob: React.FC = () => {
  return (
    <div style={{
      margin: '100px 200px 200px 200px',
    }}>
      <p style={{
        fontSize: '20px',
        fontWeight: 'bold',
      }}>Gợi ý việc làm</p>
      <FilterBar />
    </div>
  );
}
