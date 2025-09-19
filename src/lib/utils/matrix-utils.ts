import { RotationDirection } from "@/app/(not-auth)/page";

export function rotateMatrixClockwise(matrix: number[][]): number[][] {
  const n = matrix.length;
  const result: number[][] = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[j][n - 1 - i] = matrix[i][j];
    }
  }

  return result;
}

export function rotateMatrixCounterclockwise(matrix: number[][]): number[][] {
  const n = matrix.length;
  const result: number[][] = Array(n)
    .fill(null)
    .map(() => Array(n).fill(0));

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
      result[n - 1 - j][i] = matrix[i][j];
    }
  }

  return result;
}

export function rotateMatrix(
  matrix: number[][],
  direction: RotationDirection
): number[][] {
  if (direction === "clockwise") {
    return rotateMatrixClockwise(matrix);
  } else {
    return rotateMatrixCounterclockwise(matrix);
  }
}

export function createEmptyMatrix(size: number): number[][] {
  if (size <= 0) {
    throw new Error("Matrix size must be greater than 0");
  }

  return Array(size)
    .fill(null)
    .map(() => Array(size).fill(0));
}
