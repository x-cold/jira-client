'use strict';

const fs = require('fs');
const path = require('path');
const { generateApi } = require('swagger-typescript-api');

const output = path.resolve(process.cwd(), './src/v3');

const defaultOptions = {
  output,
  /**
   * Downloaded from https://developer.atlassian.com/cloud/jira/platform/swagger.json
   *
   * NOTICE: there is a syntax error with the swagger file caused by unclosed comment statement, so you should fix it manually
   * */
  // Search it: */example/config/url*
  // Replace to: example/config/url*
  input: path.resolve(process.cwd(), './swagger.json'),
  // generateClient: false,
  httpClientType: 'axios',
  modular: true,
  prettier: {
    printWidth: 120,
    tabWidth: 2,
    trailingComma: 'all',
    parser: 'typescript',
    semi: true,
    singleQuote: true,
  },
}

async function main() {
  try {
    await generateApi({
      ...defaultOptions,
      templates: path.resolve(__dirname, 'templates/class'),
    });
  fs.unlinkSync(path.resolve(output, 'http-client.ts'));
  } catch(error) {
    console.error(error);
  }
}

main();
