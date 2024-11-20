// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CommonButton, Footer, InputField, NavBar } from '@react-monorepo/components';
import * as Styles from './styles';
import JobCategoryPanel from './components/job-category-panel';
import { RecommendJob } from './components/recommend-job';
import { RecommendCompany } from './components/recommend-company';
import { TopJobField } from './components/top-job-field';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import React from 'react';

export function JobPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search-results?query=${encodeURIComponent(searchTerm)}`);
  };

  return (
    <div style={Styles.pageStyles}>
      <NavBar />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        margin: '50px 300px 0 300px',
        marginTop: '50px',
      }}>
        <form onSubmit={handleSearchSubmit}
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            width: '800px',
            borderRadius: '50px',
            backgroundColor: 'white',
            padding: '10px 20px',
            boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
            marginLeft: '20px',
            marginBottom: '20px',
            fontSize: '20px',
            fontWeight: 'bold',
            cursor: 'pointer',
            transition: 'box-shadow 0.3s',

          }}>
          <InputField
            style={{
              borderRadius: '50px',
              height: '50px',
            }}
            placeholder="Tìm kiếm công việc"
            value={searchTerm}
            onChange={handleSearchTermChange}
          />
          <CommonButton
            style={{
              width: '200px',
              marginLeft: '10px',
              borderRadius: '50px',
            }}
            type="submit"
          >
            Tìm kiếm
          </CommonButton>
        </form>

      </div>
      <JobCategoryPanel />
      <RecommendJob />
      <RecommendCompany />
      <TopJobField />
      <Footer />
    </div>
  );
}

export default JobPage;
