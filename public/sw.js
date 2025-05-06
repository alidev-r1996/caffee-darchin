self.addEventListener("install", (event) => {
    console.log("SW Installed");
    self.skipWaiting();
  });
  
  self.addEventListener("activate", (event) => {
    console.log("SW Activated");
    return self.clients.claim();
  });
  
  self.addEventListener("fetch", (event) => {
    const url = new URL(event.request.url);
  
    // Only handle same-origin requests (your own domain)
    if (url.origin !== self.location.origin) {
      return; // let browser handle it normally
    }
  
    event.respondWith(
      caches.match(event.request).then((res) => {
        return res || fetch(event.request);
      })
    );
  });
  