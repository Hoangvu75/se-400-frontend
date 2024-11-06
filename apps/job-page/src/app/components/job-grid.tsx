// JobGrid.tsx
import React, { useState } from 'react';
import JobCard from './job-card';
import { FindJob, FindJob2 } from '@react-monorepo/asset-lib';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

let jobs = [
  {
    logo: FindJob2,
    title: 'Chuyên Viên Tư Vấn Đầu Tư Hàng Hóa',
    company: 'Công ty CP Giao Dịch Hàng Hóa',
    salary: '20 - 40 triệu',
    location: 'Hà Nội, Hồ Chí Minh',
  },
  {
    logo: FindJob,
    title: 'Unreal Engine Artist Tại Hồ Chí Minh',
    company: 'Công Ty TNHH Vlast Việt Nam',
    salary: '10 - 30 triệu',
    location: 'Hồ Chí Minh',
  },
];
for (let i = 0; i < 8; i++) {
  jobs = jobs.concat(jobs);
}

const itemsPerPage = 9;

const JobGrid: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(jobs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = jobs.slice(startIndex, startIndex + itemsPerPage);

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  return (
    <div>
      <div style={gridStyle}>
        {currentJobs.map((job, index) => (
          <JobCard
            key={index}
            logo={job.logo}
            title={job.title}
            company={job.company}
            salary={job.salary}
            location={job.location}
          />
        ))}
      </div>
      <div style={paginationStyle}>
        <FaArrowCircleLeft onClick={goToPrevPage} style={paginationButtonStyle} />
        <span style={pageInfoStyle}>
          {currentPage} / {totalPages}
        </span>
        <FaArrowCircleRight onClick={goToNextPage} style={paginationButtonStyle} />
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

const paginationButtonStyle: React.CSSProperties = {
  borderRadius: '50%',
  color: '#fff',
  cursor: 'pointer',
  margin: '0 30px',
  width: '24px',
  height: '24px',
};

const pageInfoStyle: React.CSSProperties = {
  fontSize: '16px',
  color: '#fff',
};

export default JobGrid;
