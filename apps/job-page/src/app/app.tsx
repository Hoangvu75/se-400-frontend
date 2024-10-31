// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CommonButton, InputField, NavBar } from '@react-monorepo/components';
import * as Styles from './styles';
import JobCategoryPanel from './components/job-category-panel';

export function JobPage() {
  return (
    <div style={Styles.pageStyles}>
      <NavBar />
      <div style={{
        display: 'flex',
        flexDirection: 'row',
        padding: '0 400px',
        marginTop: '50px',
      }}>
        <InputField style={{
          borderRadius: '20px',
        }}
        placeholder={'Tìm kiếm công việc mong muốn'}/>
        <CommonButton
          style={{
            width: '200px',
            marginLeft: '10px',
          }}
        >Tìm kiếm</CommonButton>
      </div>
      <JobCategoryPanel />
      <div style={{height: '1000px'}}/>
    </div>
  );
}

export default JobPage;
