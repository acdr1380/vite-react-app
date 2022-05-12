import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

export default defineConfig({
    plugins: [react()],

    resolve: {
        alias: [
            { find: '@', replacement: path.resolve(__dirname, 'src') },
            { find: '~', replacement: path.resolve(__dirname, 'node_modules') },
        ],
    },

    css: {
        preprocessorOptions: {
            scss: {
                additionalData: '@import "@/assets/styles/global.scss";',
            },
        },
    },

    server: {
        port: 7001,
    },

    build: {
        outDir: 'build',
    },
});
