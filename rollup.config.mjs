import typescript from '@rollup/plugin-typescript';
import deleteBeforeBuild from 'rollup-plugin-delete';
import { nodeExternals } from 'rollup-plugin-node-externals';
import { terser } from 'rollup-plugin-terser';

export default {
	input: './src/index.ts',
	output: {
		file: './build/index.min.mjs',
		format: 'esm',
		exports: 'named',
		sourcemap: true
	},
	plugins: [
		deleteBeforeBuild({
			targets: './build/*'
		}),
		typescript(),
		nodeExternals(),
		terser({
			output: {
				comments: false
			}
		})
	]
};
