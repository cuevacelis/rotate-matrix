"use client";

import React from 'react';
import { Matrix } from './matrix';
import { RotationDirection } from '@/lib/utils/matrix-utils';

interface MatrixResultProps {
  originalMatrix: number[][];
  resultMatrix: number[][];
  size: number;
  direction: RotationDirection;
}

export function MatrixResult({ originalMatrix, resultMatrix, size, direction }: MatrixResultProps) {
  const directionText = direction === 'clockwise' ? 'Horaria' : 'Antihoraria';

  return (
    <div className="space-y-6 p-4 border rounded-lg bg-card">
      <h3 className="text-lg font-semibold text-center">Resultado de la Rotación</h3>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="space-y-2">
          <Matrix
            size={size}
            matrix={originalMatrix}
            readonly={true}
            title="Matriz Original"
          />
        </div>

        <div className="space-y-2">
          <Matrix
            size={size}
            matrix={resultMatrix}
            readonly={true}
            title={`Rotación ${directionText}`}
          />
        </div>
      </div>
    </div>
  );
}