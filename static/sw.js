/*
 * Gatsby's offline plugin registered this exact /sw.js path.
 * This replacement removes the old worker and its cached portfolio.
 */
self.addEventListener('install', () => {
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    Promise.all([
      caches.keys().then(cacheNames =>
        Promise.all(cacheNames.map(cacheName => caches.delete(cacheName)))
      ),
      self.registration.unregister(),
    ]).then(() =>
      self.clients.matchAll({ type: 'window' }).then(clients =>
        Promise.all(clients.map(client => client.navigate(client.url)))
      )
    )
  );
});
