import React, { useState } from 'react';
import { black, grey, lightGrey, primary } from '@react-monorepo/colors';
import { FindJob2 } from '@react-monorepo/asset-lib';
import { jobCategory_1 } from '../data/job-category';

const allCategories = [jobCategory_1, jobCategory_1, jobCategory_1, jobCategory_1];

const containerStyle = {
  display: 'flex',
  borderRadius: '8px',
  margin: '10px 400px',
  fontSize: '10px',
  fontWeight: 'bold',
  gap: '10px',
  height: '230px',
};

const leftPanelStyle = {
  width: '30%',
  backgroundColor: '#fff',
  color: primary,
  borderRadius: '8px',
  display: 'flex',
  flexDirection: 'column' as const,
  gap: '16px',
  padding: '12px',
};

const rightPanelStyle = {
  backgroundColor: '#fff',
  color: black,
  borderRadius: '8px',
  padding: '12px',
  height: '206px',
  overflowY: 'scroll' as const,
};

const menuItemStyle = {
  cursor: 'pointer',
  transition: 'color 0.3s',
};

const tagStyle = {
  display: 'inline-block',
  backgroundColor: '#ff8181',
  color: '#ffffff',
  borderRadius: '12px',
  padding: '6px 10px',
  border: '1.5px solid #FF0000FF',
};

const tagStyle2 = {
  display: 'inline-block',
  backgroundColor: '#ddd',
  color: grey,
  borderRadius: '12px',
  padding: '6px 10px',
};

const optionItemStyle = {
  cursor: 'pointer',
  transition: 'color 0.3s',
  backgroundColor: primary,
  width: '24px',
  height: '24px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  color: '#fff',
  alignItems: 'center',
};

const JobCategoryPanel: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [currentCategory, setCurrentCategory] = useState<number>(1);

  return (
    <div style={containerStyle} onMouseLeave={() => setActiveCategory(null)}>
      <div style={leftPanelStyle}>
        {allCategories[currentCategory - 1].map((category) => (
          <div
            key={category.name}
            style={{
              ...menuItemStyle,
              textDecoration:
                activeCategory === category.name ? 'underline' : 'none',
            }}
            onMouseEnter={() => setActiveCategory(category.name)}
          >
            {category.name}
          </div>
        ))}
        <div style={{ borderTop: `1px solid ${lightGrey}`, margin: '0 0' }} />
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            padding: '0 16px',
          }}
        >
          {allCategories.map((_categories, index) => (
            <div
              key={index}
              style={{ display: 'flex', flexDirection: 'column' }}
            >
              <div
                style={{
                  ...optionItemStyle,
                  backgroundColor:
                    currentCategory === index + 1 ? primary : '#fff',
                  color: currentCategory === index + 1 ? '#fff' : primary,
                }}
                onClick={() => setCurrentCategory(index + 1)}
              >
                {index + 1}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div style={{ width: '70%' }}>
        {activeCategory ? (
          <div style={rightPanelStyle}>
            <a>Được tìm kiếm nhiều</a>
            <div
              style={{
                gap: '10px',
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: '10px',
              }}
            >
              {allCategories[currentCategory - 1]
                .find((jobCategory) => jobCategory.name === activeCategory)
                ?.mostFindOptions.map((option, index) => (
                  <span key={index} style={tagStyle}>
                    {option}
                  </span>
                ))}
            </div>
            <div style={{height: '20px'}}/>
            <a>Nhu cầu tuyển dụng cao</a>
            <div
              style={{
                gap: '10px',
                display: 'flex',
                flexWrap: 'wrap',
                marginTop: '10px',
              }}
            >
              {allCategories[currentCategory - 1]
                .find((jobCategory) => jobCategory.name === activeCategory)
                ?.mostRecruitOptions.map((option, index) => (
                  <span key={index} style={tagStyle2}>
                    {option}
                  </span>
                ))}
            </div>
          </div>
        ) : (
          <div
            style={{
              backgroundColor: grey,
              width: '100%',
              height: '100%',
              display: 'flex',
              justifyContent: 'center',
              borderRadius: '8px',
            }}
          >
            <img
              src={FindJob2}
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '8px',
              }}
              alt="Find Job"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default JobCategoryPanel;
