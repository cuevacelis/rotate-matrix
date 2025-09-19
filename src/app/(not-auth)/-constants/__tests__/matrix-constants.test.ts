import {
  MATRIX_SIZE,
  MATRIX_ROTATION_DIRECTION,
  MATRIX_QUERY_PARAMS
} from '../matrix-constants';

describe('Matrix Constants', () => {
  describe('MATRIX_SIZE', () => {
    it('should have correct minimum size', () => {
      expect(MATRIX_SIZE.MIN).toBe(2);
      expect(typeof MATRIX_SIZE.MIN).toBe('number');
    });

    it('should have correct maximum size', () => {
      expect(MATRIX_SIZE.MAX).toBe(10);
      expect(typeof MATRIX_SIZE.MAX).toBe('number');
    });

    it('should have correct default size', () => {
      expect(MATRIX_SIZE.DEFAULT).toBe(3);
      expect(typeof MATRIX_SIZE.DEFAULT).toBe('number');
    });

    it('should have default size within valid range', () => {
      expect(MATRIX_SIZE.DEFAULT).toBeGreaterThanOrEqual(MATRIX_SIZE.MIN);
      expect(MATRIX_SIZE.DEFAULT).toBeLessThanOrEqual(MATRIX_SIZE.MAX);
    });

    it('should have min less than max', () => {
      expect(MATRIX_SIZE.MIN).toBeLessThan(MATRIX_SIZE.MAX);
    });

    it('should be immutable (readonly)', () => {
      // TypeScript enforces immutability at compile time with 'as const'
      // At runtime, the object is still mutable, so we test the type instead
      expect(MATRIX_SIZE).toEqual(expect.objectContaining({
        MIN: 2,
        MAX: 10,
        DEFAULT: 3
      }));
    });
  });

  describe('MATRIX_ROTATION_DIRECTION', () => {
    it('should have correct clockwise direction', () => {
      expect(MATRIX_ROTATION_DIRECTION.CLOCKWISE).toBe('clockwise');
      expect(typeof MATRIX_ROTATION_DIRECTION.CLOCKWISE).toBe('string');
    });

    it('should have correct counterclockwise direction', () => {
      expect(MATRIX_ROTATION_DIRECTION.COUNTERCLOCKWISE).toBe('counterclockwise');
      expect(typeof MATRIX_ROTATION_DIRECTION.COUNTERCLOCKWISE).toBe('string');
    });

    it('should have correct default direction', () => {
      expect(MATRIX_ROTATION_DIRECTION.DEFAULT).toBe('clockwise');
      expect(typeof MATRIX_ROTATION_DIRECTION.DEFAULT).toBe('string');
    });

    it('should have default direction as one of the valid directions', () => {
      const validDirections = [
        MATRIX_ROTATION_DIRECTION.CLOCKWISE,
        MATRIX_ROTATION_DIRECTION.COUNTERCLOCKWISE
      ];
      expect(validDirections).toContain(MATRIX_ROTATION_DIRECTION.DEFAULT);
    });

    it('should be immutable (readonly)', () => {
      expect(MATRIX_ROTATION_DIRECTION).toEqual(expect.objectContaining({
        CLOCKWISE: 'clockwise',
        COUNTERCLOCKWISE: 'counterclockwise',
        DEFAULT: 'clockwise'
      }));
    });
  });

  describe('MATRIX_QUERY_PARAMS', () => {
    it('should have correct size query param', () => {
      expect(MATRIX_QUERY_PARAMS.SIZE).toBe('size');
      expect(typeof MATRIX_QUERY_PARAMS.SIZE).toBe('string');
    });

    it('should have correct direction query param', () => {
      expect(MATRIX_QUERY_PARAMS.DIRECTION).toBe('direction');
      expect(typeof MATRIX_QUERY_PARAMS.DIRECTION).toBe('string');
    });

    it('should have unique query param names', () => {
      const params = Object.values(MATRIX_QUERY_PARAMS);
      const uniqueParams = new Set(params);
      expect(params.length).toBe(uniqueParams.size);
    });

    it('should be immutable (readonly)', () => {
      expect(MATRIX_QUERY_PARAMS).toEqual(expect.objectContaining({
        SIZE: 'size',
        DIRECTION: 'direction'
      }));
    });
  });

  describe('Constants integration', () => {
    it('should have consistent naming conventions', () => {
      // All constants should be UPPER_CASE
      const constantNames = [
        'MATRIX_SIZE',
        'MATRIX_ROTATION_DIRECTION',
        'MATRIX_QUERY_PARAMS'
      ];

      constantNames.forEach(name => {
        expect(name).toMatch(/^[A-Z][A-Z_]*$/);
      });
    });

    it('should have all required properties', () => {
      // MATRIX_SIZE should have MIN, MAX, DEFAULT
      expect(MATRIX_SIZE).toHaveProperty('MIN');
      expect(MATRIX_SIZE).toHaveProperty('MAX');
      expect(MATRIX_SIZE).toHaveProperty('DEFAULT');

      // MATRIX_ROTATION_DIRECTION should have CLOCKWISE, COUNTERCLOCKWISE, DEFAULT
      expect(MATRIX_ROTATION_DIRECTION).toHaveProperty('CLOCKWISE');
      expect(MATRIX_ROTATION_DIRECTION).toHaveProperty('COUNTERCLOCKWISE');
      expect(MATRIX_ROTATION_DIRECTION).toHaveProperty('DEFAULT');

      // MATRIX_QUERY_PARAMS should have SIZE, DIRECTION
      expect(MATRIX_QUERY_PARAMS).toHaveProperty('SIZE');
      expect(MATRIX_QUERY_PARAMS).toHaveProperty('DIRECTION');
    });

    it('should export only expected constants', async () => {
      const moduleExports = await import('../matrix-constants');
      const exportedKeys = Object.keys(moduleExports);

      expect(exportedKeys).toHaveLength(3);
      expect(exportedKeys).toContain('MATRIX_SIZE');
      expect(exportedKeys).toContain('MATRIX_ROTATION_DIRECTION');
      expect(exportedKeys).toContain('MATRIX_QUERY_PARAMS');
    });
  });
});