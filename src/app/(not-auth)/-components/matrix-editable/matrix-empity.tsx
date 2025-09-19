import { MATRIX_SIZE } from "@/app/(not-auth)/-constants/matrix-constants";

interface IMatrixEmpity {
  currentSize?: number;
}
export default function MatrixEmpity(props: IMatrixEmpity) {
  return (
    <div className="text-center p-8 border rounded-lg bg-muted/50">
      <p className="text-muted-foreground">
        {props.currentSize && props.currentSize > 0
          ? `El tamaño ${props.currentSize} no es válido. Debe estar entre ${MATRIX_SIZE.MIN} y ${MATRIX_SIZE.MAX}.`
          : `Introduce un tamaño válido para la matriz (${MATRIX_SIZE.MIN}-${MATRIX_SIZE.MAX})`}
      </p>
    </div>
  );
}
