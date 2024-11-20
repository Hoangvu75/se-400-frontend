import React from 'react';
import { FilterBar } from './filter-bar';
import JobGrid from './job-grid';
import { Link } from 'react-router-dom';

interface SearchResultInfoProps {
    searchTerm: string;
  }
export const SearchResultInfo: React.FC<SearchResultInfoProps> = ({ searchTerm }) => {
    return (
        <div style={{
            margin: '100px 250px 0px 250px',
        }}>
            <p style={{
                fontSize: '20px',
                fontWeight: 'bold',
            }}>Kết quả tìm kiếm việc làm {searchTerm}
            </p>

            <div style={{ display: 'flex' }}>
                <Link
                    to="/"
                    style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '100px',
                        textDecoration: 'none', 
                        marginRight: '10px' 
                    }}
                    onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.textDecoration = 'underline';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.textDecoration = 'none';
                      }}
                >
                    Trang chủ
                </Link>
                <p style={{ margin: 0 }}>➤</p>
                <Link
                    to="/"
                    style={{
                        fontSize: '20px',
                        fontWeight: 'bold',
                        color: 'white',
                        marginBottom: '100px',
                        textDecoration: 'none', 
                        marginLeft: '10px', 
                        marginRight: '10px'
                    }}
                    onMouseEnter={(e) => {
                        (e.target as HTMLElement).style.textDecoration = 'underline';
                      }}
                      onMouseLeave={(e) => {
                        (e.target as HTMLElement).style.textDecoration = 'none';
                      }}
                >
                    Tìm kiếm 
                </Link>
            </div>

            <JobGrid category={searchTerm}/>
        </div>
    );
}
