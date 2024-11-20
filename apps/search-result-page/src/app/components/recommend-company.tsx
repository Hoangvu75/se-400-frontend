import React from 'react';
import { CompanyGrid } from './company-grid';

export const RecommendCompany: React.FC = () => {
  return (
    <div style={{
      margin: '100px 250px 0px 250px',
    }}>
      <p style={{
        fontSize: '20px',
        fontWeight: 'bold',
      }}>Gợi ý công ty</p>
      <CompanyGrid />
    </div>
  );
}
