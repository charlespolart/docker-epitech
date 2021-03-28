# **Docker Epitech**

**Autors :**
<br>Charles POLART
<br>Quentin AMARAL

<br>**Start project :**
<br>*Run **dev** environment*
```console
~$ docker-compose -f docker-compose.yaml -f docker-compose.dev.yaml up
```
or<br>
```console
~$ ./compose_run_dev.sh
```
*Run **prod** environment*
```console
~$ docker-compose -f docker-compose.yaml -f docker-compose.prod.yaml up
```
or<br>
```console
~$ ./compose_run_prod.sh
```

<br>**Test URLS:**
<br>Root -> http://localhost:3000
<br>Database -> http://localhost:3000/database