"use client";

import React from 'react';
import { Input } from '@/components/ui/input';

interface MatrixProps {
  size: number;
  matrix: number[][];
  onMatrixChange?: (matrix: number[][]) => void;
  readonly?: boolean;
  title?: string;
}

export function Matrix({ size, matrix, onMatrixChange, readonly = false, title }: MatrixProps) {
  const handleCellChange = (row: number, col: number, value: string) => {
    if (readonly || !onMatrixChange) return;

    const numValue = parseInt(value) || 0;
    const newMatrix = matrix.map((r, rowIndex) =>
      r.map((c, colIndex) => (rowIndex === row && colIndex === col ? numValue : c))
    );
    onMatrixChange(newMatrix);
  };

  const displayTitle = title || `Matriz ${size}x${size}`;

  return (
    <div className="space-y-4">
      <h3 className="text-lg font-semibold text-center">{displayTitle}</h3>
      <div
        className="grid gap-2 mx-auto w-fit"
        style={{
          gridTemplateColumns: `repeat(${size}, 1fr)`,
        }}
      >
        {matrix.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <Input
              key={`${rowIndex}-${colIndex}`}
              type="number"
              value={cell}
              onChange={(e) => handleCellChange(rowIndex, colIndex, e.target.value)}
              className="w-16 h-16 text-center font-semibold text-base"
              disabled={readonly}
              min="0"
              max="999"
            />
          ))
        )}
      </div>
    </div>
  );
}