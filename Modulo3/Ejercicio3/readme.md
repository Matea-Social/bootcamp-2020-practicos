Ejercicio 3
------------------------------------
Crear un servidor que maneje una lista de canciones.
El servidor debe:

1) Mostrar la lista canciones que hay
2) Agregar nuevas
3) Mostrar informacion de cada canción
4) Borrar canciones

Cada canción debe tener:
- name
- artist
- duration

**La especificación de la API es la siguiente**
---------------------------------------------------------------------
---------------------------------------------------------------------
- GET url-base -> devuelve la lista de canciones, si no hay canciones devuelve un error.
<<<<<<< HEAD
- GET url-base/nombre -> devuelve el json de la canción con ese nombre.
=======
- GET ur-base/cancion -> devuelve el json de la canción con ese nombre.
>>>>>>> 1f14c998a10fbc7a46d1c0c57fea7d1865e8e576
- POST url-base -> inserta la canción en la lista *si tiene el formato correcto*
- DELETE url-base/cancion -> borra la cancion de la lista *si existe*
- PUT url-base/cancion -> Tiene que modificar la cancion que se pase en cancion con el valor que se recibe en el body


Aclaraciones
-----------------------------------------
- Es importante que cada respuesta devuelva el **status** que corresponde.
Por ejemplo, si una canción no se pudo agregar porque el formato de la misma es incorrecto, devolver el status correspondiente con el mesnaje de error indicado.
- La información de la canción en el POST debe ir en el body con formato json.
