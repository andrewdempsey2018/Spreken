// Minimal service worker required for PWA installation
self.addEventListener('fetch', (event) => {
  event.respondWith(
    fetch(event.request).catch(() => {
      return new Response("You are offline.");
    })
  );
});