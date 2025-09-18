"use client";

import React, { useState, useCallback } from "react";
import { MatrixFilter } from "./matrix-filter";
import { Matrix } from "./matrix";
import { MatrixResult } from "./matrix-result";
import { Button } from "@/components/ui/button";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import {
  RotationDirection,
  rotateMatrix,
  createEmptyMatrix,
} from "@/lib/utils/matrix-utils";
import {
  matrixConfigSchema,
  matrixSchema,
} from "@/lib/validations/matrix-validation";
import { RotateCw } from "lucide-react";

interface MatrixRotateContainerProps {
  size: string;
  direction: RotationDirection;
}
export function MatrixRotateContainer(props: MatrixRotateContainerProps) {
  const [size, setSize] = useState<number>(parseInt(props.size));
  const [direction, setDirection] = useState<RotationDirection>(
    props.direction
  );
  const [matrix, setMatrix] = useState<number[][]>(createEmptyMatrix(size));
  const [originalMatrix, setOriginalMatrix] = useState<number[][]>([]);
  const [resultMatrix, setResultMatrix] = useState<number[][]>([]);
  const [showResult, setShowResult] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [showErrorDialog, setShowErrorDialog] = useState<boolean>(false);

  const handleSizeChange = useCallback((newSize: number) => {
    setSize(newSize);
    if (newSize >= 2 && newSize <= 10) {
      setMatrix(createEmptyMatrix(newSize));
    }
    setShowResult(false);
  }, []);

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
        onDirectionChange={setDirection}
      />

      <div className="space-y-6">
        {size >= 2 && size <= 10 ? (
          <Matrix
            size={size}
            matrix={matrix}
            onMatrixChange={handleMatrixChange}
          />
        ) : (
          <div className="text-center p-8 border rounded-lg bg-muted/50">
            <p className="text-muted-foreground">
              {size === 0 || isNaN(size)
                ? "Introduce un tamaño válido para la matriz (2-10)"
                : `El tamaño ${size} no es válido. Debe estar entre 2 y 10.`}
            </p>
          </div>
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

      <AlertDialog open={showErrorDialog} onOpenChange={setShowErrorDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Error de Validación</AlertDialogTitle>
            <AlertDialogDescription>{error}</AlertDialogDescription>
          </AlertDialogHeader>
          <div className="flex justify-end">
            <AlertDialogAction onClick={handleCloseErrorDialog}>
              Entendido
            </AlertDialogAction>
          </div>
        </AlertDialogContent>
      </AlertDialog>
    </section>
  );
}
