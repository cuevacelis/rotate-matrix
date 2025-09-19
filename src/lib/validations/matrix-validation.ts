import { z } from 'zod';

export const matrixConfigSchema = z.object({
  size: z.number()
    .min(2, 'El tamaño debe ser entre 2 y 10')
    .max(10, 'El tamaño debe ser entre 2 y 10')
    .int('El tamaño debe ser un número entero'),
  direction: z.enum(['clockwise', 'counterclockwise'], {
    message: 'Debe seleccionar una dirección de rotación válida (horaria o antihoraria)'
  }),
});

export const matrixSchema = z.array(
  z.array(z.number().min(-999).max(999))
).min(2, 'La matriz debe tener al menos 2x2')
.max(10, 'La matriz no puede ser mayor a 10x10')
.refine((matrix) => {
  if (matrix.length === 0) return false;
  const size = matrix.length;
  return matrix.every(row => row.length === size);
}, {
  message: 'La matriz debe ser cuadrada (NxN)'
});

export type MatrixConfig = z.infer<typeof matrixConfigSchema>;
export type MatrixData = z.infer<typeof matrixSchema>;