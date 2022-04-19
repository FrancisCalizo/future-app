// Delete this if not being used
import styles from '../styles/Home.module.css';

import DashboardLayout from 'components/layout/dashboardLayout';

export default function Home() {
  return (
    <div>
      <div>
        <h1>Welcome please search for an exercise from the right to display some data</h1>
      </div>
    </div>
  );
}

Home.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;
