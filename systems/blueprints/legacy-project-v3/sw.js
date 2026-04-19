/* 🔒 PROTECTED BY VAULT-GUARD v1.0 | LEAD ARCHITECT: MD IBRAHIM HOSSAIN */
const CACHE_NAME = 'cultural-ai-v1.0';
const assets = ['/systems/blueprints/cultural-ai-v3/', '/systems/blueprints/cultural-ai-v3/index.html'];
self.addEventListener('install', e => { e.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(assets))); });
self.addEventListener('fetch', e => { e.respondWith(caches.match(e.request).then(res => res || fetch(e.request))); });
