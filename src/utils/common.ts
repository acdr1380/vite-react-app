import { defineConfig, loadEnv } from 'vite';

/**
 *  获取环境变量
 */
export const env = defineConfig(({ command, mode }) => {
    debugger;
    return loadEnv(mode, process.cwd(), '');
});
