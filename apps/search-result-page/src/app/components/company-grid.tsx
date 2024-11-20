import { CompanyCard, CompanyData, EmployeeNumber } from './company-card';
import { FindJob } from '@react-monorepo/asset-lib';
import React, { useState } from 'react';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

let companies = [
  new CompanyData(
    FindJob,
    'Công ty CP Giao Dịch Hàng Hóa',
    'Hà Nội',
    EmployeeNumber.EN_1,
    12
  ),
  new CompanyData(
    FindJob,
    'Công Ty TNHH Vlast Việt Nam',
    'Hồ Chí Minh',
    EmployeeNumber.EN_2,
    5
  ),
];

for (let i = 0; i < 8; i++) {
  companies = companies.concat(companies);
}

const itemsPerPage = 9;

const CompanyGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(companies.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentCompanies = companies.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <div style={gridStyle}>
        {currentCompanies.map((company, index) => (
          <CompanyCard
            key={index}
            logo={company.logo}
            name={company.name}
            location={company.location}
            employeeNumber={company.employeeNumber}
            jobNumber={company.jobNumber}
          />
        ))}
      </div>
      <div style={paginationStyle}>
        <FaArrowCircleLeft
          onClick={goToPrevPage}
          style={paginationButtonStyle}
        />
        <span style={pageInfoStyle}>
          {currentPage} / {totalPages}
        </span>
        <FaArrowCircleRight
          onClick={goToNextPage}
          style={paginationButtonStyle}
        />
      </div>
    </div>
  );
};

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
  gap: '16px',
  marginTop: '40px',
};

const paginationStyle: React.CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  marginTop: '20px',
};

const pageInfoStyle: React.CSSProperties = {
  margin: '0 20px',
};

const paginationButtonStyle: React.CSSProperties = {
  borderRadius: '50%',
  color: '#fff',
  cursor: 'pointer',
  margin: '0 30px',
  width: '24px',
  height: '24px',
};

export { CompanyGrid };
