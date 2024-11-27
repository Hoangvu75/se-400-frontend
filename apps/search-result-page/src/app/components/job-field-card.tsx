import React from 'react';
import { JobField } from '../data/job-field';
import { black, primary } from '@react-monorepo/colors';

interface JobFieldCardProps {
  jobField: JobField;
}

export const JobFieldCard: React.FC<JobFieldCardProps> = (props) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const jobFieldCardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    cursor: 'pointer',
    transition: 'transform 0.2s',
    border: isHovered ? `3px solid ${primary}` : '2px solid #fff',
  };

  const nameStyle: React.CSSProperties = {
    fontSize: '14px',
    fontWeight: 'bold',
    color: isHovered ? primary : black,
    textAlign: 'center',
    display: '-webkit-box',
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    WebkitLineClamp: 1,
    marginTop: 4,
  };

  return (
    <div
      style={jobFieldCardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <img
        src={props.jobField.imageUrl}
        alt={props.jobField.title}
        style={logoStyle}
      />
      <a style={nameStyle}>{props.jobField.title}</a>
      <a style={jobNumberStyle}>{props.jobField.numberOfJobs} việc làm</a>
    </div>
  );
};

const logoStyle: React.CSSProperties = {
  width: '64px',
  height: '64px',
  marginBottom: '8px',
};

const jobNumberStyle: React.CSSProperties = {
  fontSize: '14px',
  color: primary,
  marginTop: 4,
};
