import {
  rotateMatrixClockwise,
  rotateMatrixCounterclockwise,
  rotateMatrix,
  createEmptyMatrix
} from '../matrix-utils';
import { RotationDirection } from '@/app/(not-auth)/page';

describe('Matrix Utilities', () => {
  describe('createEmptyMatrix', () => {
    it('should create a matrix with the correct size', () => {
      const size = 3;
      const matrix = createEmptyMatrix(size);

      expect(matrix).toHaveLength(size);
      expect(matrix[0]).toHaveLength(size);
      expect(matrix.every(row => row.length === size)).toBe(true);
    });

    it('should create a matrix filled with zeros', () => {
      const matrix = createEmptyMatrix(2);

      expect(matrix).toEqual([
        [0, 0],
        [0, 0]
      ]);
    });

    it('should throw error for size <= 0', () => {
      expect(() => createEmptyMatrix(0)).toThrow('Matrix size must be greater than 0');
      expect(() => createEmptyMatrix(-1)).toThrow('Matrix size must be greater than 0');
    });

    it('should handle size 1', () => {
      const matrix = createEmptyMatrix(1);
      expect(matrix).toEqual([[0]]);
    });
  });

  describe('rotateMatrixClockwise', () => {
    it('should rotate 2x2 matrix clockwise correctly', () => {
      const input = [
        [1, 2],
        [3, 4]
      ];
      const expected = [
        [3, 1],
        [4, 2]
      ];

      expect(rotateMatrixClockwise(input)).toEqual(expected);
    });

    it('should rotate 3x3 matrix clockwise correctly', () => {
      const input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      const expected = [
        [7, 4, 1],
        [8, 5, 2],
        [9, 6, 3]
      ];

      expect(rotateMatrixClockwise(input)).toEqual(expected);
    });

    it('should handle 1x1 matrix', () => {
      const input = [[1]];
      const expected = [[1]];

      expect(rotateMatrixClockwise(input)).toEqual(expected);
    });
  });

  describe('rotateMatrixCounterclockwise', () => {
    it('should rotate 2x2 matrix counterclockwise correctly', () => {
      const input = [
        [1, 2],
        [3, 4]
      ];
      const expected = [
        [2, 4],
        [1, 3]
      ];

      expect(rotateMatrixCounterclockwise(input)).toEqual(expected);
    });

    it('should rotate 3x3 matrix counterclockwise correctly', () => {
      const input = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];
      const expected = [
        [3, 6, 9],
        [2, 5, 8],
        [1, 4, 7]
      ];

      expect(rotateMatrixCounterclockwise(input)).toEqual(expected);
    });

    it('should handle 1x1 matrix', () => {
      const input = [[1]];
      const expected = [[1]];

      expect(rotateMatrixCounterclockwise(input)).toEqual(expected);
    });
  });

  describe('rotateMatrix', () => {
    const testMatrix = [
      [1, 2],
      [3, 4]
    ];

    it('should rotate clockwise when direction is "clockwise"', () => {
      const result = rotateMatrix(testMatrix, 'clockwise' as RotationDirection);
      const expected = [
        [3, 1],
        [4, 2]
      ];

      expect(result).toEqual(expected);
    });

    it('should rotate counterclockwise when direction is "counterclockwise"', () => {
      const result = rotateMatrix(testMatrix, 'counterclockwise' as RotationDirection);
      const expected = [
        [2, 4],
        [1, 3]
      ];

      expect(result).toEqual(expected);
    });
  });

  describe('Matrix rotation consistency', () => {
    it('should return to original after 4 clockwise rotations', () => {
      const original = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];

      let result = original;
      for (let i = 0; i < 4; i++) {
        result = rotateMatrixClockwise(result);
      }

      expect(result).toEqual(original);
    });

    it('should return to original after 4 counterclockwise rotations', () => {
      const original = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];

      let result = original;
      for (let i = 0; i < 4; i++) {
        result = rotateMatrixCounterclockwise(result);
      }

      expect(result).toEqual(original);
    });

    it('clockwise + counterclockwise should return to original', () => {
      const original = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];

      const clockwise = rotateMatrixClockwise(original);
      const backToOriginal = rotateMatrixCounterclockwise(clockwise);

      expect(backToOriginal).toEqual(original);
    });
  });
});