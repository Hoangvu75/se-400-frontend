// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Styles from './styles';
import { Footer, NavBar } from '@react-monorepo/components';
import React from 'react';
import { JobInfoLeft } from '../components/job-info-left';
import { JobInfoRight } from '../components/job-info-right';
import { useSelector } from 'react-redux';
import { RootState } from '@react-monorepo/store';

export function JobDetailsPage() {
  const searchParams = new URLSearchParams(window.location.search);
  const jobId = searchParams.get('jobId');

  return (
    <div style={Styles.pageStyles}>
      <NavBar />
      <div style={{ display: 'flex', marginBottom: 100 }}>
        <div style={Styles.formsContainer}>
          <JobInfoRight />
          <div style={{ width: 20 }} />
          <JobInfoLeft />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JobDetailsPage;
