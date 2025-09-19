"use client";

import { useEffect } from "react";
import Link from "next/link";
import { RotateCw, AlertTriangle, RefreshCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ error, reset }: ErrorPageProps) {
  useEffect(() => {
    console.error("Matrix application error:", error);
  }, [error]);

  return (
    <div className="min-h-[60vh] flex items-center justify-center">
      <div className="max-w-md w-full mx-auto text-center p-8">
        <div className="mb-8">
          <AlertTriangle className="size-8 mb-4 text-red-500 right-1/2 translate-x-4 mx-auto" />

          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Error en el rotador de matrices
          </h1>

          <p className="text-gray-600 dark:text-gray-400 mb-6">
            Ha ocurrido un error al procesar la matriz. Verifica tu
            configuración e intenta nuevamente.
          </p>

          {process.env.NODE_ENV === "development" && (
            <details className="text-left bg-red-50 dark:bg-red-900/20 p-4 rounded-lg mb-6">
              <summary className="cursor-pointer font-semibold text-red-700 dark:text-red-300 mb-2">
                Detalles del error (desarrollo)
              </summary>
              <pre className="text-sm text-red-600 dark:text-red-400 whitespace-pre-wrap break-words">
                {error.message}
              </pre>
              {error.digest && (
                <p className="text-xs text-red-500 dark:text-red-400 mt-2">
                  ID del error: {error.digest}
                </p>
              )}
            </details>
          )}
        </div>

        <div className="space-y-3">
          <Button onClick={reset} size="lg" className="w-full">
            <RefreshCw className="h-5 w-5 mr-2" />
            Reintentar operación
          </Button>

          <Button asChild variant="outline" size="lg" className="w-full">
            <Link href="/" className="flex items-center justify-center gap-2">
              <Home className="h-5 w-5" />
              Volver al inicio
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
