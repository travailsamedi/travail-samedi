const CACHE_NAME = 'travail-samedi-v1';

self.addEventListener('install', function(e) {
  self.skipWaiting();
});

self.addEventListener('activate', function(e) {
  e.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', function(e) {
  // ما كنديروش cache للطلبات (حيت iframe كيتعامل)
});