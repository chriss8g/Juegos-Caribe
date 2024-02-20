# Juegos Caribe

La FEU de la UH nos ha encargado la importante tarea de crear un sistema para almacenar y mostrar la información de los juegos Caribe. Para lograr esto, es necesario guardar todos los datos relacionados con cada una de las Temporadas.

## Estructura de Datos

- Cada Temporada engloba competiciones entre las facultades en varios deportes.
- Las facultades se caracterizan por su nombre, logo, equipos participantes y resultados de temporadas anteriores.
- Los equipos están asociados con el deporte en el que compiten y los atletas que los conforman.
- Los atletas tienen nombre, apellidos, modalidad (curso por encuentro, curso diurno, trabajador, egresado, etc.) y, si son estudiantes, el año en el que cursan.
- Los deportes se identifican por su nombre y tipo (individual o colectivo).

## Usuarios y Roles

La aplicación debe ser accesible para diferentes tipos de usuarios:

- Cada usuario tiene un nombre y un rol (gestor, espectador, espectador_autenticado).
- Los gestores pueden publicar noticias.
- Las noticias incluyen fecha, título, foto y cuerpo.
- Los espectadores_autenticados pueden comentar en las noticias.
- Los espectadores_autenticados también cuentan con correo y contraseña.
- Los comentarios tienen fecha y cuerpo.

## Cronograma de Partidos

- Un cronograma está compuesto por un conjunto de partidos.
- Cada partido involucra a dos o más equipos, tiene fecha y hora de inicio, sesión del día, sexo de los atletas involucrados, sede y etapa de competencia. También incluye el resultado y detalles del partido.

## Personal de la Comisión Organizativa

El sitio debe mostrar datos del personal que garantiza el correcto funcionamiento del evento. A estos miembros de la comisión organizativa les llamaremos comisionados.

- Cada comisionado tiene nombre, imagen, cargo y biografía.

## Documentos del Evento

Además, se deben almacenar ciertos documentos del evento.

- Cada documento tiene un tipo (reglamento, condiciones y términos de uso, política de privacidad, etc.) y un archivo.

## Preguntas a Resolver

La base de datos y la aplicación diseñada deben ser capaces de representar completamente el fenómeno descrito anteriormente, además de dar respuesta a preguntas como:

- Obtener los partidos de un día específico.
- Obtener la puntuación de las facultades en temporadas pasadas.
- Obtener los partidos entre dos fechas determinadas de un deporte específico.
- Obtener el total de medallas de una facultad en una temporada específica.
- Editar los resultados finales de un partido.
- Reajustar la fecha y hora de un partido.
- Agregar nuevos deportes.
- Eliminar atletas de un equipo.