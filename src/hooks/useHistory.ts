import { useState, useCallback } from 'react';

// Define types for history state here
type HistoryState<T> = T[];

const useHistory = <T>(initialState: T) => {
  // Candidate will implement history logic here
  const [state, setState] = useState<T>(initialState);
  const undo = useCallback(() => {}, []);
  const redo = useCallback(() => {}, []);
  const canUndo = false;
  const canRedo = false;

  return {
    state,
    setState: (newState: T) => setState(newState),
    undo,
    redo,
    canUndo,
    canRedo,
  };
};

export default useHistory;
