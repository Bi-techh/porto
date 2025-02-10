import { defineConfig } from 'astro/config';
import prefetch from '@astrojs/prefetch';
import sanity from '@sanity/astro';
import netlify from '@astrojs/netlify';

export default defineConfig({
    output: 'server',
    adapter: netlify({
        imageCDN: true,
        edgeMiddleware: false, // Disabling edge middleware to prevent parsing issues
        binaryMediaTypes: ['image/*', 'font/*'],
        functionPerRoute: false, // Simplifying the function structure
    }),
    integrations: [
        prefetch({
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
            studioBasePath: '/studio',
            perspective: 'published'
        })
    ],
    image: {
        service: {
            entrypoint: 'astro/assets/services/sharp'
        },
        domains: ['cdn.sanity.io'],
        remotePatterns: [{ protocol: 'https' }]
    },
    build: {
        assets: 'assets',
        inlineStylesheets: 'auto'
    },
    vite: {
        ssr: {
            noExternal: ['@sanity/image-url', '@sanity/client']
        }
    }
});