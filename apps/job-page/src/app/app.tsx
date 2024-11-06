// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CommonButton, Footer, InputField, NavBar } from '@react-monorepo/components';
import * as Styles from './styles';
import JobCategoryPanel from './components/job-category-panel';
import { RecommendJob } from './components/recommend-job';
import { RecommendCompany } from './components/recommend-company';
import { TopJobField } from './components/top-job-field';
import React from 'react';

export function JobPage() {
  return (
    <div style={Styles.pageStyles}>
      <NavBar />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        margin: '50px 300px 0 300px',
        marginTop: '50px',
      }}>
        <InputField style={{
          borderRadius: '50px',
          height: '50px',
        }}
        placeholder={'Tìm kiếm công việc mong muốn'}/>
        <CommonButton
          style={{
            width: '200px',
            marginLeft: '10px',
            borderRadius: '50px',
          }}
        >Tìm kiếm</CommonButton>
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
