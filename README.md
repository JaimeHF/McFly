# McFly

Pequeña API para prueba tecnica


## Instalación 🔧

_Clonar repositorio_
_Crear archivo .end y meter en el:_
```
 ENV=development
 PORT= (poner el puerto que quieres que se represente en local: 3000)
 DB_LOCAL= (poner direccion de la base de datos: mongodb://localhost/appApi)
```
_Instala dependencias de Node.js_
```
 npm install
```
_Meter el seeds.js en la BBDD_
```
 node bin/seeds
```
_Arrancar el server_
```
 npm run dev
```


## Endpoints

|  Método |  Path | Descripción|
| ------------- | ------------- |------------- |
| GET  |  /  |  Muestra la lista de notas|
| POST  | /new  | Crea una nota y la guarda en la BBDD |
| GET  |  /:id  |  Muestra los detalles de una notas|
| PUT  | /:id | Edita marcando una nota como favorita y la guarda en la BBDD |
| GET  |  /favorites  |  Muestra la lista de notas favoritas|

## Modelo
_Modelo creado con mongoose, esta es la estructura para crear nuevas notas_
```
 {
    username: String,
    note: String,
    fav: Boolean
}
```

### URL ⚙️

_Esta es la URL para poder realizar pruebas con POSTMAN y comprobar el funcionamiento de los Endpoints_

```
http://localhost:3000/API/note/
```

## Construido con 🛠️

* MongoDB
* Mongoose
* Express
* Node

