### Para gerar um OPENSSL

```mac
openssl req -x509 -sha256 -nodes -days 365 -newkey rsa:2048 -keyout server.key -out server.crt
```

# Dev

1. Clonar el .env.template y crear el .env

