# Curso NODE.JS & EXPRESS - API REST & CORS

- Midudev

## Primeros pasos

- Instalaciones:
  - **_npm install_**
  - **_npm init -y_**
  - **_npm install express -E_**
- Una opción de levantar un SERVER o el contenido de un archivo:
  - **_node (nombre archivo)_**
  - **_node --watch (nombre archivo)_**

### REST API

- Representation Estate Transfer
- Arquitectura de Software
- Principios
  - Simplicidad
  - Escalabilidad
  - Portabilidad
  - Visibilidad
  - Fácil de Modificar
  - Fiabilidad
- Resources (recursos)
  - Cada recurso se identifica con una URL
- Verbos HTTP
  - Para definir las operaciones que se pueden realizar con los recursos
- Representaciones
  - JSON, XML, HTML, etc.
  - El cliente debería poder decidir la representación del recurso.
- Stateles
  -  El cliente debe enviar toda la información necesaria para procesar la request.
- Interfaz uniforme
- Separación de conceptos
  - Permite que el cliente y servidor, evolucionen de forma separada.
- Página de estados HTTP
  - **_http.cat_**
- **_ZOD_**
  - Zod está diseñado para ser lo más amigo al desarrollador posible. El objetivo es eliminar las declaraciones de tipo duplicado. 
  - Con Zod, declaras validador una vez y Zod inferirá automáticamente el tipo de Escript estático. 
  - Es fácil componer tipos más simples en estructuras de datos complejas.
- Otros grandes aspectos:
    - Cero dependencias
    - Obras en Node.js y todos los navegadores modernos
    - Pequeño: 8kb minificado . zipped
    - Impmutable: métodos (por ejemplo. .optional()) devolver una nueva instancia
    - Interfaz concisa y encadenable
    - Enfoque funcional: parse, no validar
    - Funciona con JavaScript llano también. No necesitas usar TypeScript