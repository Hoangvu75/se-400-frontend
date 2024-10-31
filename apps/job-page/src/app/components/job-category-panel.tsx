import React, { useState } from 'react';
import { grey, lightGrey, primary } from '@react-monorepo/colors';
import { FindJob2 } from '@react-monorepo/asset-lib';

const categories_1 = [
  {
    name: 'Kinh doanh/Bán hàng',
    options: ['Nhân viên kinh doanh', 'Nhân viên bán hàng', 'Nhân viên tư vấn'],
  },
  {
    name: 'Marketing/PR/Quảng cáo',
    options: ['Telesales', 'Sales Admin', 'Tư vấn tuyển sinh'],
  },
  {
    name: 'Dịch vụ khách hàng/Vận hành',
    options: ['Sales Online', 'Sales Bán lẻ', 'Kinh doanh thực phẩm'],
  },
  {
    name: 'Nhân sự/Hành chính/Pháp chế',
    options: [
      'Nhân viên hành chính',
      'Nhân viên nhân sự',
      'Nhân viên tuyển dụng',
    ],
  },
  {
    name: 'Tài chính/Ngân hàng/Bảo hiểm',
    options: ['Nhân viên kế toán', 'Nhân viên tín dụng', 'Nhân viên thu ngân'],
  },
  {
    name: 'Công nghệ Thông tin',
    options: ['Lập trình viên', 'Kỹ sư phần mềm', 'Kỹ sư mạng'],
  },
];

const categories_2 = [
  {
    name: 'Bất động sản',
    options: [
      'Nhân viên kinh doanh BDS',
      'Nhân viên tư vấn BDS',
      'Chuyên viên BDS',
    ],
  },
  {
    name: 'Xây dựng',
    options: ['Kỹ sư xây dựng', 'Kỹ sư cầu đường', 'Kỹ sư cơ khí'],
  },
  {
    name: 'Kiến trúc/Nội thất',
    options: ['Kiến trúc sư', 'Thiết kế nội thất', 'Kiến trúc sư nội thất'],
  },
  {
    name: 'Vận tải/Logistics',
    options: [
      'Nhân viên vận tải',
      'Nhân viên logistics',
      'Nhân viên giao nhận',
    ],
  },
  {
    name: 'Hóa học/Sinh học',
    options: ['Kỹ sư hóa', 'Kỹ sư môi trường', 'Kỹ sư thực phẩm'],
  },
  {
    name: 'Môi trường/Xử lý chất thải',
    options: ['Kỹ sư môi trường', 'Kỹ sư xử lý chất thải', 'Kỹ sư nước'],
  },
];

const categories_3 = [
  {
    name: 'Nghệ thuật/Điện ảnh',
    options: ['Diễn viên', 'Biên kịch', 'Quay phim'],
  },
  {
    name: 'Thể thao/Yoga',
    options: [
      'Huấn luyện viên thể hình',
      'Giáo viên yoga',
      'Huấn luyện viên bóng đá',
    ],
  },
  {
    name: 'Giáo dục/Đào tạo',
    options: ['Giáo viên', 'Trợ giảng', 'Giáo viên mầm non'],
  },
  { name: 'Y tế/Chăm sóc sức khỏe', options: ['Bác sĩ', 'Y tá', 'Dược sĩ'] },
  { name: 'Thực phẩm/DV ăn uống', options: ['Đầu bếp', 'Phục vụ', 'Thu ngân'] },
  {
    name: 'Du lịch/Nhà hàng/Khách sạn',
    options: ['Lễ tân', 'Phục vụ', 'Bảo vệ'],
  },
];

const categories_4 = [
  {
    name: 'Thời trang/Trang sức',
    options: ['Nhân viên bán hàng', 'Nhân viên thu ngân', 'Nhân viên kho'],
  },
  {
    name: 'Mỹ phẩm/Làm đẹp',
    options: ['Nhân viên bán hàng', 'Nhân viên thu ngân', 'Nhân viên kho'],
  },
  {
    name: 'Nghệ thuật/Thiết kế',
    options: ['Nhân viên bán hàng', 'Nhân viên thu ngân', 'Nhân viên kho'],
  },
  {
    name: 'Tư vấn/Đào tạo',
    options: ['Nhân viên bán hàng', 'Nhân viên thu ngân', 'Nhân viên kho'],
  },
  {
    name: 'Sản xuất/Vận hành',
    options: ['Nhân viên bán hàng', 'Nhân viên thu ngân', 'Nhân viên kho'],
  },
  {
    name: 'Lao động phổ thông',
    options: ['Nhân viên bán hàng', 'Nhân viên thu ngân', 'Nhân viên kho'],
  },
];

const allCategories = [categories_1, categories_2, categories_3, categories_4];

const containerStyle = {
  display: 'flex',
  borderRadius: '8px',
  padding: '0 400px',
  marginTop: '10px',
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
  color: '#666',
  borderRadius: '8px',
  padding: '12px',
  height: '206px'
};

const menuItemStyle = {
  cursor: 'pointer',
  transition: 'color 0.3s',
};

const tagStyle = {
  display: 'inline-block',
  backgroundColor: '#ddd',
  color: '#666',
  borderRadius: '12px',
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
    <div style={containerStyle}>
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
            onMouseLeave={() => setActiveCategory(null)}
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
            <div>
              {allCategories[currentCategory - 1]
                .find((cat) => cat.name === activeCategory)
                ?.options.map((option, index) => (
                  <span key={index} style={tagStyle}>
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
