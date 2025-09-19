import Link from "next/link";
import { RotateCw, Home } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-md w-full mx-auto text-center p-8">
        <div className="mb-8">
          <RotateCw className="h-20 w-20 text-indigo-600 dark:text-indigo-400 mx-auto mb-4 animate-spin" />
          <h1 className="text-6xl font-bold text-gray-900 dark:text-white mb-2">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-gray-700 dark:text-gray-300 mb-4">
            Página no encontrada
          </h2>
          <p className="text-gray-600 dark:text-gray-400 mb-8">
            La página que buscas no existe o ha sido movida. Regresa al inicio
            para continuar rotando matrices.
          </p>
        </div>

        <Button asChild size="lg" className="w-full">
          <Link href="/" className="flex items-center justify-center gap-2">
            <Home className="h-5 w-5" />
            Volver al inicio
          </Link>
        </Button>
      </div>
    </div>
  );
}
