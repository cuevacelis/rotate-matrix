import { z } from 'zod';

export const matrixConfigSchema = z.object({
  size: z.number()
    .min(2, 'El tamaño mínimo de la matriz es 2x2')
    .max(10, 'El tamaño máximo de la matriz es 10x10')
    .int('El tamaño debe ser un número entero'),
  direction: z.enum(['clockwise', 'counterclockwise'], {
    message: 'Debe seleccionar una dirección de rotación válida (horaria o antihoraria)'
  }),
});

export const matrixSchema = z.array(
  z.array(z.number().int().min(0).max(999))
).refine((matrix) => {
  if (matrix.length === 0) return false;
  const size = matrix.length;
  return matrix.every(row => row.length === size);
}, {
  message: 'La matriz debe ser cuadrada (NxN)'
});

export type MatrixConfig = z.infer<typeof matrixConfigSchema>;
export type MatrixData = z.infer<typeof matrixSchema>;