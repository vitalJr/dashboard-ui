/* eslint-disable global-require */
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from 'rollup-plugin-typescript2';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import { terser } from 'rollup-plugin-terser';
import dts from 'rollup-plugin-dts';
import image from '@rollup/plugin-image';
import ignore from 'rollup-plugin-ignore';
import svgr from '@svgr/rollup';
import fs from 'fs';

const packageJson = require('./package.json');

ignore(['fs', 'net', 'react', 'react-dom', 'prop-types', 'PropTypes']);

const plugins = [
  peerDepsExternal(),
  postcss({
    extract: false,
    use: ['sass'],
  }),
  resolve({
    moduleDirectories: ['node_modules'],
  }),
  image(),
  svgr(),
  commonjs({
    include: /node_modules/,
    requireReturnsDefault: 'auto',
  }),
  typescript({
    tsconfig: './tsconfig.json',
    useTsconfigDeclarationDir: true,
    rollupCommonJSResolveHack: false,
    clean: true,
  }),
  terser(),
];

const pathes = ['index.ts', 'index.d.ts', 'assets', '__test__'];
const getFolders = (entry) => {
  const dirs = fs.readdirSync(entry);
  const dirsWithoutIndex = dirs.filter((name) => !pathes.includes(name));
  return dirsWithoutIndex;
};

const folderBuilds = getFolders('./src').map((folder) => ({
  input: `src/${folder}/index.ts`,
  output: {
    file: `dist/${folder}/index.js`,
    sourcemap: true,
    exports: 'named',
    format: 'esm',
  },
  plugins,
  external: ['react', 'react-dom'],
}));
export default [
  {
    input: ['src/index.ts'],
    output: [
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
        exports: 'named',
      },
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        exports: 'named',
      },
    ],
    plugins,
    external: ['react', 'react-dom'],
  },
  ...folderBuilds,
  {
    input: packageJson.module,
    output: [{ file: packageJson.types, format: 'esm' }],
    plugins: [dts()],
    external: [/\.scss$/],
  },
];
