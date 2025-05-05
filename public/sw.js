self.addEventListener("install", (event) => {
    console.log("SW Installed");
    self.skipWaiting();
  });
  
  self.addEventListener("activate", (event) => {
    console.log("SW Activated");
    return self.clients.claim();
  });
  
  self.addEventListener("fetch", (event) => {
    event.respondWith(
      caches.match(event.request).then((res) => {
        return res || fetch(event.request);
      })
    );
  });
  