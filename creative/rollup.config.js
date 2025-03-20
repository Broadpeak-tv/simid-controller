import commonjs from 'rollup-plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import { nodeResolve } from '@rollup/plugin-node-resolve'

const outDir = 'dist/'
const name = 'simid-creative'

export default {
  input: `src/index.ts`,
  output: [{
    file: outDir + name + '.js',
    format: "umd",
    sourcemap: true,
    exports: "auto",
    name
  }],
  plugins: [
    // Compile TypeScript files
    typescript({ useTsconfigDeclarationDir: true }),
    // Allow bundling cjs modules (unlike webpack, rollup doesn't understand cjs)
    commonjs({
      include: 'node_modules/**'
    }),
    nodeResolve(),
  ],
  watch: {
    include: 'src/**'
  }
}
