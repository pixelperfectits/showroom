/* 🔒 PROTECTED BY VAULT-GUARD v1.0 | LEAD ARCHITECT: MD IBRAHIM HOSSAIN */
const CACHE_NAME = 'digital-forge-v1.0';
const assets = ['/showroom/design/digital-catalog/', '/showroom/design/digital-catalog/index.html'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets))); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(res => res || fetch(e.request))); });
