"use client";

import React from "react";
import InputSize from "./input-size";
import SelectOrientation from "./select-orientation";
import { RotationDirection } from "../../page";

interface MatrixFilterProps {
  size: number;
  direction: RotationDirection;
  onSizeChange: (size: number) => void;
  onDirectionChange: (direction: RotationDirection) => void;
}

export function MatrixFilter({
  size,
  direction,
  onSizeChange,
  onDirectionChange,
}: MatrixFilterProps) {
  return (
    <section className="space-y-4 p-4 border rounded-lg bg-card">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <InputSize size={size} onSizeChange={onSizeChange} />
        </div>

        <div className="space-y-2">
          <SelectOrientation
            direction={direction}
            onDirectionChange={onDirectionChange}
          />
        </div>
      </div>
    </section>
  );
}
