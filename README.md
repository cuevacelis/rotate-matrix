# 🔄 Rotate Matrix

Una aplicación web interactiva construida con **Next.js 15** y **TypeScript** que permite rotar matrices NxN en sentido horario o antihorario de manera visual y fácil de usar.

## 🎯 Demo
Demo pública: https://rotate-matrix-olive.vercel.app/

Configura el tamaño de la matriz, introduce los valores numéricos y observa cómo se transforma la matriz al rotarla. Los resultados se muestran lado a lado para comparar fácilmente. 

## ✨ Características

- 🔄 **Rotación de matrices** en tiempo real (horaria y antihoraria)
- 📐 **Matrices configurables** de 2x2 hasta 10x10
- 🎨 **Interfaz moderna** con Tailwind CSS y shadcn/ui
- 🔗 **URLs compartibles** con parámetros de consulta persistentes
- ✅ **Validación robusta** con Zod schemas
- 🧪 **Testing completo** con Jest y Testing Library
- 🌙 **Modo oscuro** con next-themes
- 📱 **Diseño responsivo** para todos los dispositivos
- ⚡ **Optimización** con Turbopack

## Requisitos

- Node.js (>=16)
- pnpm (recomendado) o npm/yarn

## Instalación

Clona el repositorio y instala dependencias:

```bash
git clone https://github.com/cuevacelis/rotate-matrix.git
cd rotate-matrix
pnpm install
```

Si usas `npm`:

```bash
npm install
```

## 🎮 Funcionalidades Principale

### Rotación de Matrices

- **Horaria (90°):** Rota la matriz 90 grados en sentido horario

- **Antihoraria (90°):** Rota la matriz 90 grados en sentido antihorario

### Configuración Flexible

- **Tamaño dinámico:** 2x2 hasta 10x10

- **Valores numéricos:** Enteros y decimales, positivos y negativos

- **Persistencia:** Los parámetros se guardan en la URL

### Validaciones

- **Zod schemas** para validación type-safe

- **Mensajes de error** claros y descriptivos

## 📝 Scripts Disponibles

````bash

pnpm dev             # Servidor de desarrollo con Turbopack```bash

pnpm build           # Build de producciónnpm run dev          # Servidor de desarrollo con Turbopack

pnpm start           # Servidor de producciónnpm run build        # Build de producci�n

pnpm lint            # Linting con ESLintnpm run start        # Servidor de producci�n

pnpm test            # Ejecutar testsnpm run lint         # Linting con ESLint

pnpm test:watch      # Tests en modo watchnpm test             # Ejecutar tests

pnpm test:coverage   # Tests con coberturanpm run test:watch   # Tests en modo watch

```npm run test:coverage # Tests con cobertura

````

## 🌐 URL Persistente

La aplicación mantiene el estado de configuración en los parámetros de la URL:

- `?size=4` - Tamaño de la matriz

- `&direction=clockwise` - Dirección de rotación

Esto permite compartir configuraciones específicas y mantener el estado al recargar la página.
```

---

⭐ **¡Si te gusta este proyecto, dale una estrella!** ⭐