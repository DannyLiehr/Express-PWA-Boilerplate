self.addEventListener('install', (event) => {
    console.log('Service Worker installing.');
    // Perform install steps, e.g., caching resources
});

self.addEventListener('activate', (event) => {
    console.log('Service Worker activating.');
    // Clean up old caches or perform other activation tasks
});

self.addEventListener('fetch', (event) => {
    console.log('Fetching:', event.request.url);
    // Respond to network requests, potentially serving cached content
    event.respondWith(
        caches.match(event.request)
            .then((response) => {
                // Return cached response if available, otherwise fetch from network
                return response || fetch(event.request);
            })
    );
});
