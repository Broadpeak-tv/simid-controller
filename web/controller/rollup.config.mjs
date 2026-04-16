import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'

import pkg from './package.json' with { type: 'json' }

// Shared config
const input = 'src/index.ts'
const external = ['tslib']
const watch = { include: 'src/**' }

const createPlugins = ({
  browser = false,
  commonjsInclude,
} = {}) => [
  typescript({
    sourceMap: true,
    inlineSources: true,
  }),
  nodeResolve({ browser }),
  commonjs(commonjsInclude ? { include: commonjsInclude } : {}),
  json(),
  replace({
    preventAssignment: true,
    values: {
      __VERSION__: JSON.stringify(pkg.version),
    },
  }),
]


export default arg => {
  return [
    // ESM build
    {
      input,
      external,
      watch,
      output: [{
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
        preserveModules: true
      }],
      plugins: createPlugins({
        commonjsInclude: 'node_modules/**',
      }),
    },

    // UMD build
    {
      input,
      external,
      output: {
        file: 'dist/simid-controller.js',
        format: 'umd',
        name: 'simid',
        sourcemap: true,
        globals: {
          tslib: 'tslib'
        }
      },
      plugins: createPlugins({
        browser: true,
      }),
    },


    // Type declarations
    {
      input: './dist/types/index.d.ts',
      output: [
        {
          file: 'dist/index.d.ts',
          format: 'es'
        }
      ],
      plugins: [dts()],
    }
  ]
}
  