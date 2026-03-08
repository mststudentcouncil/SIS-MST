// Service Worker เบื้องต้นสำหรับ PWA
self.addEventListener('install', (e) => {
    console.log('[Service Worker] Install');
});

self.addEventListener('fetch', (e) => {
    // ปล่อยผ่านการดึงข้อมูลตามปกติ
});