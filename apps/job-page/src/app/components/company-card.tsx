import React from 'react';
import { grey, primary } from '@react-monorepo/colors';

export class CompanyData {
  logo: string;
  name: string;
  location: string;
  employeeNumber: EmployeeNumber;
  jobNumber: number;

  constructor(
    logo: string,
    name: string,
    location: string,
    employeeNumber: EmployeeNumber,
    jobNumber: number
  ) {
    this.logo = logo;
    this.name = name;
    this.location = location;
    this.employeeNumber = employeeNumber;
    this.jobNumber = jobNumber;
  }
}

export enum EmployeeNumber {
  EN_1 = '1-10',
  EN_2 = '11-50',
  EN_3 = '51-200',
  EN_4 = '201-500',
  EN_5 = '501-1000',
  EN_6 = '1001-5000',
  EN_7 = 'over 5000',
}

export const CompanyCard: React.FC<CompanyData> = (props) => {
  const [isHovered, setIsHovered] = React.useState(false);

  const companyCardStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: '8px',
    padding: '16px',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: '#333',
    cursor: 'pointer',
    transform: isHovered ? 'scale(1.05)' : 'scale(1)',
    transition: 'transform 0.2s',
  };

  return (
    <div
      style={companyCardStyle}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div style={{ display: 'flex' }}>
        <img src={props.logo} alt="Company Logo" style={logoStyle} />
        <div style={{ marginLeft: '12px', flex: 6 }}>
          <p style={nameStyle}>{props.name}</p>
          <p style={locationStyle}>{props.location}</p>
        </div>
      </div>

      <div style={detailsStyle}>
        <span style={employeeNumberStyle}>
          Quy mô nhân viên: {props.employeeNumber}
        </span>
        <span style={jobNumberStyle}>{props.jobNumber} công việc</span>
      </div>
    </div>
  );
};

// Styles for CompanyCard component

const logoStyle: React.CSSProperties = {
  flex: 4,
  marginBottom: '8px',
  height: '70px',
};

const nameStyle: React.CSSProperties = {
  fontSize: '13px',
  fontWeight: 'bold',
  color: '#333',
  margin: 0,
  padding: 0,
};

const locationStyle: React.CSSProperties = {
  fontSize: '12px',
  color: grey[400],
  marginTop: 4,
  padding: 0,
};

const detailsStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  width: '100%',
  marginTop: '12px',
};

const employeeNumberStyle: React.CSSProperties = {
  fontSize: '12px',
  color: grey,
  margin: 0,
  padding: 0,
  fontStyle: 'italic',
};

const jobNumberStyle: React.CSSProperties = {
  fontSize: '12px',
  color: primary,
  margin: 0,
  padding: 0,
  fontWeight: 'bold',
};
