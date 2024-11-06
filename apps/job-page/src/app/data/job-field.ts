import { Job0, Job1, Job2, Job3, Job4 } from '@react-monorepo/asset-lib';

export class JobField {
  id: number;
  title: string;
  numberOfJobs: number;
  imageUrl: string;

  constructor(
    id: number,
    title: string,
    numberOfJobs: number,
    imageUrl: string
  ) {
    this.id = id;
    this.title = title;
    this.numberOfJobs = numberOfJobs;
    this.imageUrl = imageUrl;
  }
}

export const jobField_0 = new JobField(0, 'Kinh doanh - Bán hàng', 10848, Job0);
export const jobField_1 = new JobField(1, 'Marketing - PR - Quảng cáo', 5795, Job1);
export const jobField_2 = new JobField(2, 'Dịch vụ khách hàng - vận hành', 2158, Job2);
export const jobField_3 = new JobField(3, 'Nhân sự - Hành chính - Pháp chế', 3368, Job3);
export const jobField_4 = new JobField(4, 'Tài chính - Ngân hàng - Bảo hiểm', 1120, Job4);
export const jobFields = new Array<JobField>();
for (let i = 0; i < 10; i++) {
  jobFields.push(jobField_0);
  jobFields.push(jobField_1);
  jobFields.push(jobField_2);
  jobFields.push(jobField_3);
  jobFields.push(jobField_4);
}
