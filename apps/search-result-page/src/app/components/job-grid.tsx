// // JobGrid.tsx
// import React, { useState } from 'react';
// import JobCard from './job-card';
// import { FindJob, FindJob2 } from '@react-monorepo/asset-lib';
// import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

// interface JobSearchInfo {
//   category: string;
// }

// let jobs = [
//   {
//     logo: FindJob2,
//     title: 'Chuyên Viên Tư Vấn Đầu Tư Hàng Hóa',
//     company: 'Công ty CP Giao Dịch Hàng Hóa',
//     salary: '20 - 40 triệu',
//     location: 'Hà Nội, Hồ Chí Minh',
//     category: "Tư vấn"
//   },
//   {
//     logo: FindJob,
//     title: 'Unreal Engine Artist Tại Hồ Chí Minh',
//     company: 'Công Ty TNHH Vlast Việt Nam',
//     salary: '10 - 30 triệu',
//     location: 'Hồ Chí Minh',
//     category: "Thiết kế"
//   },
// ];
// for (let i = 0; i < 8; i++) {
//   jobs = jobs.concat(jobs);
// }

// const itemsPerPage = 9;

// const JobGrid: React.FC<JobSearchInfo> = ({category}) => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = Math.ceil(jobs.length / itemsPerPage);

//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const currentJobs = jobs.slice(startIndex, startIndex + itemsPerPage);

//   const goToNextPage = () => {
//     setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
//   };

//   const goToPrevPage = () => {
//     setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
//   };

//   return (
//ItJob,tJob,  tJob,    <div>
//       <div style={gridStyle}>
//         {currentJobs.map((job, index) => (
//           <JobCard
//             key={index}
//             logo={job.logo}
//             title={job.title}
//             company={job.company}
//             salary={job.salary}
//             location={job.location}
//           />
//         ))}
//       </div>
//       <div style={paginationStyle}>
//         <FaArrowCircleLeft onClick={goToPrevPage} style={paginationButtonStyle} />
//         <span style={pageInfoStyle}>
//           {currentPage} / {totalPages}
//         </span>
//         <FaArrowCircleRight onClick={goToNextPage} style={paginationButtonStyle} />
//       </div>
//     </div>
//   );
// };

// const gridStyle: React.CSSProperties = {
//   display: 'grid',
//   gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
//   gap: '16px',
//   marginTop: '40px',
// };

// const paginationStyle: React.CSSProperties = {
//   display: 'flex',
//   alignItems: 'center',
//   justifyContent: 'center',
//   marginTop: '20px',
// };

// const paginationButtonStyle: React.CSSProperties = {
//   borderRadius: '50%',
//   color: '#fff',
//   cursor: 'pointer',
//   margin: '0 30px',
//   width: '24px',
//   height: '24px',
// };

// const pageInfoStyle: React.CSSProperties = {
//   fontSize: '16px',
//   color: '#fff',
// };

// export default JobGrid;

// JobGrid.tsx
import React, { useState } from 'react';
import JobCard from './job-card';
import { FindJob, FindJob2, Bartender, Barista, CarryJob, Cashier, Chef, ItJob } from '@react-monorepo/asset-lib';
import { FaArrowCircleLeft, FaArrowCircleRight } from 'react-icons/fa';

interface JobSearchInfo {
  category: string;
}

let jobs = [
  {
    logo: FindJob2,
    title: 'Chuyên Viên Tư Vấn Đầu Tư Hàng Hóa',
    company: 'Công ty CP Giao Dịch Hàng Hóa',
    salary: '20 - 40 triệu',
    location: 'Hà Nội, Hồ Chí Minh',
    category: "Tư vấn"
  },
  {
    logo: FindJob,
    title: 'Unreal Engine Artist Tại Hồ Chí Minh',
    company: 'Công Ty TNHH Vlast Việt Nam',
    salary: '10 - 30 triệu',
    location: 'Hồ Chí Minh',
    category: "Thiết kế"
  },
  {
    logo: Bartender,
    title: 'Bartender tại Elixir Lounge Bar',
    company: 'Elixir Co',
    salary: '12 - 25 triệu',
    location: '28/1 Ngô Văn Năm, Bến Nghé, Quận 1, Hồ Chí Minh',
    category: "Pha chế"
  },
  {
    logo: Barista,
    title: 'Phục vụ tại quán nước Littel Bean Coffee',
    company: 'Bean Co',
    salary: '8 - 20 triệu',
    location: ' 75 Đ. Cao Thắng, Phường 3, Quận 3, Hồ Chí Minh',
    category: "Phục vụ"
  },
  {
    logo: CarryJob,
    title: 'Tài Xế Vận Chuyển Hàng Hóa',
    company: 'Công Ty Vận Tải ABC',
    salary: '10 - 15 triệu',
    location: 'Hồ Chí Minh',
    category: "Vận chuyển"
  },
  {
    logo: Cashier,
    title: 'Nhân Viên Thu Ngân',
    company: 'Siêu Thị XYZ',
    salary: '7 - 10 triệu',
    location: 'Hồ Chí Minh',
    category: "Thu ngân"
  },
  {
    logo: Chef,
    title: 'Đầu Bếp Tại Nhà Hàng',
    company: 'Nhà Hàng 5 Sao Luxury',
    salary: '15 - 25 triệu',
    location: 'Hà Nội',
    category: "Đầu bếp"
  },
  {
    logo: ItJob,
    title: 'Lập Trình Viên Frontend React',
    company: 'Công Ty IT Innovate',
    salary: '20 - 40 triệu',
    location: 'Hà Nội',
    category: "Lập trình viên"
  },
  {
    logo: CarryJob,
    title: 'Chuyên Viên Giao Hàng (Freelancer)',
    company: 'Giao Hàng Nhanh',
    salary: '10 - 20 triệu',
    location: 'Hồ Chí Minh',
    category: "Vận chuyển"
  },
  {
    logo: Cashier,
    title: 'Thu Ngân Siêu Thị',
    company: 'Siêu Thị Co.op Mart',
    salary: '8 - 12 triệu',
    location: 'Hồ Chí Minh',
    category: "Thu ngân"
  },
  {
    logo: Chef,
    title: 'Đầu Bếp Nhật Bản',
    company: 'Nhà Hàng Sushi Bạch Tuyết',
    salary: '20 - 35 triệu',
    location: 'Hà Nội',
    category: "Đầu bếp"
  },
  {
    logo: ItJob,
    title: 'Lập Trình Viên Fullstack',
    company: 'Công Ty Công Nghệ TekHouse',
    salary: '25 - 50 triệu',
    location: 'Hồ Chí Minh',
    category: "Lập trình viên"
  }
];
for (let i = 0; i < 8; i++) {
  jobs = jobs.concat(jobs);
}

const itemsPerPage = 9;

const JobGrid: React.FC<JobSearchInfo> = ({category}) => {
  // Lọc jobs theo category từ props
  const filteredJobs = jobs.filter((job) => job.category.toLowerCase() === category.toLowerCase());

  // Paginate các công việc đã lọc
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(filteredJobs.length / itemsPerPage);

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentJobs = filteredJobs.slice(startIndex, startIndex + itemsPerPage);

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
