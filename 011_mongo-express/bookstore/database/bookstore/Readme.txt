Para exportar los datos de MongoDB se debe:
- Abrir la consola como Administrador
- Posicionarse sobre la carpeta bin de MongoDB
- Ejecutar "mongoexport --db name_database --collection name_collection --out folder_name/name_collection.json"

Para importar los datos, se hace lo mismo solo que se debe ejecutar:
- Ejecutar "mongoimport --db name_database --collection name_collection --file folder_name/name_collection.json"
