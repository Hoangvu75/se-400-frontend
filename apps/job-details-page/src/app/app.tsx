// eslint-disable-next-line @typescript-eslint/no-unused-vars
import * as Styles from './styles';
import { NavBar } from '@react-monorepo/components';
import React from 'react';

export function JobDetailsPage() {
  return (
    <div style={Styles.pageStyles}>
      <NavBar />
      <div style={{ display: 'flex' }}>
        <div style={Styles.formsContainer}>
          <div style={{ flex: 2 }}>
            <div style={Styles.jobForm}>
              <a style={Styles.jobTitle}>Nhân viên kinh doanh/bán hàng</a>
            </div>
          </div>
          <div style={{ width: 20 }} />
          <div style={{ flex: 1 }}>
            <div style={Styles.jobForm}>
              <a style={Styles.jobTitle}>Nhân viên kinh doanh/bán hàng</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JobDetailsPage;
