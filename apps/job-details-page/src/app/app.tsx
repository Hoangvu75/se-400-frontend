// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Styles from './styles';
import { Footer, NavBar } from '@react-monorepo/components';
import React from 'react';
import { JobInfo2 } from '../components/job-info2';
import { JobInfo1 } from '../components/job-info1';
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
          <JobInfo1 />
          <div style={{ width: 20 }} />
          <JobInfo2 />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default JobDetailsPage;
