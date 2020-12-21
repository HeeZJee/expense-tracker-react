/* eslint-disable no-restricted-globals */
const cacheName = "cache-v1";
const host = location.href;
console.log(host);
const cachePath = [
  "/",
  "/https://heezjee-expense-tracker.netlify.app/",
  "/manifest.json",
  "/favicon.ico",
  "/logo192.png",
  "/sw.js",
  "/logo512.png",
  "/index.html",
  "https://fonts.gstatic.com/s/lato/v17/S6uyw4BMUTPHjx4wXg.woff2",
  "https://fonts.googleapis.com/css?family=Lato&display=swap",
  "/static/js/bundle.js",
  "/static/js/main.chunk.js",
  "/static/js/0.chunk.js",
  "/static/js/1.chunk.js",
  "/static/js/2.fe306c6a.chunk.js",
  "/static/js/main.ff234e4b.chunk.js",
  "/static/css/main.1563e9bb.chunk.css",
  "/static/css/**",
  "/main.43318790f93790fc0464.hot-update.js",
];

self.addEventListener("register", () => console.log("registered sw.js"));

self.addEventListener("install", (e) => {
  e.waitUntil(
    caches
      .open(cacheName)
      .then((cache) => {
        console.log("Open cache", cache.addAll(cachePath));
        cache.addAll(cachePath);
      })
      .catch((e) => console.warn("Service Worker install error", e))
  );
});

self.addEventListener("fetch", (e) => {
  console.log("fetching");
  e.respondWith(
    caches
      .match(e.request)
      .then((cacheRes) => {
        console.log("Fetched", cacheRes);
        cacheRes || fetch(e.request);
        return cacheRes || fetch(e.request);
      })
      .catch((e) => console.warn("Service Worker Fetch Error", e))
  );
});
