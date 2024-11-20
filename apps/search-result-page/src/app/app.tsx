// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';
import { CommonButton, Footer, InputField, NavBar } from '@react-monorepo/components';
import * as Styles from './styles';
import JobCategoryPanel from './components/job-category-panel';
import { RecommendJob } from './components/recommend-job';
import { RecommendCompany } from './components/recommend-company';
import { TopJobField } from './components/top-job-field';
import { SearchResultInfo } from './components/search-result-info';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useEffect } from'react';
import React from 'react';

import { Route, Routes, Link } from 'react-router-dom';

export function SearchResultPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  // const location = useLocation();
  // const queryParams = new URLSearchParams(location.search);
  // const searchResult = queryParams.get('query');

  const [searchResults, setSearchResults] = useState([]);
  const location = useLocation(); // Lấy thông tin location từ URL

  const handleSearchTermChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  const handleSearchSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    navigate(`/search-results?query=${encodeURIComponent(searchTerm)}`);
  };

  const getQueryParams = () => {
    const params = new URLSearchParams(location.search);
    return params.get('query');
  };

  const query = getQueryParams();

  useEffect(() => {
    const query = getQueryParams();  // Lấy query từ URL
    if (query) {
      // Giả sử bạn có một hàm tìm kiếm để lấy dữ liệu từ API hoặc từ state
      // Call API hoặc xử lý tìm kiếm với `query` ở đây
      console.log("Searching for:", query);
      // Ví dụ gán kết quả tìm kiếm vào state
      setSearchResults([/* danh sách kết quả tìm kiếm */]);
    }
  }, [location]); // Chạy lại khi URL thay đổi

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
      <SearchResultInfo searchTerm={query || ''} />
      {/* <RecommendJob /> */}
      <RecommendCompany />
      <TopJobField /> 
      <Footer />
    </div>
  );
}

export default SearchResultPage;
