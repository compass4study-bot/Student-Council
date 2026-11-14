// 앱 설치를 가능하게 해 주는 최소한의 파일이에요. 고칠 필요 없어요.
self.addEventListener('install', function () { self.skipWaiting(); });
self.addEventListener('activate', function (e) { e.waitUntil(self.clients.claim()); });
self.addEventListener('fetch', function () {});
