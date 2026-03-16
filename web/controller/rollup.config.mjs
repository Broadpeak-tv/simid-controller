import commonjs from '@rollup/plugin-commonjs'
import dts from 'rollup-plugin-dts'
import json from '@rollup/plugin-json'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import replace from '@rollup/plugin-replace'
import typescript from '@rollup/plugin-typescript'

import pkg from './package.json' with { type: 'json' }

export default () => {
  return [
    {
      input: `src/index.ts`,
      external: ['tslib'],
      output: [{
        dir: 'dist',
        format: 'esm',
        sourcemap: true,
        preserveModules: true
      }],
      plugins: [
        typescript({
          sourceMap: true,
          inlineSources: true
        }),
        nodeResolve(),
        commonjs({
          include: 'node_modules/**'
        }),
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
  