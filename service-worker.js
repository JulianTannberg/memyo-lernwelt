const CACHE = 'memyo-lernwelt-v16';
const ASSETS = [
  './',
  './index.html',
  './styles.css?v=16',
  './app.js?v=16',
  './manifest.webmanifest?v=16',
  './icon-192.png',
  './icon-512.png',
    './assets/pips-wait.png',
  './assets/pips-run-a.png',
  './assets/pips-run-b.png',
  './assets/pips-fly.png',
  './assets/hare-wait.png',
  './assets/hare-run-a.png',
  './assets/hare-run-b.png',
  './assets/hare-fly.png',
  './assets/fox-wait.png',
  './assets/fox-run-a.png',
  './assets/fox-run-b.png',
  './assets/fox-fly.png',
  './assets/deer-wait.png',
  './assets/deer-run-a.png',
  './assets/deer-run-b.png',
  './assets/deer-fly.png'
];

self.addEventListener('install', event => {
  self.skipWaiting();
  event.waitUntil(caches.open(CACHE).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(keys.filter(key => key !== CACHE).map(key => caches.delete(key))))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);

  if (event.request.mode === 'navigate') {
    event.respondWith(
      fetch(event.request)
        .then(response => {
          const copy = response.clone();
          caches.open(CACHE).then(cache => cache.put('./index.html', copy));
          return response;
        })
        .catch(() => caches.match('./index.html'))
    );
    return;
  }

  if (url.origin === self.location.origin) {
    event.respondWith(
      caches.match(event.request).then(cached => cached || fetch(event.request).then(response => {
        const copy = response.clone();
        caches.open(CACHE).then(cache => cache.put(event.request, copy));
        return response;
      }))
    );
  }
});
