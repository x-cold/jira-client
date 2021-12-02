const { generateApi } = require('swagger-typescript-api');
const path = require('path');
const fs = require('fs');

const output = path.resolve(process.cwd(), './src/v3');

generateApi({
  output,
  /**
   * Downloaded from https://developer.atlassian.com/cloud/jira/platform/swagger.json
   *
   * NOTICE: there is a syntax error with the swagger file caused by unclosed comment statement, so you should fix it manually
   * */
  // Search it: */example/config/url*
  // Replace to: example/config/url*
  input: path.resolve(process.cwd(), './swagger.json'),
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
})
  .catch(e => console.error(e))
