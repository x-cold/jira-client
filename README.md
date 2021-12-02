jira-rest-sdk
---

Another JavaScript/TypeScript wrapper for the JIRA REST API via swagger.

### Usage

- Install the package

```bash
npm i -S jira-rest-sdk
```

- Init client instance and call the method

```ts
import { Version3Client } from 'jira-rest-sdk';

const client = new Version3Client({
  baseURL: 'https://your-domain.atlassian.net',
});
```

- API documents: https://x-cold.github.io/jira-rest-sdk/


### Features

 - Lightless wrapper with axios
 - TypeScript development friendly
 - Generate by jira official swagger.json

## Development

### NPM scripts

 - `npm lint`: Eslint code
 - `npm lint:fix`: Eslint code and try to fix problems
 - `npm start`: Realtime complie code
 - `npm run docs`: Generate type documents
 - `npm run build`: Build ths dist products
 - `npm run release`: The same as `npm run release:patch`
 - `npm run release:patch`: Automatically upgrade patch versioin and update CHANGELOG.md
 - `npm run release:minor`: Automatically upgrade minor versioin and update CHANGELOG.md
 - `npm run release:major`: Automatically upgrade major versioin and update CHANGELOG.md
 - `npm run test`: Run test suite via jest with code coverage
 - `npm run test:watch`: Run test suite in [interactive watch mode](http://facebook.github.io/jest/docs/cli.html#watch)
 - `npm run test:prod`: Run linting and generate coverage
 - `npm run generate-jira-api`: Generate v3 open api

### Cookbook

- Local development

```bash
npm install
npm test
```
