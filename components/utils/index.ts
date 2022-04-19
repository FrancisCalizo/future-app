export const getPathName = (path: string, startPath: string) => {
  return path.split(startPath)[1];
};

/**
 * Used exclusively in Sidebar and SidebarMobile files to extract exercise info via the URL path
 *
 * @param path
 * @param exercises
 * @param setSelectedExercise
 */
export const handleGetExerciseInformation = (path: string, exercises: any, setSelectedExercise: any) => {
  if (path) {
    const exercise = exercises.find((ex: any) => ex.id === path);

    setSelectedExercise(exercise);
  }
};
