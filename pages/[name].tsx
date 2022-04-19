import React, { useContext } from 'react';
import styled from 'styled-components';
import _isEmpty from 'lodash/isEmpty';

import { _AppContext } from 'components/AppContext';
import DashboardLayout from 'components/layout/dashboardLayout';

export default function ExercisePage() {
  const { selectedExercise } = useContext(_AppContext);

  return (
    <MainContainer>
      <h2 className="title">{selectedExercise?.name}</h2>

      <p className="description">{selectedExercise.description}</p>

      <VideoContainer width={600} height={500} key={selectedExercise?.video?.url} controls>
        <source src={selectedExercise?.video?.url} />
      </VideoContainer>
    </MainContainer>
  );
}

ExercisePage.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

const MainContainer = styled.div``;

const VideoContainer = styled.video`
  max-height: 600px;
  max-width: 500px;
`;
