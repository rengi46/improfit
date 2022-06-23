# DOCUMENTO DE GUÍA - PRUEBA TÉCNICA IMPROFIT
# Por: Roger Puigdemasa Armengol
#### Proyecto de gestor de imagenes con commentarios

## 1. Compilar proyecto front (React):

dependencias
```
cd ./front
npm install
```
iniciar proyecto
```
npm start
```

## 2. Compilar proyecto back (nodeJs):

dependencias
```
cd ./back
npm install
```

iniciar proyecto
```
npm start
```


## 3. Abrir aplicacion

En un navegador de internet, ir a http://localhost:3000

## 4. Descripcion del servicio y su arquitectura

El presente proyecto esta compuesto de dos aplicativos:

+ Frontend: React

    ordenado por componentes y con redux de jestor de estado. Esta separado en dos paginas, la principal donde se ve una lista de archivos con un su informacion y la secundaria donde se puede ver la imagen y los comentarios de la misma.

+ Backend: nodeJs

    nodeJs con el framework express , almacenadno las imagenes en aws s3 y la informacion como url de imagen ,titulo entre otros se guarda en mongoDB todo esto  para poder hacer 4 endpoints de los cuales:
        -{get}/imageList: para cojer la informacion de la lista de imagenes guardadas
        -{post}/image: para almacenar las imagenes dentro del DB
        -{get}/comments/id:para cojer los comentarios de una imagen en concreto
        -{post}/comments/id:para subir un comentario en una imagen en concreto


## 5. Posibles mejoras

+ implementar un ui/ux mas bonita
+ implementar paginado en la home Page
+ implementar tests

## 6. dificultades

+ poner en publicos los archivos en aws s3
+ hacer los tests en react
+ hacer los test con superTest
