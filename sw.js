if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js');
};

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

const cacheName = 'cache';
const appShellFiles = [
    '/',
    'typeit.js',
    '/index.html',
    '/manifest.json',
    '/style.less',
    '/images/icon-32.png',
    '/images/icon-64.png',
    '/images/icon-96.png',
    '/images/icon-128.png',
    '/images/icon-168.png',
    '/images/icon-192.png',
    '/images/icon-256.png',
    '/images/icon-512.png',
    '/*'
];

self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
    e.waitUntil((async () => {
        const cache = await caches.open(cacheName);
        console.log('[Service Worker] Caching all: app shell and content');
        await cache.addAll(contentToCache);
    })());
});

self.addEventListener('activate', (e) => {
    e.waitUntil(caches.keys().then((keyList) => {
        Promise.all(keyList.map((key) => {
            if (key === cacheName) {
                return;
            }
            caches.delete(key);
        }))
    })());
});