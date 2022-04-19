import DashboardLayout from 'components/layout/dashboardLayout';
import styled from 'styled-components';

export default function Home() {
  return (
    <MainContainer>
      <h1>Welcome!</h1>

      <p>Please click on an exercise from the left sidebar.</p>

      <p>Additionally, you may use the search bar to filter by exercise name.</p>
    </MainContainer>
  );
}

Home.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

const MainContainer = styled.div`
  h1 {
    font-size: 3rem;
  }

  p {
    font-size: 1.25rem;
  }
`;
