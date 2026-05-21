# AI Usage Report

Durante el desarrollo de este proyecto se utilizaron herramientas de inteligencia artificial como apoyo para acelerar tareas repetitivas, validar enfoques técnicos y optimizar parte del flujo de desarrollo.

Las herramientas de IA fueron utilizadas como soporte técnico y productividad, pero todas las decisiones importantes de arquitectura, organización y lógica fueron revisadas, ajustadas y validadas manualmente.

---

# Herramientas utilizadas

## ChatGPT

Utilizado para:

- Generación inicial de estructuras CRUD
- Resolución de errores específicos
- Configuración de NestJS + TypeORM
- Apoyo en validaciones con DTOs
- Mejora de estructura de componentes React
- Optimización de organización del proyecto
- Generación y mejora de documentación técnica
- Debugging durante integración frontend/backend
- Resolución de problemas de renderizado e hidratación en Next.js

---

## GitHub Copilot

Utilizado para:

- Autocompletado de funciones
- Sugerencias rápidas de tipado
- Generación de snippets repetitivos
- Agilizar escritura de componentes y servicios

---

# Prompts clave utilizados

## Prompt 1

```txt
Ayúdame a crear una estructura backend en NestJS para autenticación JWT con PostgreSQL y TypeORM.
```

---

## Prompt 2

```txt
Cómo estructurar un CRUD de tareas protegido por JWT donde cada usuario solo pueda acceder a sus propias tareas.
```

---

## Prompt 3

```txt
Ayúdame a crear componentes reutilizables en React y Next.js usando TypeScript y TailwindCSS.
```

---

# Aspectos que la IA generó incorrectamente y fueron corregidos manualmente

- Algunas estructuras de manejo de estado en frontend resultaban innecesariamente complejas.
- Se generaron configuraciones incompatibles entre ciertas versiones de Next.js y prácticas de renderizado.
- Parte del código sugerido requería refactorización para mejorar reutilización y claridad.
- Algunos flujos de autenticación necesitaban ajustes para evitar errores de hidratación y renderizado en cliente.
- Algunas sugerencias iniciales requerían adaptación manual para mantener una estructura más limpia y consistente con el proyecto.

---

# Decisiones que no fueron delegadas a la IA

Las siguientes decisiones fueron tomadas manualmente:

- Arquitectura general del proyecto
- Organización de carpetas
- Flujo de autenticación
- Separación de responsabilidades
- Organización y reutilización de componentes
- Estructura visual y experiencia de usuario
- Integración frontend/backend
- Flujo CRUD completo
- Decisiones de estructura responsive
