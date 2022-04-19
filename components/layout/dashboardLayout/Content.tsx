import React from 'react';
import styled from 'styled-components';

export default function Content({ children }: any) {
  return <MainContainer>{children}</MainContainer>;
}

const MainContainer = styled.div`
  background: #f1f2f6;
  padding: 2rem;
  min-height: 100vh;
  height: 100%;

  @media (min-width: 769px) {
    margin-left: 280px;
  }

  @media (max-width: 768px) {
    margin-top: 3rem;
  }
`;
