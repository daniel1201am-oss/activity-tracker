const CACHE_NAME = "activity-tracker-v1";
const ASSETS = [
  "/activity-tracker/",
  "/activity-tracker/index.html",
  "/activity-tracker/manifest.json",
  "/activity-tracker/icon-192.png",
  "/activity-tracker/icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(cached => cached || fetch(event.request))
  );
});
