const CACHE_NAME = 'bozor-v1';
const ASSETS = [
    './',
    './index.html'
];

// Сабти файлҳо дар хотираи телефон ҳангоми насб
self.addEventListener('install', (e) => {
    e.waitUntil(
        caches.open(CACHE_NAME).then((cache) => {
            return cache.addAll(ASSETS);
        })
    );
});

// Хориҷ кардани маълумот аз хотира ҳангоми офлайн кор кардан
self.addEventListener('fetch', (e) => {
    e.respondWith(
        caches.match(e.request).then((response) => {
            return response || fetch(e.request);
        })
    );
});
