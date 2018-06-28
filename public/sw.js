let cacheName = 'currency-converter-v1';

self.addEventListener('install', (event)=> {
  event.waitUntil(
    caches.open(cacheName).then((cache) =>  {
      return cache.addAll([
          '/css/styles.css',
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/css/bootstrap.min.css',
          '/scripts/app.js',
          'https://code.jquery.com/jquery-3.2.1.slim.min.js',
          'https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js',
          'https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js',
        ]);
    }));
});






