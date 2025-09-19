import Link from "next/link";
import { RotateCw } from "lucide-react";
import { MatrixContainer } from "./-components/matrix-container";

export type RotationDirection = "clockwise" | "counterclockwise";

export default function HomePage() {
  return (
    <section className="text-center mb-12">
      <div className="flex items-center justify-center gap-3 mb-4">
        <RotateCw className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
          Rotador de Matrices
        </h1>
      </div>

      <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
        Herramienta interactiva para rotar matrices NxN en sentido horario o
        antihorario. Simplemente configura el tamaño, introduce los valores y
        observa la transformación en tiempo real.
      </p>

      <div className="mt-8 flex justify-center">
        <Link
          href="/about"
          className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-800 dark:hover:text-indigo-300 font-medium underline-offset-4 hover:underline"
        >
          Conocer más sobre el proyecto →
        </Link>
      </div>

      <MatrixContainer />
    </section>
  );
}
