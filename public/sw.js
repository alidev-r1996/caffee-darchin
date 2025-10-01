const CACHE_NAME = "dynamic-cafe-v1";
const CACHE_FILES = [
  "/",
  "/manifest.webmanifest",
  "/offline.html",
  "/images/reserve.jpg",
  "/images/about.jpg",
  "/images/load-img-error.png",
  "/images/personel/1.jpg",
  "/images/personel/2.jpg",
  "/images/personel/3.jpg",
  "/images/personel/4.jpg",
  "/images/comments/alireza.png",
  "/images/comments/elham.png",
  "/images/comments/hamid.png",
  "/images/comments/mohamad.png",
  "/images/comments/narges.png",
  "/images/comments/sara.png",
  "/images/comments/sina.png",
  "/favicon/icon-192x192.png",
  "/favicon/icon-512x512.png",
];

// const pathnameCache = []

self.addEventListener("install", (event) => {
  console.log("SW Installed");
  event.waitUntil(
    caches
      .open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(CACHE_FILES);
      })
      .then(() => self.skipWaiting())
      .catch((err) => console.log(err))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  console.log("SW Activated");
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))).then(() =>
        self.clients.claim()
      );
    })
  );
  return self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  const url = new URL(event.request.url);
  const { pathname } = url;
  const { request } = event;

  if (request.method !== "GET" || url.origin !== self.location.origin) {
    return;
  }


  event.respondWith(
  caches.match(event.request).then((res) => {
    return res || fetch(event.request).catch(() => caches.match("/offline.html"));
  })
);

  // async function firstCacheThenNetwork(request) {
  //   try {
  //     const cache = await caches.open(CACHE_NAME);
  //     const cachedResponse = await cache.match(request);
  //     if (cachedResponse) {
  //       return cachedResponse;
  //     }
  //     const serverResponse = await fetch(request);
  //     if (serverResponse.ok) {
  //       const cacheStore = await caches.open(CACHE_NAME);
  //       cacheStore.put(request, serverResponse.clone());
  //     }
  //     return serverResponse;
  //   } catch (error) {
  //     console.log(error);
  //     return caches.match("/offline.html");
  //   }
  // }
});
