import * as Styles from '../app/styles';
import React from 'react';
import { JobBackground } from '@react-monorepo/asset-lib';
import { grey, primary } from '@react-monorepo/colors';
import { FaClock, FaMedal } from 'react-icons/fa6';
import { IconType } from 'react-icons';
import { FaCalendarTimes, FaUserFriends } from 'react-icons/fa';

export function JobInfoLeft() {
  return <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 20 }}>
    <div style={Styles.jobForm}>
      <div style={{
        display: 'flex',
        gap: 10,
      }}>
        <img src={JobBackground} alt="job" style={{ width: 80, height: 80, borderRadius: 8 }} />
        <a style={{
          fontSize: 14,
          fontWeight: 'bold',
        }}>
          Công ty TNHH Thương mại dịch vụ ABCD
        </a>
      </div>
      <div style={{
        display: 'flex',
        flexDirection: 'column',
        gap: 8,
        marginTop: 12,
        fontSize: 13,
        color: grey
      }}>
        <a>Quy mô: 100-499 nhân viên</a>
        <a>Lĩnh vực: Bán hàng</a>
        <a>Địa điểm: Hà Nội</a>
      </div>
    </div>
    <div style={Styles.jobForm}>
      <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
        <div style={{ width: 5, height: 24, backgroundColor: primary }} />
        <a style={{ fontSize: 18, fontWeight: 'bold', flex: 1 }}>
          Thông tin chung
        </a>
      </div>
      <div style={{ marginTop: 20, display: 'flex', flexDirection: 'column', gap: 20 }}>
        <JobInfoItem icon={FaMedal} title="Cấp bậc" value="Nhân viên" />
        <JobInfoItem icon={FaClock} title="Kinh nghiệm" value="Không yêu cầu" />
        <JobInfoItem icon={FaUserFriends} title="Số lượng tuyển" value="10 nguòi" />
        <JobInfoItem icon={FaCalendarTimes} title="Hình thức làm việc" value="Bán thời gian" />
      </div>
    </div>
  </div>;
}

type JobInfoItemProps = {
  icon: IconType;
  title: string;
  value: string;
}

function JobInfoItem(props: JobInfoItemProps) {
  return <div style={{ display: 'flex', alignItems: 'center' }}>
    <div
      style={{
        width: 32,
        height: 32,
        alignItems: 'center',
        display: 'flex',
        justifyContent: 'center',
        borderRadius: 100,
        backgroundColor: primary,
      }}
    >
      {/*<FaMedal style={{ color: 'white' }} />*/}
      {props.icon({ color: 'white' })}
    </div>
    <div style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
      <a style={{ marginLeft: 10, fontSize: 13 }}>{props.title}</a>
      <a style={{ marginLeft: 10, fontSize: 13, fontWeight: 'bold' }}>{props.value}</a>
    </div>
  </div>;
}
