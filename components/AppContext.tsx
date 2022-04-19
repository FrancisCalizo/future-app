import React, { createContext, useState } from 'react';
import { useQuery } from 'react-query';
import axios from 'axios';

export const _AppContext = createContext<any>(null);

interface AppContextProps {
  children: React.ReactNode;
}

export default function AppContext({ children }: AppContextProps) {
  const { isLoading, data: exercises } = useQuery<any>(['exercises'], async () => axios.get('/api/exercises'), {
    refetchOnWindowFocus: false,
  });

  const [selectedExercise, setSelectedExercise] = useState({});

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <_AppContext.Provider value={{ exercises, selectedExercise, setSelectedExercise }}>{children}</_AppContext.Provider>
  );
}
