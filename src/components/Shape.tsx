import React from 'react';
import { ShapeType } from '../solutions/scenario2/types';

interface ShapeProps {
    shape: ShapeType;
}

const Shape: React.FC<ShapeProps> = ({ /* props */ }) => {
  
  return (
    <div style={{ border: '1px dashed gray', padding: '10px' }}>
      Shape Placeholder
      {/* Candidate will implement shape rendering here */}
    </div>
  );
};

export default Shape;
