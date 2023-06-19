# Testes de API com Supertest & Jest

## __Ambiente__
Para executar os testes localmente, estou utilizando o ServeRest

<p align="left">
 <img alt="Logo do ServeRest" src="https://user-images.githubusercontent.com/29241659/115161869-6a017e80-a076-11eb-9bbe-c391eff410db.png" height="80">
</p>

Link do Repo: https://github.com/ServeRest/ServeRest

ServeRest está disponível de forma [online](https://serverest.dev), no [npm](https://www.npmjs.com/package/serverest) e no [docker](https://hub.docker.com/r/paulogoncalvesbh/serverest/).
```
npm install
```
Para iniciar o serviço basta acessar a pasta ServeRest-trunk rodar o comando
```
npx serverest@latest

```

## Pré-requisitos

Antes de começar, certifique-se de ter os seguintes pré-requisitos instalados em seu ambiente de desenvolvimento:

- Node.js: [https://nodejs.org](https://nodejs.org)
- Yarn: [https://yarnpkg.com](https://yarnpkg.com)
- TypeScript: `yarn global add typescript`


### Criar arquivo de variáveis

- Na raiz do projeto você precisa criar um arquivo `.env` com as variáveis de DEV e PROD do Serverest

```
PROD=https://serverest.dev
DEV=http://localhost:3000
```


## Estrutura do projeto
```
[supertest-jest]
    [src]
        [__tests__] - Arquivo de testes do Jest
        [factory] - Configuração massa de testes com Fakerjs
        [config] - Configurações do ambiente
        [service] - Chamadas abstraídas do Supertest
        .env - Variáveis de ambiente
        jest.config.js - Configurações do Jest e Report
```

## Como executar os testes

- Para executar os testes em ambiente de DEV basta rodar o comando
```shell
yarn run jest-dev
```
- Ja para executar os testes em ambiente de PROD basta rodar o comando
```shell
yarn run jest-prod
```