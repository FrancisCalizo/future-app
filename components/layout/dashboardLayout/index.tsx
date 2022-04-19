import React from 'react';

import Sidebar from 'components/layout/dashboardLayout/Sidebar';
import Content from 'components/layout/dashboardLayout/Content';

export default function DashboardLayout({ children }: any) {
  return (
    <>
      <Sidebar />
      <Content>{children}</Content>
    </>
  );
}
