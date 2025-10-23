self.addEventListener("install", event => {
    event.waitUntil(
        caches.open("v1").then(cache => {
            return cache.addAll([
                "/quiz/",
                "/quiz/index.html",
                "/quiz/style/quiz.css",
                "/quiz/js/game.js",
                "/quiz/js/quiz.js",
                "/quiz/resource/game/character/cueio.png",
                "/quiz/resource/game/character/pudim.png",
                "/quiz/resource/game/items/especial-1.png",
                "/quiz/resource/game/items/especial-2.jpg",
                "/quiz/resource/game/items/especial-3.jpg",
                "/quiz/resource/game/items/especial-4.jpg",
                "/quiz/resource/game/items/especial-5.jpg",
                "/quiz/resource/game/items/especial-6.png",
                "/quiz/resource/game/items/especial-7.jpg",
                "/quiz/resource/game/items/especial-8.jpg",
                "/quiz/resource/game/items/especial-9.jpg",
                "/quiz/resource/game/items/especial-10.jpg",
                "/quiz/resource/game/items/especial-11.heic",
                "/quiz/resource/game/items/especial-12.jpg",
                "/quiz/resource/game/items/especial-13.jpg",
                "/quiz/resource/game/items/especial-14.jpg"
            ]);
        })
    );
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});