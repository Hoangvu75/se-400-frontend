import { jobFields } from '../data/job-field';
import React from 'react';
import { JobFieldCard } from './job-field-card';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

export const JobFieldGrid = () => {
  const itemsPerPage = 8;
  const [currentPage, setCurrentPage] = React.useState(1);
  const totalPages = Math.ceil(jobFields.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobFields = jobFields.slice(
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
        {currentJobFields.map((jobField, index) => (
          <JobFieldCard key={index} jobField={jobField} />
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
}

const gridStyle: React.CSSProperties = {
  display: 'grid',
  gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
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
