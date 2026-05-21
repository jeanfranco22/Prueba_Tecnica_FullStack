# AI Usage Report

Durante el desarrollo de este proyecto utilicé herramientas de inteligencia artificial como apoyo para acelerar ciertas tareas repetitivas, mejorar estructura del código y validar ideas de implementación.

---

# Herramientas utilizadas

## ChatGPT

Usado para:

- Generación inicial de estructuras CRUD
- Resolución de errores específicos
- Ayuda con configuración de NestJS y TypeORM
- Apoyo en validaciones con DTOs
- Mejora de estructura de componentes React
- Generación de documentación (`README.md`)
- Optimización de organización del proyecto

## GitHub Copilot

Usado para:

- Autocompletado de funciones
- Sugerencias rápidas de tipado
- Generación de snippets repetitivos

---

# Prompts clave utilizados

## Prompt 1

Ayúdame a crear una estructura backend en NestJS para autenticación JWT con PostgreSQL y TypeORM.

## Prompt 2

Cómo estructurar un CRUD de tareas protegido por JWT donde cada usuario solo pueda acceder a sus propias tareas.

## Prompt 3

Ayúdame a crear componentes reutilizables en React y Next.js usando TypeScript y TailwindCSS.

## Cosas que la IA genero mal y tuve que corregir

- la IA generó lógica de frontend con manejo de estados innecesariamente complejo o con estructuras poco reutilizables.
- También generó algunas configuraciones incompatibles entre versiones de Next.js y ciertas prácticas de renderizado.

## Que decidi no delegar a la IA

- La arquitectura general del proyecto, organización de carpetas y flujo de autenticación fueron decisiones tomadas manualmente.

Razón:
Considero importante entender completamente la estructura y lógica principal del proyecto para poder mantenerlo, debuggearlo y escalarlo posteriormente sin depender completamente de herramientas de IA.
Además, algunas decisiones de experiencia de usuario y separación de responsabilidades fueron más fáciles de ajustar manualmente según el contexto del reto técnico.

- Generacion y orden de componentes para facilitarme la forma de organizar y entender el esquema
