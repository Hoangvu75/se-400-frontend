import * as Styles from '../app/styles';
import { grey, lightGrey, primary } from '@react-monorepo/colors';
import {
  FaClock,
  FaMapLocation,
  FaMoneyBillWave,
  FaPaperPlane,
  FaRegBell,
  FaRegBookmark,
} from 'react-icons/fa6';
import { CommonButton } from '@react-monorepo/components';
import React from 'react';

export function JobInfoRight() {
  return (
    <div style={{ flex: 2 }}>
      <div style={Styles.jobForm}>
        <a style={Styles.jobTitle}>Nhân viên kinh doanh/bán hàng</a>
        <div style={Styles.jobBasicInfo}>
          <JobBasicInfoItem type={1} />
          <JobBasicInfoItem type={2} />
          <JobBasicInfoItem type={3} />
        </div>
        <div style={{ display: 'flex' }}>
          <div
            style={{
              display: 'flex',
              fontSize: 13,
              backgroundColor: lightGrey,
              padding: '4px 8px',
              borderRadius: 4,
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <FaClock style={{ color: grey }} />
            <a>Hạn nộp hồ sơ: 04/12/2024</a>
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            gap: 10,
          }}
        >
          <CommonButton
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              marginTop: 20,
              borderRadius: 8,
              flex: 5,
              gap: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FaPaperPlane />
            <a>Ứng tuyển ngay</a>
          </CommonButton>
          <CommonButton
            isOutlineButton={true}
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              marginTop: 20,
              borderRadius: 8,
              flex: 1,
              gap: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <FaRegBookmark />
            <a>Lưu tin</a>
          </CommonButton>
        </div>
      </div>
      <div style={{ ...Styles.jobForm, marginTop: 20 }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          <div style={{ width: 5, height: 24, backgroundColor: primary }} />
          <a style={{ fontSize: 18, fontWeight: 'bold', flex: 1 }}>
            Chi tiết tin tuyển dụng
          </a>
          <CommonButton
            isOutlineButton={true}
            style={{
              fontSize: 13,
              fontWeight: 'bold',
              borderRadius: 8,
              gap: 10,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              width: 220,
            }}
          >
            <FaRegBell />
            <a>Gửi tôi việc làm tương tự</a>
          </CommonButton>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <div
            style={{
              display: 'inline-flex',
              fontSize: 13,
              backgroundColor: lightGrey,
              padding: '4px 8px',
              borderRadius: 4,
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <a>Quản lý chất lượng giáo dục</a>
          </div>
          <div
            style={{
              display: 'inline-flex',
              fontSize: 13,
              backgroundColor: lightGrey,
              padding: '4px 8px',
              borderRadius: 4,
              marginTop: 20,
              justifyContent: 'center',
              alignItems: 'center',
              gap: 10,
            }}
          >
            <a>Giáo dục/Đào tạo</a>
          </div>
        </div>
        <a
          style={{
            marginTop: 12,
            fontSize: 14,
            fontWeight: 'bold',
          }}
        >
          Mô tả công việc
        </a>
        <a style={{ marginTop: 12, fontSize: 14 }}>
          - Tìm kiếm khách hàng tiềm năng
          <br />
          - Tư vấn sản phẩm, chăm sóc khách hàng
          <br />- Thực hiện các công việc khác theo sự phân công của cấp trên
        </a>
        <a
          style={{
            marginTop: 12,
            fontSize: 14,
            fontWeight: 'bold',
          }}
        >
          Yêu cầu công việc
        </a>
        <a style={{ marginTop: 12, fontSize: 14 }}>
          - Tốt nghiệp trung cấp trở lên
          <br />
          - Có kỹ năng giao tiếp tốt
          <br />- Có kỹ năng làm việc nhóm
        </a>
        <a
          style={{
            marginTop: 12,
            fontSize: 14,
            fontWeight: 'bold',
          }}
        >
          Quyền lợi
        </a>
        <a style={{ marginTop: 12, fontSize: 14 }}>
          - Lương thưởng hấp dẫn
          <br />
          - Môi trường làm việc chuyên nghiệp
          <br />- Cơ hội thăng tiến
        </a>
        <a
          style={{
            marginTop: 12,
            fontSize: 14,
            fontWeight: 'bold',
          }}
        >
          Địa điểm làm việc
        </a>
        <a style={{ marginTop: 12, fontSize: 14 }}>
          - 123 Lê Lợi, Quận 1, TP.HCM
        </a>
      </div>
    </div>
  );
}

function JobBasicInfoItem({ type }: { type: number }) {
  let title = '';
  let value = '';
  let icon = null;

  switch (type) {
    case 1:
      title = 'Mức lương';
      value = '10 - 13 triệu';
      icon = <FaMoneyBillWave style={{ color: 'white' }} />;
      break;
    case 2:
      title = 'Địa điểm';
      value = 'TP.HCM';
      icon = <FaMapLocation style={{ color: 'white' }} />;
      break;
    case 3:
      title = 'Kinh nghiệm';
      value = 'Không yêu cầu';
      icon = <FaClock style={{ color: 'white' }} />;
      break;
    default:
      break;
  }
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
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
        {icon}
      </div>
      <div style={Styles.jobBasicInfoItem}>
        <a>{title}</a>
        <a style={{ fontWeight: 'bold' }}>{value}</a>
      </div>
    </div>
  );
}
