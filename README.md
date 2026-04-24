# EP1-DevOps
Aqui se subirá el codigo para la Evaluacion Parcial 1 de ing DevOps.

Uso de IA: Se utilizo la IA para generar el codigo del microservicio, siendo mucho mas facil avanzar con lo que pide la rubrica y tener más tiempo para estudiar y aprender como usar  correctamente el GitHub.

Metodologia: Para este proyecto se utilizó la metodologia de GitFlow ya que esta nos permite un desarrollo seguro y organizado, separando el codigo de producción del codigo en desarrollo.

Ramas Principales: La rama "main" contiene el codigo de produccion estable mientras que la rama "develop" es la base para el desarrollo y la integracion de las nuevas funcionalidades del proyecto. Tambien se creó la rama "hotfix/" para resolver los problemas graves como por ejemplo (en este caso), prevenir la division por 0 en los promedios. Ademas, tambien se habian creado 2 ramas, "feature/agregar-alumno" y "feature/calcular-promedio" los cuales fueron eliminadas una vez subidos los pull request.

Carpetas: Se creó la carpeta .github con una subcarpeta llamda "workflows" en donde se creó un archivo YML el cual funciona como filtro de seguridad automatico para evitar que se suban errores de produccion por accidente.


