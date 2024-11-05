// JobCard.tsx
import React from 'react';
import { grey } from '@react-monorepo/colors';

type JobCardProps = {
  logo: string;
  title: string;
  company: string;
  salary: string;
  location: string;
};

const JobCard: React.FC<JobCardProps> = ({
  logo,
  title,
  company,
  salary,
  location,
}) => {
  return (
    <div style={jobCardStyle}>
      <div style={{ display: 'flex' }}>
        <img src={logo} alt="Company Logo" style={logoStyle} />
        <div style={{ marginLeft: '12px', flex: 6 }}>
          <p style={titleStyle}>{title}</p>
          <p style={companyStyle}>{company}</p>
        </div>
      </div>

      <div style={detailsStyle}>
        <span style={locationStyle}>{location}</span>
        <span style={salaryStyle}>{salary}</span>
      </div>
    </div>
  );
};

// Styles for JobCard component
const jobCardStyle: React.CSSProperties = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  backgroundColor: '#fff',
  borderRadius: '8px',
  padding: '16px',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
};

const logoStyle: React.CSSProperties = {
  flex: 4,
  marginBottom: '8px',
  height: '70px',
};

const titleStyle: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: 'bold',
  color: '#333',
  margin: 0,
  padding: 0,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 2,
};

const companyStyle: React.CSSProperties = {
  color: '#666',
  fontSize: '13px',
  margin: 0,
  padding: 0,
  display: '-webkit-box',
  WebkitBoxOrient: 'vertical',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  WebkitLineClamp: 1,
  marginTop: '4px',
};

const detailsStyle: React.CSSProperties = {
  display: 'flex',
  width: '100%',
  marginTop: '8px',
  gap: '8px',
};

const salaryStyle: React.CSSProperties = {
  fontSize: '10px',
  fontWeight: 'bold',
  backgroundColor: '#ddd',
  color: grey,
  borderRadius: '20px',
  padding: '8px 16px',
};

const locationStyle: React.CSSProperties = {
  fontSize: '10px',
  fontWeight: 'bold',
  backgroundColor: '#ddd',
  color: grey,
  borderRadius: '20px',
  padding: '8px 16px',
};

export default JobCard;
