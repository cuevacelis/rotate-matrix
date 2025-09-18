"use client";

import React from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RotationDirection } from '@/lib/utils/matrix-utils';

interface MatrixFilterProps {
  size: number;
  direction: RotationDirection;
  onSizeChange: (size: number) => void;
  onDirectionChange: (direction: RotationDirection) => void;
}

export function MatrixFilter({ size, direction, onSizeChange, onDirectionChange }: MatrixFilterProps) {
  return (
    <div className="space-y-4 p-4 border rounded-lg bg-card">
      <h3 className="text-lg font-semibold">Configuración de la Matriz</h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="matrix-size">Tamaño de la Matriz (NxN)</Label>
          <Input
            id="matrix-size"
            type="number"
            min="2"
            max="10"
            value={size}
            onChange={(e) => onSizeChange(parseInt(e.target.value) || 0)}
            className="w-full"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="rotation-direction">Dirección de Rotación</Label>
          <Select value={direction} onValueChange={(value: RotationDirection) => onDirectionChange(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Selecciona la dirección" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="clockwise">Horaria</SelectItem>
              <SelectItem value="counterclockwise">Antihoraria</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}