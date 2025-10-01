"use client";

import React, { useState, useCallback } from "react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { MatrixFilter } from "./matrix-filter";
import { Matrix } from "./matrix-editable/matrix";
import { MatrixResult } from "./matrix-result";
import { Button } from "@/components/ui/button";
import { ErrorDialog } from "./matrix-editable/error-dialog";
import { rotateMatrix, createEmptyMatrix } from "@/lib/utils/matrix-utils";
import {
  matrixConfigSchema,
  matrixSchema,
} from "@/lib/validations/matrix-validation";
import { RotateCw } from "lucide-react";
import { RotationDirection } from "../page";
import { useQueryString } from "@/hooks/use-query-string";
import MatrixEmpity from "./matrix-editable/matrix-empity";
import {
  MATRIX_SIZE,
  MATRIX_QUERY_PARAMS,
} from "@/app/(not-auth)/-constants/matrix-constants";

export function MatrixContainer() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const { createQueryString } = useQueryString();

  const [size, setSize] = useState<number>(
    parseInt(
      searchParams.get(MATRIX_QUERY_PARAMS.SIZE) ||
        MATRIX_SIZE.DEFAULT.toString()
    )
  );
  const [direction, setDirection] = useState<RotationDirection>(
    (searchParams.get(MATRIX_QUERY_PARAMS.DIRECTION) ||
      "clockwise") as RotationDirection
  );

  const [matrix, setMatrix] = useState<number[][]>(createEmptyMatrix(size));
  const [originalMatrix, setOriginalMatrix] = useState<number[][]>([]);
  const [resultMatrix, setResultMatrix] = useState<number[][]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showErrorDialog, setShowErrorDialog] = useState<boolean>(false);

  const handleSizeChange = useCallback(
    (newSize: number) => {
      setSize(newSize);
      setMatrix(createEmptyMatrix(newSize));
      setShowResult(false);
      const newUrl =
        pathname +
        "?" +
        createQueryString(MATRIX_QUERY_PARAMS.SIZE, newSize.toString());
      router.push(newUrl);
    },
    [pathname, router, createQueryString]
  );

  const handleDirectionChange = useCallback(
    (newDirection: RotationDirection) => {
      setDirection(newDirection);
      const newUrl =
        pathname +
        "?" +
        createQueryString(MATRIX_QUERY_PARAMS.DIRECTION, newDirection);
      router.push(newUrl);
    },
    [pathname, router, createQueryString]
  );

  const handleMatrixChange = useCallback((newMatrix: number[][]) => {
    setMatrix(newMatrix);
  }, []);

  const handleRotateMatrix = () => {
    try {
      const configValidation = matrixConfigSchema.safeParse({
        size,
        direction,
      });
      if (!configValidation.success) {
        const errorMessage = configValidation.error.issues
          .map((issue) => issue.message)
          .join(", ");
        setError(errorMessage);
        setShowErrorDialog(true);
        return;
      }

      const matrixValidation = matrixSchema.safeParse(matrix);
      if (!matrixValidation.success) {
        setError(
          "La matriz contiene valores inválidos. Asegúrese de que todos los campos estén llenos con números válidos."
        );
        setShowErrorDialog(true);
        return;
      }

      const rotatedMatrix = rotateMatrix(matrix, direction);
      setOriginalMatrix([...matrix.map((row) => [...row])]);
      setResultMatrix(rotatedMatrix);
      setShowResult(true);
      setError("");
    } catch {
      setError("Ocurrió un error inesperado durante la rotación.");
      setShowErrorDialog(true);
    }
  };

  const handleCloseErrorDialog = () => {
    setShowErrorDialog(false);
    setError("");
  };

  return (
    <section className="w-full max-w-6xl mx-auto space-y-8 p-4">
      <MatrixFilter
        size={size}
        direction={direction}
        onSizeChange={handleSizeChange}
        onDirectionChange={handleDirectionChange}
      />

      <div className="space-y-6">
        {size >= MATRIX_SIZE.MIN && size <= MATRIX_SIZE.MAX ? (
          <Matrix
            size={size}
            matrix={matrix}
            onMatrixChange={handleMatrixChange}
          />
        ) : (
          <MatrixEmpity currentSize={size} />
        )}

        <div className="flex justify-center">
          <Button
            onClick={handleRotateMatrix}
            size="lg"
            className="px-8 py-3 text-base font-semibold"
          >
            <RotateCw className="mr-2" />
            Rotar Matriz
          </Button>
        </div>
      </div>

      {showResult && (
        <MatrixResult
          originalMatrix={originalMatrix}
          resultMatrix={resultMatrix}
          size={size}
          direction={direction}
        />
      )}

      <ErrorDialog
        open={showErrorDialog}
        onOpenChange={setShowErrorDialog}
        error={error}
        onClose={handleCloseErrorDialog}
      />
    </section>
  );
}
