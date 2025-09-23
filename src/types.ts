// Define common types for the application here

export type ShapeType = 'square' | 'circle';

export interface Shape {
  id: string;
  type: ShapeType;
  x: number;
  y: number;
  color: string;
  size: number;
}

export type CanvasState = Shape[];
