import React from 'react';

import DashboardLayout from 'components/layout/dashboardLayout';

export default function Custom404() {
  return <h1>Page Not Found :(</h1>;
}

Custom404.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;
