import { build, BuildOptions } from 'esbuild';

export const buildOptions: BuildOptions = {
  bundle: true,
  entryPoints: [`src/index.ts`],
  // minify: true,
  sourcemap: true,
  target: 'es2017',
  outfile: './dist/public/index.js',
};

export async function run() {
  await build(buildOptions);
}

run();
