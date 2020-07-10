# Guía para actualizar repo forkeado

Seguir los siguientes pasos:

1. Hacer un fork del repo original
2. Clonar el repo forkeado (va a quedar en `origin`)
3. Agregar el repor original en `upstream`

```git
git remote add upstream https://github.com/Matea-Social/bootcamp-2020-practicos.git
```
4. Actualizar origin con lo que hay en el repo original

```git
git pull upstream master
```

5. Subir los cambios al repo forkeado

```git
git push origin master
```