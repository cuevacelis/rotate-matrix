import { matrixConfigSchema, matrixSchema } from '../matrix-validation';

describe('Matrix Validations', () => {
  describe('matrixConfigSchema', () => {
    it('should validate valid configuration', () => {
      const validConfig = {
        size: 3,
        direction: 'clockwise' as const
      };

      const result = matrixConfigSchema.safeParse(validConfig);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validConfig);
      }
    });

    it('should validate counterclockwise direction', () => {
      const validConfig = {
        size: 5,
        direction: 'counterclockwise' as const
      };

      const result = matrixConfigSchema.safeParse(validConfig);
      expect(result.success).toBe(true);
    });

    it('should reject invalid size (too small)', () => {
      const invalidConfig = {
        size: 1,
        direction: 'clockwise' as const
      };

      const result = matrixConfigSchema.safeParse(invalidConfig);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues.some(issue =>
          issue.message.includes('El tamaño debe ser entre 2 y 10')
        )).toBe(true);
      }
    });

    it('should reject invalid size (too large)', () => {
      const invalidConfig = {
        size: 11,
        direction: 'clockwise' as const
      };

      const result = matrixConfigSchema.safeParse(invalidConfig);
      expect(result.success).toBe(false);
      if (!result.success) {
        expect(result.error.issues.some(issue =>
          issue.message.includes('El tamaño debe ser entre 2 y 10')
        )).toBe(true);
      }
    });

    it('should reject invalid direction', () => {
      const invalidConfig = {
        size: 3,
        direction: 'invalid' as any
      };

      const result = matrixConfigSchema.safeParse(invalidConfig);
      expect(result.success).toBe(false);
    });

    it('should reject missing size', () => {
      const invalidConfig = {
        direction: 'clockwise' as const
      };

      const result = matrixConfigSchema.safeParse(invalidConfig);
      expect(result.success).toBe(false);
    });

    it('should reject missing direction', () => {
      const invalidConfig = {
        size: 3
      };

      const result = matrixConfigSchema.safeParse(invalidConfig);
      expect(result.success).toBe(false);
    });

    it('should reject non-integer size', () => {
      const invalidConfig = {
        size: 3.5,
        direction: 'clockwise' as const
      };

      const result = matrixConfigSchema.safeParse(invalidConfig);
      expect(result.success).toBe(false);
    });
  });

  describe('matrixSchema', () => {
    it('should validate valid 2x2 matrix', () => {
      const validMatrix = [
        [1, 2],
        [3, 4]
      ];

      const result = matrixSchema.safeParse(validMatrix);
      expect(result.success).toBe(true);
      if (result.success) {
        expect(result.data).toEqual(validMatrix);
      }
    });

    it('should validate valid 3x3 matrix', () => {
      const validMatrix = [
        [1, 2, 3],
        [4, 5, 6],
        [7, 8, 9]
      ];

      const result = matrixSchema.safeParse(validMatrix);
      expect(result.success).toBe(true);
    });

    it('should validate matrix with decimal numbers', () => {
      const validMatrix = [
        [1.5, 2.7],
        [3.14, 4.0]
      ];

      const result = matrixSchema.safeParse(validMatrix);
      expect(result.success).toBe(true);
    });

    it('should validate matrix with negative numbers', () => {
      const validMatrix = [
        [-1, -2],
        [-3, -4]
      ];

      const result = matrixSchema.safeParse(validMatrix);
      expect(result.success).toBe(true);
    });

    it('should validate matrix with zeros', () => {
      const validMatrix = [
        [0, 0],
        [0, 0]
      ];

      const result = matrixSchema.safeParse(validMatrix);
      expect(result.success).toBe(true);
    });

    it('should reject non-square matrix (more columns)', () => {
      const invalidMatrix = [
        [1, 2, 3],
        [4, 5, 6]
      ];

      const result = matrixSchema.safeParse(invalidMatrix);
      expect(result.success).toBe(false);
    });

    it('should reject non-square matrix (more rows)', () => {
      const invalidMatrix = [
        [1, 2],
        [3, 4],
        [5, 6]
      ];

      const result = matrixSchema.safeParse(invalidMatrix);
      expect(result.success).toBe(false);
    });

    it('should reject matrix with inconsistent row lengths', () => {
      const invalidMatrix = [
        [1, 2, 3],
        [4, 5],
        [7, 8, 9]
      ];

      const result = matrixSchema.safeParse(invalidMatrix);
      expect(result.success).toBe(false);
    });

    it('should reject empty matrix', () => {
      const invalidMatrix: number[][] = [];

      const result = matrixSchema.safeParse(invalidMatrix);
      expect(result.success).toBe(false);
    });

    it('should reject matrix with empty rows', () => {
      const invalidMatrix = [[], []];

      const result = matrixSchema.safeParse(invalidMatrix);
      expect(result.success).toBe(false);
    });

    it('should reject matrix with non-numeric values', () => {
      const invalidMatrix = [
        [1, 'invalid'],
        [3, 4]
      ] as any;

      const result = matrixSchema.safeParse(invalidMatrix);
      expect(result.success).toBe(false);
    });

    it('should reject matrix with null values', () => {
      const invalidMatrix = [
        [1, null],
        [3, 4]
      ] as any;

      const result = matrixSchema.safeParse(invalidMatrix);
      expect(result.success).toBe(false);
    });

    it('should reject matrix with undefined values', () => {
      const invalidMatrix = [
        [1, undefined],
        [3, 4]
      ] as any;

      const result = matrixSchema.safeParse(invalidMatrix);
      expect(result.success).toBe(false);
    });

    it('should reject matrix larger than 10x10', () => {
      const largeMatrix = Array(11).fill(null).map(() => Array(11).fill(1));

      const result = matrixSchema.safeParse(largeMatrix);
      expect(result.success).toBe(false);
    });

    it('should reject 1x1 matrix (too small)', () => {
      const tinyMatrix = [[1]];

      const result = matrixSchema.safeParse(tinyMatrix);
      expect(result.success).toBe(false);
    });
  });
});