import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import _isEmpty from 'lodash/isEmpty';

import { _AppContext } from 'components/AppContext';
import DashboardLayout from 'components/layout/dashboardLayout';
import Button from 'components/Button';

export default function ExercisePage() {
  const { selectedExercise } = useContext(_AppContext);

  const [isMoreInfoShowing, setIsMoreInfoShowing] = useState(false);

  return (
    <MainContainer>
      <h2 className="title">{selectedExercise?.name}</h2>

      <p className="description">{selectedExercise.description}</p>

      <div className="video-container">
        <StyledVideo width={600} height={500} key={selectedExercise?.video?.url} controls>
          <source src={selectedExercise?.video?.url} />
        </StyledVideo>
      </div>

      <div className="button-container">
        <Button onClick={() => setIsMoreInfoShowing(!isMoreInfoShowing)}>
          {isMoreInfoShowing ? 'Hide More Info' : 'Show More Info'}
        </Button>
      </div>

      {isMoreInfoShowing && (
        <MoreInfoContainer>
          <div className="more-info-subcontainer">
            <label className="label">Muscle Groups Activated</label>
            <p className="text">{selectedExercise?.muscle_groups || 'N/A'}</p>
          </div>

          <div className="more-info-subcontainer">
            <label className="label">Required Equipment</label>
            <p className="text">{selectedExercise?.equipment_required || 'N/A'}</p>
          </div>

          <div className="more-info-subcontainer">
            <label className="label">Alternating Movement?</label>
            <p className="text">{selectedExercise?.equipment_required ? 'Yes' : 'No'}</p>
          </div>
          <div className="more-info-subcontainer">
            <label className="label">Movement Patterns</label>
            <p className="text">{selectedExercise?.movement_patterns ? 'Yes' : 'No'}</p>
          </div>
        </MoreInfoContainer>
      )}
    </MainContainer>
  );
}

ExercisePage.getLayout = (page: any) => <DashboardLayout>{page}</DashboardLayout>;

const MainContainer = styled.div`
  .title {
    font-size: 1.75rem;
    margin: 1rem 0;
  }

  .video-container {
    display: flex;
    justify-content: center;
    margin: 2rem;
  }

  .button-container {
    display: flex;
    justify-content: center;
  }
`;

const StyledVideo = styled.video`
  width: 100% !important;
  height: auto !important;
  max-height: 600px;
  max-width: 500px;
`;

const MoreInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 2rem 0;

  .more-info-subcontainer {
    margin: 1rem;
    text-align: center;
  }

  .label {
    display: block;
    font-size: 1.25rem;
    font-weight: bold;
    margin-bottom: 0.75rem;
  }
`;
