const CACHE_NAME = 'magno-pwa-cache-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/src/main.js',
  '/src/styles/variables.css',
  '/src/styles/main.css',
  '/src/styles/custom.css'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Devuelve del cache si se encuentra, si no busca en la red
        return response || fetch(event.request);
      })
  );
});
