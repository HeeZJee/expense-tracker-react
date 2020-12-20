/* eslint-disable no-restricted-globals */
const cacheName = "cache-v1";
const host = location.href;
console.log(host);
const cachePath = [
  "/",
  "/manifest.json",
  "/favicon.ico",
  "/logo192.png",
  "/sw.js",
  "/logo512.png",
  "/index.html",
  "https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXg.woff2",
  "https://fonts.googleapis.com/css?family=Lato&display=swap",
];

self.addEventListener("register", () => console.log("registered sw.js"));

self.addEventListener("install", (e) => {
  console.log("Service Worker install");
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => cache.addAll(cachePath))
      .catch((e) => console.log("Service Worker install error", e))
  );
});

self.addEventListener("fetch", (e) => {
  e.respondWith(
    caches
      .match(e.request)
      .then((cacheRes) => cacheRes || fetch(e.request))
      .catch((e) => console.log("Service Worker Fetch Error", e))
  );
});
