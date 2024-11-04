import React, { useState } from 'react';
import { primary } from '@react-monorepo/colors';

export const FilterBar = () => {
  const [selectedCategory, setSelectedCategory] = useState('Địa điểm');
  const [selectedOption, setSelectedOption] = useState('Ngẫu nhiên');

  const options = {
    'Địa điểm': [
      'Ngẫu nhiên',
      'Hà Nội',
      'Thành phố Hồ Chí Minh',
      'Miền Bắc',
      'Miền Nam',
    ],
    'Mức lương': [
      'Tất cả',
      'dưới 10 triệu',
      'từ 10 - 25 triệu',
      'từ 25 - 40 triệu',
      'trên 40 triệu',
    ],
    'Kinh nghiệm': [
      'Tất cả',
      'chưa có kinh nghiệm',
      '1 năm trở xuống',
      '2 năm',
      '3 năm',
      'trên 5 năm',
    ],
    'Ngành nghề': [
      'Việc làm part-time',
      'Kinh doanh/Bán hàng',
      'Biên/Phiên dịch',
      'Giảng viên/gia sư',
      'Công nghệ thông tin',
    ],
  };

  return (
    <div style={styles.container}>
      <div style={styles.dropdownContainer}>
        <span style={styles.label}>Lọc theo:</span>
        <select
          style={styles.dropdown}
          value={selectedCategory}
          onChange={(e) => {
            setSelectedCategory(e.target.value);
            // @ts-ignore
            setSelectedOption(options[e.target.value][0]);
          }}
        >
          {Object.keys(options).map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
      </div>
      <div style={styles.navigation}>
        {
          // @ts-ignore
          options[selectedCategory].map((option: string, index: number) => (
            <span
              key={index}
              style={{
                ...styles.option,
                backgroundColor:
                  option === selectedOption ? primary : '#f3f4f6',
                color: option === selectedOption ? '#fff' : '#333',
              }}
              onClick={() => setSelectedOption(option)}
            >
              {option}
            </span>
          ))
        }
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  dropdownContainer: {
    display: 'flex',
    alignItems: 'center',
    flex: 1,
  },
  label: {
    color: '#ffffff',
    marginRight: '8px',
  },
  dropdown: {
    padding: '8px 16px',
    borderRadius: '4px',
    border: '1px solid #ddd',
    fontSize: '14px',
  },
  navigation: {
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
  },
  navButton: {
    border: '1px solid #00a82d',
    borderRadius: '50%',
    color: primary,
    backgroundColor: '#fff',
    width: '24px',
    height: '24px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    cursor: 'pointer',
  },
  option: {
    padding: '8px 16px',
    borderRadius: '16px',
    fontSize: '14px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.3s',
  },
};
