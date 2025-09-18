import Link from "next/link";
import {
  RotateCw,
  Github,
  Linkedin,
  ArrowLeft,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function About() {
  return (
    <section>
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <RotateCw className="h-10 w-10 text-indigo-600 dark:text-indigo-400" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white">
              Acerca del Proyecto
            </h1>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                ¿Qué es el Rotador de Matrices?
              </h2>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                Una aplicación web interactiva desarrollada para demostrar las
                operaciones de rotación en matrices cuadradas (NxN). Permite a
                los usuarios experimentar con rotaciones tanto en sentido
                horario como antihorario, proporcionando una visualización clara
                del proceso de transformación matemática.
              </p>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Características Principales
              </h2>
              <ul className="space-y-3 text-gray-600 dark:text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 mt-1">
                    •
                  </span>
                  Matrices configurables de 2x2 hasta 10x10
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 mt-1">
                    •
                  </span>
                  Rotación en sentido horario y antihorario
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 mt-1">
                    •
                  </span>
                  Visualización lado a lado del antes y después
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 mt-1">
                    •
                  </span>
                  Validación de datos con retroalimentación clara
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-indigo-600 dark:text-indigo-400 mt-1">
                    •
                  </span>
                  Interfaz responsive y accesible
                </li>
              </ul>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Tecnologías Utilizadas
              </h2>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Frontend
                  </div>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• Next.js 15</li>
                    <li>• React 19</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                  </ul>
                </div>
                <div className="space-y-2">
                  <div className="font-semibold text-gray-900 dark:text-white">
                    Librerías
                  </div>
                  <ul className="space-y-1 text-gray-600 dark:text-gray-300">
                    <li>• shadcn/ui</li>
                    <li>• Lucide React</li>
                    <li>• Zod</li>
                    <li>• Radix UI</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Ejemplo de Rotación
              </h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Matriz Original
                  </h3>
                  <div className="grid grid-cols-3 gap-1 w-fit">
                    {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 border border-gray-300 dark:border-gray-600 flex items-center justify-center text-sm font-semibold"
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                    Rotación Antihoraria
                  </h3>
                  <div className="grid grid-cols-3 gap-1 w-fit">
                    {[3, 6, 9, 2, 5, 8, 1, 4, 7].map((num, i) => (
                      <div
                        key={i}
                        className="w-8 h-8 border border-green-300 dark:border-green-600 bg-green-50 dark:bg-green-900/20 flex items-center justify-center text-sm font-semibold"
                      >
                        {num}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
                Conecta Conmigo
              </h2>
              <p className="text-gray-600 dark:text-gray-300 mb-6">
                Puedes encontrar más de mis proyectos y conectar conmigo a
                través de:
              </p>

              <div className="space-y-4">
                <a
                  href="https://github.com/tuusuario"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Github className="h-6 w-6" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      GitHub
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Ver código fuente y otros proyectos
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 ml-auto" />
                </a>

                <a
                  href="https://linkedin.com/in/tuperfil"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-lg border border-gray-200 dark:border-gray-600 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
                >
                  <Linkedin className="h-6 w-6" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">
                      LinkedIn
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-400">
                      Conectar profesionalmente
                    </div>
                  </div>
                  <ExternalLink className="h-4 w-4 ml-auto" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
