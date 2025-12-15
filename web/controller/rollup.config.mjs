import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'

import pkg from './package.json' assert { type: 'json' }

// Output dir and bundle name
const outDir = 'dist/'
const outFilename = 'simid-controller'

// package namespace/global variable
const name = 'simid'

export default arg => {
  return [
    {
      input: `src/index.ts`,
      output: [{
        file: outDir + outFilename + '.js',
        format: "esm",
        sourcemap: true,
        exports: "auto",
        name
      }],
      plugins: [
        // Compile TypeScript files
        typescript(),
        // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
        commonjs({
          include: 'node_modules/**'
        }),
        nodeResolve(),
        json(),
        replace({
          preventAssignment: true,
          values: {
            __VERSION__: JSON.stringify(pkg.version)
          },
        })
      ],
      watch: {
        include: 'src/**'
      }
    },
    {
      // path to your declaration files root
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
  