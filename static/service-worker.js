/*
 * Removes the service worker and caches left by the previously enabled
 * gatsby-plugin-offline. Keep this file deployed so returning visitors
 * receive the cleanup worker instead of the old cached portfolio.
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
