# 🔄 Rotador de Matrices# = Rotador de Matrices

Una aplicación web interactiva construida con **Next.js 15** y **TypeScript** que permite rotar matrices NxN en sentido horario o antihorario de manera visual y fácil de usar.Una aplicaci�n web interactiva construida con **Next.js 15** y **TypeScript** que permite rotar matrices NxN en sentido horario o antihorario de manera visual y f�cil de usar.

## ✨ Características## Caracter�sticas

- 🔄 **Rotación de matrices** en tiempo real (horaria y antihoraria)- <� **Rotaci�n de matrices** en tiempo real (horaria y antihoraria)

- 📐 **Matrices configurables** de 2x2 hasta 10x10- =� **Matrices configurables** de 2x2 hasta 10x10

- 🎨 **Interfaz moderna** con Tailwind CSS y shadcn/ui- <� **Interfaz moderna** con Tailwind CSS y shadcn/ui

- 🔗 **URLs compartibles** con parámetros de consulta persistentes- = **URLs compartibles** con par�metros de consulta persistentes

- ✅ **Validación robusta** con Zod schemas- **Validaci�n robusta** con Zod schemas

- 🧪 **Testing completo** con Jest y Testing Library- > � **Testing completo** con Jest y Testing Library

- 🌙 **Modo oscuro** con next-themes- < **Modo oscuro** con next-themes

- 📱 **Diseño responsivo** para todos los dispositivos- =� **Dise�o responsivo** para todos los dispositivos

- ⚡ **Optimización** con Turbopack- � **Optimizaci�n** con Turbopack

## 🎯 Demo## Demo

Configura el tamaño de la matriz, introduce los valores numéricos y observa cómo se transforma la matriz al rotarla. Los resultados se muestran lado a lado para comparar fácilmente.Configura el tama�o de la matriz, introduce los valores num�ricos y observa c�mo se transforma la matriz al rotarla. Los resultados se muestran lado a lado para comparar f�cilmente.

## 🛠️ Tecnologías## Tecnolog�as

- **Framework:** Next.js 15 con App Router- **Framework:** Next.js 15 con App Router

- **Lenguaje:** TypeScript- **Lenguaje:** TypeScript

- **Estilos:** Tailwind CSS- **Estilos:** Tailwind CSS

- **Componentes:** Radix UI + shadcn/ui- **Componentes:** Radix UI + shadcn/ui

- **Validación:** Zod- **Validaci�n:** Zod

- **Testing:** Jest + Testing Library- **Testing:** Jest + Testing Library

- **Iconos:** Lucide React- **Iconos:** Lucide React

- **Formularios:** React Hook Form- **Formularios:** React Hook Form

## 🚀 Instalación## =� Instalaci�n

`bash`bash

# Clonar el repositorio# Clonar el repositorio

git clone https://github.com/cuevacelis/rotate-matrix.gitgit clone https://github.com/tu-usuario/rotate-matrix.git

cd rotate-matrixcd rotate-matrix

# Instalar dependencias# Instalar dependencias

pnpm installnpm install

# Ejecutar en desarrollo# Ejecutar en desarrollo

pnpm devnpm run dev

````



Abre [http://localhost:3000](http://localhost:3000) en tu navegador.Abre [http://localhost:3000](http://localhost:3000) en tu navegador.



## 🧪 Testing## Testing



```bash```bash

# Ejecutar todos los tests# Ejecutar todos los tests

pnpm testnpm test



# Ejecutar tests en modo watch# Ejecutar tests en modo watch

pnpm test:watchnpm run test:watch



# Ejecutar tests con cobertura# Ejecutar tests con cobertura

pnpm test:coveragenpm run test:coverage

````

### 📊 Cobertura de Tests### Cobertura de Tests

- **Utilidades de matriz** - Rotación horaria/antihoraria, creación de matrices vacías- **Utilidades de matriz** - Rotaci�n horaria/antihoraria, creaci�n de matrices vac�as

- **Validaciones** - Schemas de configuración y matriz- **Validaciones** - Schemas de configuraci�n y matriz

- **Constantes** - Configuración y parámetros de consulta- **Constantes** - Configuraci�n y par�metros de consulta

- **Casos edge** - Matrices inválidas, tamaños fuera de rango- **Casos edge** - Matrices inv�lidas, tama�os fuera de rango

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

---

La aplicación mantiene el estado de configuración en los parámetros de la URL:

- `?size=4` - Tamaño de la matriz

- `&direction=clockwise` - Dirección de rotación

Esto permite compartir configuraciones específicas y mantener el estado al recargar la página.

## 🤝 Contribución

Las contribuciones son bienvenidas. Para cambios importantes:

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commitea tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

---

⭐ **¡Si te gusta este proyecto, dale una estrella!** ⭐
