// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { CommonButton, InputField, NavBar } from '@react-monorepo/components';
import * as Styles from './styles';
import JobCategoryPanel from './components/job-category-panel';
import { RecommendJob } from './components/recommend-job';

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
      <div style={{height: '1000px'}}/>
    </div>
  );
}

export default JobPage;
