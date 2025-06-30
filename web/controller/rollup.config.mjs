import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import { nodeResolve } from '@rollup/plugin-node-resolve'

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
  