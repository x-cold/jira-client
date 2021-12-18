import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import sourceMaps from 'rollup-plugin-sourcemaps';
import typescript from 'rollup-plugin-typescript2';
import json from 'rollup-plugin-json';
import { babel } from '@rollup/plugin-babel';
// import pkg from './package.json';

function defineConfig(libraryName) {
  const input = `src/${libraryName}.ts`;
  return {
    input,
    output: [
      { file: `dist/${libraryName}.js`, name: libraryName, format: 'umd', sourcemap: true },
      { file: `dist/${libraryName}.es.js`, format: 'es', sourcemap: true },
    ],
    // Indicate here external modules you don't wanna include in your bundle (i.e.: 'lodash')
    external: [],
    watch: {
      include: 'src/**',
    },
    plugins: [
      // Allow json resolution
      json(),
      // Compile TypeScript files
      typescript({
        tsconfigOverride: {
          include: [
            'src/'
          ],
          exclude: [
            'test'
          ]
        },
        useTsconfigDeclarationDir: true
      }),
      // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
      commonjs(),
      babel({ babelHelpers: 'bundled' }),
      // Allow node_modules resolution, so you can use 'external' to control
      // which external modules to include in the bundle
      // https://github.com/rollup/rollup-plugin-node-resolve#usage
      resolve(),
  
      // Resolve source maps to the original source
      sourceMaps(),
    ],
  };
}

export default [
  defineConfig('index'),
  defineConfig('pure'),
];
