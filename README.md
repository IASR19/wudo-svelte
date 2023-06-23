# Plataforma WuDo - PWA em Svelte

Website plataforma do projeto WuDo

## Rodando somente o Frontend:

```bash
# baixar dependencias
npm i

# buildar projeto
npm run build

# executar projeto buildado
npm run preview
```

Caso queria rodar com reloading/build automatico:

```bash
# rodar projeto em dev
npm run dev
```

## Rodando o projeto inteiro em Docker:

```bash
docker-compose up
```

## Criando *migration* dentro do docker do Pocketbase:

```bash
docker exec -it <id-docker-pocketbase> /pb/pocketbase migrate create collections
```