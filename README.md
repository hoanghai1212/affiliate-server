<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Description

Affilicate management system.
SWAGGER: https://affiliate-app-server.herokuapp.com/api/

## Installation

### 1. Install dependencies:

```bash
$ yarn
```

### 2. Pscale CLI install step:

```bash
iwr -useb get.scoop.sh | iex
scoop bucket add pscale https://github.com/planetscale/scoop-bucket.git
scoop install pscale
```

## Running the app

```bash
# development
$ yarn start

# watch mode
$ yarn start:dev

# production mode
$ yarn start:prod
```

## Working with pscale

##### Create new pscale branch from master (max 3 branch so remember to delete branch after deploy to master):

```bash
pscale branch create master [branch-name]
```

##### Connect to database:

```bash
# working branch
pscale connect --port 3302 master [branch-name]

# shadow branch
pscale connect --port 3302 master shadow
```

##### Push change to database:

```bash
npx prisma db push || yarn db:push
```

##### Create deploy request:

```bash
pscale deploy-request create master [branch-name]
```

##### Check diff:

```bash
pscale deploy-request diff master [deploy-request-number]
```

##### Deploy changed:

```bash
pscale deploy-request deploy master [deploy-request-number]
```

##### Remove branch:

⚠️ **Never delete shadow branch.**

```bash
pscale branch delete master [branch-name]
```

##### Define connection url in .env file

```bash
DATABASE_URL= mysql://root@127.0.0.1:3302/master
SHADOW_DATABASE_URL = mysql://root@127.0.0.1:3301/master
```

## License

Nest is [MIT licensed](LICENSE).
