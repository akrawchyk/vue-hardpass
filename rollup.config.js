import fs from 'fs';
import path from 'path';
import alias from 'rollup-plugin-alias';
import json from 'rollup-plugin-json';
import pkg from './package.json';

const commitHash = (function() {
  try {
    return fs.readFileSync('.commithash', 'utf-8');
  } catch (err) {
    return 'unknown';
  }
})();

const now = new Date().toUTCString();

const banner = `/*
  @license
        vue-hardpass.js v${pkg.version}
        ${now} - commit ${commitHash}

        https://github.com/akrawchyk/vue-hardpass

        Released under the MIT License.
*/`;

const moduleAliases = {
  resolve: ['.js', '.json'],
  'package.json': path.resolve('package.json')
};

export default  {
  input: './src/vue-hardpass/index.ts',
  plugins: [
    alias(moduleAliases),
    json()
  ],
  external: [
    'vue'
  ],
  output: [
    {
      file: 'dist/vue-hardpass.umd.js',
      format: 'umd',
      name: 'vue-hardpass',
      sourcemap: true,
      banner,
      globals: {
        vue: 'Vue'
      }
    },
    {
      file: 'dist/vue-hardpass.esm.js',
      format: 'esm',
      banner
    }
  ]
}
