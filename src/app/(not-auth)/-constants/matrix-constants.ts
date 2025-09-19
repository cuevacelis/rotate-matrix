export const MATRIX_SIZE = {
  MIN: 2,
  MAX: 10,
  DEFAULT: 3,
} as const;

export const MATRIX_ROTATION_DIRECTION = {
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise",
  DEFAULT: "clockwise",
} as const;

export const MATRIX_QUERY_PARAMS = {
  SIZE: "size",
  DIRECTION: "direction",
} as const;