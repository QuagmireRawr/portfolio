import { readFileSync as read, readdirSync, writeFileSync as write } from 'node:fs';
import { resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { visualizer } from 'rollup-plugin-visualizer';
import { defineConfig, loadEnv, type Plugin } from 'vite';
import { checker } from 'vite-plugin-checker';
import { createHtmlPlugin } from 'vite-plugin-html';
import { optimizeCssModules } from 'vite-plugin-optimize-css-modules';
import sassDts from 'vite-plugin-sass-dts';
import solid from 'vite-plugin-solid';
import svg from 'vite-plugin-svgo';

export default ({ mode }: { mode: 'production' | 'development' | 'test' }) => {
  const ENV = { ...process.env, ...loadEnv(mode, 'env', '') };

  return defineConfig({
    envDir: 'env',
    build: {
      rollupOptions: {
        output: { entryFileNames: '[hash:6].js', chunkFileNames: '[hash:6].js', assetFileNames: '[hash:6][extname]' },
        treeshake: { propertyReadSideEffects: false, tryCatchDeoptimization: false },
      },
      target: 'es2020',
      minify: 'terser',
      cssMinify: 'lightningcss',
      terserOptions: {
        ecma: 2020,
        compress: { drop_console: true, drop_debugger: true, arguments: true, hoist_funs: true, passes: 3, pure_getters: true, unsafe: true, unsafe_arrows: true, unsafe_comps: true, unsafe_symbols: true }, //prettier-ignore
        format: { comments: false, wrap_func_args: false },
        mangle: { properties: { regex: /^(?:observers|observerSlots|comparator|updatedAt|owned|route|score|when|sourceSlots|fn|cleanups|owner|pure|suspense|inFallback|isRouting|beforeLeave|Provider|preloadRoute|outlet|utils|explicitLinks|actionBase|resolvePath|branches|routerState|parsePath|renderPath|originalPath|effects|tState|disposed|sensitivity|navigatorFactory|keyed)$/ } }, //prettier-ignore
      },
      modulePreload: { polyfill: false }, // Delete this line if outputting more than 1 chunk
    },
    plugins: [
      {
        name: 'vite-plugin-optimize-solid-css-modules',
        enforce: 'pre',
        transform(code, id) {
          if (/\.tsx$/.test(id))
            code = code.replace(
              /class=\{([a-zA-Z '"`[\].-]+|(?:`(?:\$\{[a-zA-Z '"`[\].-]+\}\s*)+)`)\}/g, // eslint-disable-line regexp/no-useless-non-capturing-group
              'class={/*@once*/$1}' //TODO: Tighten regex to avoid store. Allow 1 ./space?
            );
          return { code, map: null };
        },
      } as Plugin,
      solid({
        solid: { omitNestedClosingTags: true },
        babel: { plugins: [['@babel/plugin-transform-typescript', { optimizeConstEnums: true, isTSX: true }]] },
      }),
      svg({
        multipass: true,
        floatPrecision: 2,
        plugins: [
          { name: 'preset-default', params: { overrides: { convertPathData: { noSpaceAfterFlags: true }, removeViewBox: false } } }, //prettier-ignore
          { name: 'removeAttrs', params: { attrs: ['fill', 'fill-rule'] } },
          'removeDimensions',
          'removeXMLNS',
        ],
      }),
      checker({ typescript: true, overlay: false, enableBuild: true }),
      createHtmlPlugin({
        pages: [
          { filename: 'index.html', template: 'index.html', entry: '/src/index.tsx' },
          { filename: '404.html', template: '404.html' },
        ],
        minify: {
          collapseBooleanAttributes: true, collapseWhitespace: true, decodeEntities: true, minifyCSS: true,
          minifyJS: true, minifyURLs: true, removeComments: true, removeEmptyAttributes: true,
          removeOptionalTags: true, removeRedundantAttributes: true, removeScriptTypeAttributes: true,
          removeStyleLinkTypeAttributes: true, sortAttributes: true, useShortDoctype: true,
        }, //prettier-ignore
      }),
      optimizeCssModules(),
      sassDts({ enabledMode: ['development', 'production'], prettierFilePath: resolve(fileURLToPath(new URL('.', import.meta.url)), '.prettierrc') }), //prettier-ignore
      ENV.ANALYZE === 'true' &&
        visualizer({
          template: 'treemap',
          open: true,
          gzipSize: true,
          brotliSize: true,
          filename: resolve(fileURLToPath(new URL('.', import.meta.url)), 'dist/analyze.html'),
        }),
      {
        name: 'vite-plugin-minify-assets',
        enforce: 'post',
        writeBundle: ({ dir }) => void setTimeout(() => {
          const files = readdirSync(dir!);
          files.filter(x => x.endsWith('.json')).forEach(x => write(`${dir}/${x}`, JSON.stringify(JSON.parse(read(`${dir}/${x}`, 'utf-8'))), { encoding: 'utf-8' }))
          files.filter(x => x.endsWith('.css') || x.endsWith('.js')).forEach(x => write(`${dir}/${x}`, read(`${dir}/${x}`, 'utf-8').trim(), { encoding: 'utf-8' }))
        }), //prettier-ignore
      } as Plugin,
    ].filter(Boolean),
    resolve: { alias: { '@': resolve(fileURLToPath(new URL('.', import.meta.url)), 'src') }, dedupe: ['solid-js'] },
  });
};
