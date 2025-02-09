import { defineConfig } from 'astro/config';
import prefetch from '@astrojs/prefetch';
import sanity from '@sanity/astro';
import netlify from '@astrojs/netlify';

export default defineConfig({
    output: 'server',
    adapter: netlify({
        imageCDN: true,
        edgeMiddleware: true
    }),
    integrations: [
        prefetch({
            // Prefetch options to handle poor network conditions
            throttle: 1,
            timeout: 10000,
            retryDelay: 5000,
            maxRetries: 5
        }),
        sanity({
            projectId: 'qpes3s7p',
            dataset: 'production',
            apiVersion: '2024-03-01',
            useCdn: true,
            studioUrl: '/studio'
        })
    ],
    build: {
        assets: 'assets',
        inlineStylesheets: 'auto'
    },
    server: {
        cors: true,
        headers: {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS'
        }
    }
});