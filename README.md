jira-rest-sdk
---

[![NPM version][npm-image]][npm-url]
[![build status][gitflow-image]][gitflow-url]
[![Test coverage][codecov-image]][codecov-url]
[![npm download][download-image]][download-url]

[npm-image]: https://img.shields.io/npm/v/jira-rest-sdk.svg?style=flat-square
[npm-url]: https://npmjs.org/package/jira-rest-sdk
[gitflow-image]: https://github.com/x-cold/jira-rest-sdk/actions/workflows/test.yml/badge.svg?branch=master
[gitflow-url]: https://github.com/x-cold/jira-rest-sdk/actions/workflows/test.yml
[codecov-image]: https://codecov.io/gh/x-cold/jira-rest-sdk/branch/master/graph/badge.svg
[codecov-url]: https://codecov.io/gh/x-cold/jira-rest-sdk
[download-image]: https://badgen.net/npm/dt/jira-rest-sdk
[download-url]: https://npmjs.org/package/jira-rest-sdk

Another JavaScript/TypeScript wrapper for the JIRA REST API via swagger. 

### Features

 - Lightless wrapper with axios
 - TypeScript development friendly
 - Generate by jira official swagger.json

### API documents

https://x-cold.github.io/jira-rest-sdk/


**NOTICE: Node.js is supported by default (jwt authentication depends on Node.js module named crypto).**
If you want to work in the browser, just customize with exported pure client (which doesn't support authentication and takes up less storage space) and override request method.

### Usage
#### Install the package

```bash
npm i -S jira-rest-sdk
```

#### Authentication

> This module is inspired by [jira.js](https://github.com/MrRefactoring/jira.js)

There are several types of authentication to gain access to the Jira API. Let's take a look at a few of them below

##### [Basic authentication](https://developer.atlassian.com/cloud/jira/platform/basic-auth-for-rest-apis/)

Basic authentication allows you to log in with credentials. You can use username and password, but this login method is not supported in the online version and most standalone versions, so it's better to release API Token, read how to do it [here](https://support.atlassian.com/atlassian-account/docs/manage-api-tokens-for-your-atlassian-account/), and use it together with email.

Username and password example:

```typescript
import { Version3Client } from 'jira-rest-sdk';

const client = new Version3Client({
  baseURL: 'https://your-domain.atlassian.net',
  authentication: {
    basic: {
      username: 'YOUR_USERNAME',
      password: 'YOUR_PASSWORD',
    },
  },
});
```

Email and API Token example:

```typescript
import { Version3Client } from 'jira-rest-sdk';

const client = new Version3Client({
  baseURL: 'https://your-domain.atlassian.net',
  authentication: {
    basic: {
      email: 'YOUR@EMAIL.ORG',
      apiToken: 'YOUR_API_TOKEN',
    },
  },
});
```

##### [OAuth](https://developer.atlassian.com/cloud/jira/platform/jira-rest-api-oauth-authentication/)

```typescript
import { Version3Client } from 'jira-rest-sdk';

const client = new Version3Client({
  baseURL: 'https://your-domain.atlassian.net',
  authentication: {
    oauth: {
      consumerKey: 'your consumer key',
      consumerSecret: '-----BEGIN RSA PRIVATE KEY-----\n" + "some private key\n" + "-----END RSA PRIVATE KEY-----',
      accessToken: 'your access token',
      tokenSecret: 'your token secret',
    },
  },
});
```

##### [OAuth 2.0](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/)

Only the authorization token is currently supported. To release it, you need to read the [documentation](https://developer.atlassian.com/cloud/jira/platform/oauth-2-3lo-apps/) and write your own code to get the token.

Example of usage

```typescript
import { Version3Client } from 'jira-rest-sdk';

const client = new Version3Client({
  baseURL: 'https://your-domain.atlassian.net',
  authentication: {
    oauth2: {
      accessToken: 'YOUR_ACCESS_TOKEN',
    },
  },
});
```

##### [JWT](https://developer.atlassian.com/cloud/jira/platform/understanding-jwt-for-connect-apps/)

```typescript
import { Version3Client } from 'jira-rest-sdk';

const client = new Version3Client({
  baseURL: 'https://your-domain.atlassian.net',
  authentication: {
    jwt: {
      issuer: 'ISSUER',
      secret: 'shhhh',
      expiryTimeSeconds: 180,
    },
  },
});
```

#### Your first request and using algorithm

```typescript
import { Version3Client } from 'jira-rest-sdk';

const client = new Version3Client({
  baseURL: 'https://your-domain.atlassian.net',
  authentication: {
    basic: {
      email: 'YOUR_EMAIL',
      apiToken: 'YOUR_API_TOKEN',
    },
  },
});

async function main() {
  const projects = await client.getAllProjects();

  console.log(projects);
}

main();

// Expected output:
// [
//   {
//     expand: 'description,lead,issueTypes,url,projectKeys,permissions,insight',
//     self: 'https://your-domain.atlassian.net/rest/api/2/project/10000',
//     id: '10000',
//     key: 'TEST',
//     name: 'test',
//     avatarUrls: {
//       '48x48': 'https://your-domain.atlassian.net/secure/projectavatar?pid=10000&avatarId=10425',
//       '24x24': 'https://your-domain.atlassian.net/secure/projectavatar?size=small&s=small&pid=10000&avatarId=10425',
//       '16x16': 'https://your-domain.atlassian.net/secure/projectavatar?size=xsmall&s=xsmall&pid=10000&avatarId=10425',
//       '32x32': 'https://your-domain.atlassian.net/secure/projectavatar?size=medium&s=medium&pid=10000&avatarId=10425'
//     },
//     projectTypeKey: 'software',
//     simplified: true,
//     style: 'next-gen',
//     isPrivate: false,
//     properties: {},
//     entityId: 'e0a412bd-1510-4841-bdbc-84180db3ee3b',
//     uuid: 'e0a412bd-1510-4841-bdbc-84180db3ee3b'
//   }
// ]
```

#### Customize pure client to support working in a browser

```ts
import { Version3Client, FullRequestParams } from 'jira-rest-sdk/dist/pure';

class MyVersion3Client extends Version3Client {
  public request = async <T>(params: FullRequestParams): Promise<T> => {
    const res = {
      ...params,
    }; // TODO: implement request logic
    return res as any;
  };
}

const client = new MyVersion3Client();

async function main() {
  const projects = await client.getAllProjects();

  console.log(projects);
}

main();
```

### Development

#### NPM scripts

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

#### Cookbook

- Local development

```bash
npm install
npm test
```
