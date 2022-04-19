import React from 'react';

import Sidebar from 'components/layout/dashboardLayout/Sidebar';
import Content from 'components/layout/dashboardLayout/Content';
import Topbar from 'components/layout/dashboardLayout/TopbarMobile';

export default function DashboardLayout({ children }: any) {
  return (
    <>
      <Topbar />
      <Sidebar />
      <Content>{children}</Content>
    </>
  );
}
