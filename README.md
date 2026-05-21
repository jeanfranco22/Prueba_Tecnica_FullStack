# Task Manager App

Aplicación Full Stack para gestión de tareas con autenticación JWT.  
Cada usuario puede crear, editar, eliminar y visualizar únicamente sus propias tareas.

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

## Tasks

- Crear tareas
- Editar tareas
- Eliminar tareas
- Cambiar estado (`pending` / `done`)
- Filtrado por estado
- Paginación

---

# Estructura del proyecto

```bash
project-root/
│
├── backend/
│
└── frontend/
```

# Instalación y ejecución del proyecto

A continuación se describen los pasos necesarios para ejecutar el proyecto localmente.

---

# Requisitos previos

Antes de comenzar, asegúrate de tener instalado:

- Node.js (v18 o superior recomendado)
- npm
- PostgreSQL

---

# 1. Clonar repositorio

https://github.com/jeanfranco22/Prueba_Tecnica_FullStack.git

# PostgreSQL Database URL

DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DATABASE

# JWT Secret Key

JWT_SECRET=your_secret_key

# Backend Port

PORT=3001
