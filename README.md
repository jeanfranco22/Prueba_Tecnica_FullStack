# Task Manager App

Aplicación Full Stack para gestión de tareas con autenticación JWT.

Cada usuario puede registrarse, iniciar sesión y administrar únicamente sus propias tareas mediante una interfaz moderna y responsive.

---

# Tecnologías utilizadas

## Frontend

- Next.js
- React
- TypeScript
- TailwindCSS

## Backend

- NestJS
- TypeORM
- PostgreSQL
- JWT Authentication
- bcrypt

---

# Funcionalidades

## Autenticación

- Registro de usuarios
- Login con JWT
- Protección de rutas privadas
- Persistencia de sesión mediante token

## Gestión de tareas

- Crear tareas
- Editar tareas
- Eliminar tareas
- Cambiar estado (`pending` / `done`)
- Filtrado por estado
- Paginación
- Visualización exclusiva de tareas por usuario autenticado

---

# Estructura del proyecto

```bash
project-root/
│
├── backend/
│
└── frontend/
```

---

# Requisitos previos

Antes de ejecutar el proyecto es necesario tener instalado:

- Node.js v18 o superior
- npm
- PostgreSQL

---

# 1. Clonar repositorio

```bash
git clone https://github.com/jeanfranco22/Prueba_Tecnica_FullStack.git
```

---

# 2. Instalar dependencias

## Backend

```bash
cd backend
npm install
```

## Frontend

```bash
cd frontend
npm install
```

---

# 3. Variables de entorno

## Backend

Crear archivo:

```bash
backend/.env
```

Contenido:

```env
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

JWT_SECRET=your_secret_key

PORT=3001
```

---

## Frontend

Crear archivo:

```bash
frontend/.env.local
```

Contenido:

```env
NEXT_PUBLIC_API_URL=http://localhost:3001
```

---

# 4. Ejecutar backend

Desde la carpeta backend ejecutar:

```bash
npm run start:dev
```

Servidor backend disponible en:

```bash
http://localhost:3001
```

---

# 5. Ejecutar frontend

Desde la carpeta frontend ejecutar:

```bash
npm run dev
```

Aplicación frontend disponible en:

```bash
http://localhost:3000
```

---

# Endpoints principales

## Auth

```http
POST /api/auth/register
POST /api/auth/login
```

## Tasks

```http
GET    /api/tasks
POST   /api/tasks
PATCH  /api/tasks/:id
DELETE /api/tasks/:id
```

---

# Características técnicas

- Arquitectura modular en NestJS
- DTO validations con `class-validator`
- JWT Guards para protección de rutas
- Relación Usuario → Tasks
- Componentes reutilizables
- Diseño responsive
- Manejo de estado en frontend
- Separación de responsabilidades entre capas
