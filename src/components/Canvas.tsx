import React, { useCallback } from 'react';
import useHistory from '../hooks/useHistory';


const generateId = () => Math.random().toString(36).substr(2, 9);

const Canvas: React.FC = () => {
  const { state: shapes, setState: setShapes, undo, redo, canUndo, canRedo } = useHistory<CanvasState>([]);

  const handleCanvasClick = useCallback((event: React.MouseEvent<HTMLDivElement>) => {
  }, [])
 
  const handleUndo = useCallback(() => {
  }, []);

  const handleRedo = useCallback(() => {
  }, []);

  return (
    <div>
      <h1>Canvas Editor (Boilerplate)</h1>
      {/* Candidate will implement canvas logic here */}
    </div>
  );
};

export default Canvas;
